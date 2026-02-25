# HBOT Reference Site

Static HTML + CSS. No build step, no dependencies, no frameworks. Hosted on GitHub Pages.

## What This Is

Evidence-based HBOT reference aimed at people considering or already using hyperbaric oxygen therapy, especially home-chamber users running 1.5 ATA with a concentrator. Every claim links back to clinical literature.

## Content Rules

- Citation-backed. If a study contradicts something here, update immediately.
- Dual-audience: every content block has a technical and plain-english version, toggled via localStorage (`hbot-mode`). Both must be accurate; the plain version simplifies without distorting.
- Forthright about unknowns. If evidence is weak or only exists at clinical pressure, say so.
- No performative language. No "This isn't X" framing. Direct and useful.

## When to Update

- New RCTs at home pressure (1.3-1.5 ATA) published
- New safety data or adverse event reports
- Significant market/pricing changes (costs page)
- Quarterly: check PubMed for new HBOT studies, refresh dose-response thresholds if new pressure data drops, update market/pricing data

## Technical Notes

All pages share `style.css`. Toggle state syncs across pages via localStorage. Term links point to `glossary.html#id` anchors. Each page is self-contained HTML with its own nav, toggle script, and footer. No shared JS files, no templating.
