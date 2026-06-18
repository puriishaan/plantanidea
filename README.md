# plantanidea.com — static site

A clean, static recreation of the **Plant An Idea** NGO site that was previously hosted on Wix,
now built for **GitHub Pages** and editable in VS Code.

## Structure
```
index.html        — Home (video hero, mission, stats, contact form)
planter.html      — The Planter (features + demo videos + control-flow diagram)
journey.html      — Journey & Impact (DASRA, UN Food & Agriculture Conf, Assam rollout)
about.html        — About The Founder
styles.css        — all styling, shared across pages (CSS variables at the top)
assets/img/       — images   |   assets/video/ — the demo + hero videos
DNS-MIGRATION.md  — how to point plantanidea.com at this site (do this last)
```

## Run locally
```
python3 -m http.server 8732
```
then open http://localhost:8732

## Deploy
Served via GitHub Pages from the `main` branch (root).
Preview URL: **https://puriishaan.github.io/plantanidea/**

The custom domain (plantanidea.com) is **still on Wix** for now — see `DNS-MIGRATION.md`.

## Notes
- Fonts: **Inter** (headings/body, a close free stand-in for Wix's Madefor) + **Courier Prime**
  (the typewriter/monospace text), from Google Fonts.
- **Contact form:** GitHub Pages is static, so the form has no server. It currently composes an
  email to `plantanidea.contact@gmail.com` via the visitor's mail app. To store submissions instead,
  drop in a free [Formspree](https://formspree.io) endpoint (one line in `index.html`).
- Videos are the original Wix-hosted clips, downloaded locally (≈92 MB total — all under GitHub's
  100 MB/file limit).
