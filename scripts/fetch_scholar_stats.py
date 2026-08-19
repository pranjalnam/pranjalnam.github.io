#!/usr/bin/env python3
"""
Fetches citation stats from Google Scholar via scholarly and writes them
to data/scholar_stats.json. Run daily via .github/workflows/update-scholar-stats.yml.
"""
import json
from datetime import datetime, timezone
from pathlib import Path

from scholarly import scholarly

SCHOLAR_USER_ID = "h1eTTwIAAAAJ"
OUT_PATH = Path(__file__).resolve().parent.parent / "data" / "scholar_stats.json"


def to_int(value, default=0) -> int:
    try:
        return int(value)
    except (TypeError, ValueError):
        return default


def main() -> int:
    try:
        author = scholarly.search_author_id(SCHOLAR_USER_ID)
        author = scholarly.fill(author)
    except Exception as exc:
        print(f"[warn] Scholar fetch failed: {exc}")
        return 0

    cites_per_year = author.get("cites_per_year") or {}
    yearly = [
        {"year": int(year), "citations": to_int(citations, 0)}
        for year, citations in sorted(cites_per_year.items(), key=lambda kv: int(kv[0]))
    ]

    citations_all = to_int(author.get("citedby"), 0)
    citations_recent = to_int(author.get("citedby5y"), 0)
    h_index_all = to_int(author.get("hindex"), 0)
    h_index_recent = to_int(author.get("hindex5y"), 0)
    i10_index_all = to_int(author.get("i10index"), 0)
    i10_index_recent = to_int(author.get("i10index5y"), 0)

    data = {
        "name": author.get("name"),
        "profile_url": f"https://scholar.google.com/citations?user={SCHOLAR_USER_ID}&hl=en",
        "updated_at": datetime.now(timezone.utc).isoformat(),

        # New nested structure
        "citations": {
            "all": citations_all,
            "since_2021": citations_recent,
        },
        "h_index": {
            "all": h_index_all,
            "since_2021": h_index_recent,
        },
        "i10_index": {
            "all": i10_index_all,
            "since_2021": i10_index_recent,
        },

        # Raw + normalized yearly data
        "cites_per_year": {str(k): to_int(v, 0) for k, v in cites_per_year.items()},
        "yearly": yearly,

        # Backward-compatible keys (for existing frontend code)
        "citations_all": citations_all,
        "citations_recent": citations_recent,
        "h_index_all": h_index_all,
        "h_index_recent": h_index_recent,
        "i10_index_all": i10_index_all,
        "i10_index_recent": i10_index_recent,
        "last_updated": datetime.now(timezone.utc).date().isoformat(),
    }

    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    with OUT_PATH.open("w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)
        f.write("\n")

    print(
        f"Updated scholar stats for {data.get('name')}: "
        f"{citations_all} total, {citations_recent} in last 5y"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
