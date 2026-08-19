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


def main() -> int:
    try:
        author = scholarly.search_author_id(SCHOLAR_USER_ID)
        author = scholarly.fill(author)
    except Exception as exc:
        print(f"[warn] Scholar fetch failed: {exc}")
        return 0

    data = {
        "name": author.get("name"),
        "profile_url": f"https://scholar.google.com/citations?user={SCHOLAR_USER_ID}&hl=en",
        "updated_at": datetime.now(timezone.utc).isoformat(),
        "citations": {
            "all": int(author.get("citedby", 0) or 0),
            "since_2021": int(author.get("citedby5y", 0) or 0),
        },
        "h_index": {
            "all": int(author.get("hindex", 0) or 0),
            "since_2021": int(author.get("hindex5y", 0) or 0),
        },
        "i10_index": {
            "all": int(author.get("i10index", 0) or 0),
            "since_2021": int(author.get("i10index5y", 0) or 0),
        },
    }

    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    with OUT_PATH.open("w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)
        f.write("\n")

    print(
        f"Updated scholar stats for {data.get('name')}: "
        f"{data['citations']['all']} total, {data['citations']['since_2021']} in last 5y"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
