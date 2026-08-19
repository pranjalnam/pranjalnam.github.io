#!/usr/bin/env python3
"""
Scrapes citation stats from a public Google Scholar profile and writes them
to data/scholar_stats.json. Run daily via .github/workflows/update-scholar-stats.yml.

Defensive by design: Google Scholar sometimes serves a CAPTCHA/blocked page to
automated traffic (including GitHub Actions runners). If the expected markup
isn't found, this script exits without touching the JSON file, so a bad fetch
never overwrites good data with zeros or an error.
"""
import json
import sys
from datetime import timezone, datetime
from pathlib import Path

import requests
from bs4 import BeautifulSoup

SCHOLAR_USER_ID = "h1eTTwIAAAAJ"
URL = f"https://scholar.google.com/citations?user={SCHOLAR_USER_ID}&hl=en"
OUT_PATH = Path(__file__).resolve().parent.parent / "data" / "scholar_stats.json"

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
    )
}


def is_scholar_block_error(exc: requests.RequestException) -> bool:
    status_code = getattr(getattr(exc, "response", None), "status_code", None)
    if status_code in (403, 429):
        return True

    msg = str(exc)
    return ("403 Client Error" in msg or "429 Client Error" in msg) and "for url:" in msg


def fetch_html() -> str:
    resp = requests.get(URL, headers=HEADERS, timeout=20)
    resp.raise_for_status()
    return resp.text


def parse_headline_stats(soup: BeautifulSoup):
    """Returns (citations_all, citations_recent, h_all, h_recent, i10_all, i10_recent) or None."""
    cells = soup.select("#gsc_rsb_st td.gsc_rsb_std")
    values = [c.get_text(strip=True) for c in cells]
    if len(values) < 6 or not all(v.isdigit() for v in values[:6]):
        return None
    nums = [int(v) for v in values[:6]]
    return {
        "citations_all": nums[0],
        "citations_recent": nums[1],
        "h_index_all": nums[2],
        "h_index_recent": nums[3],
        "i10_index_all": nums[4],
        "i10_index_recent": nums[5],
    }


def parse_yearly_chart(soup: BeautifulSoup):
    """Returns a list of {"year": int, "citations": int} or None if not found."""
    years = [s.get_text(strip=True) for s in soup.select(".gsc_md_hist_b .gsc_g_t")]
    bars = soup.select(".gsc_md_hist_b a.gsc_g_a")
    if not years or not bars or len(years) != len(bars):
        return None
    out = []
    for year, bar in zip(years, bars):
        if not year.isdigit():
            return None
        label = bar.select_one(".gsc_g_al")
        count = label.get_text(strip=True) if label else bar.get("data-y") or "0"
        if not str(count).isdigit():
            return None
        out.append({"year": int(year), "citations": int(count)})
    return out


def main():
    try:
        html = fetch_html()
    except requests.HTTPError as e:
        if is_scholar_block_error(e):
            print(f"Scholar blocked request (403): {URL}", file=sys.stderr)
            sys.exit(0)
        print(f"Fetch failed: {e}", file=sys.stderr)
        sys.exit(1)
    except requests.RequestException as e:
        if is_scholar_block_error(e):
            print(f"Scholar blocked request (403): {URL}", file=sys.stderr)
            sys.exit(0)
        print(f"Fetch failed: {e}", file=sys.stderr)
        sys.exit(1)

    soup = BeautifulSoup(html, "html.parser")
    stats = parse_headline_stats(soup)
    if stats is None:
        print("Could not parse headline stats (possibly blocked/CAPTCHA'd). Leaving existing data untouched.", file=sys.stderr)
        sys.exit(0)

    yearly = parse_yearly_chart(soup)
    if yearly is None:
        print("Could not parse yearly chart; keeping previous chart data if present.", file=sys.stderr)
        yearly = None

    result = {
        "citations_all": stats["citations_all"],
        "citations_recent": stats["citations_recent"],
        "h_index_all": stats["h_index_all"],
        "h_index_recent": stats["h_index_recent"],
        "i10_index_all": stats["i10_index_all"],
        "i10_index_recent": stats["i10_index_recent"],
        "last_updated": datetime.now(timezone.utc).date().isoformat(),
    }

    if yearly is not None:
        result["yearly"] = yearly
    elif OUT_PATH.exists():
        try:
            previous = json.loads(OUT_PATH.read_text())
            if "yearly" in previous:
                result["yearly"] = previous["yearly"]
        except (json.JSONDecodeError, OSError):
            pass

    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUT_PATH.write_text(json.dumps(result, indent=2) + "\n")
    print(f"Wrote {OUT_PATH}: {result}")


if __name__ == "__main__":
    main()
