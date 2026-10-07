# CLAUDE.md

This repository is the MSFS Blind Assist website only: a Jekyll site published by GitHub
Pages. The application lives in the app repository, `oasis1701/msfs-blind-assist`.
Nothing here is built by hand: a push to `main` deploys the site at
https://oasis1701.github.io/msfs-blind-assist-site/.

## Who the site is for

Pilots who are blind or visually impaired come here to learn what the app does, download
it and find help. Write for them: plain language, what is different when they fly, never
implementation detail. Most read with a screen reader, so the markup rules below are
not optional.

## Where the facts come from

Every claim on the site must trace to the app repository. Never invent a feature, a
hotkey, a menu path or a requirement, and never describe how a feature works from memory.
Read the source first, then write.

Get a copy of the app repository first. If a `CLAUDE.local.md` beside this file names a
local checkout, read from there. Otherwise take a shallow clone into your scratchpad
directory, never into this repository:

```
gh repo clone oasis1701/msfs-blind-assist <scratchpad>/msfs-blind-assist -- --depth 1
```

The paths below are relative to that checkout.

- `README.md`: the feature list per aircraft. Prefer it over anything else.
- `changelog.d/*.md`: one pilot-facing fragment per merged change, named
  `<pr>-<slug>.<category>.md`. Fragments with the `internal` category are never
  user-facing.
- `docs/updates.md`: the release and preview channels, version numbers, and going back
  from a preview to a release.
- `MSFSBlindAssist/Guides/` (the A380 manual) and `MSFSBlindAssist/HotkeyGuides/` (the
  per-aircraft hotkey lists): the documents that ship with the app.
- Release notes need no checkout: `gh release view --repo oasis1701/msfs-blind-assist`
  for the current release, and `gh release view preview --repo oasis1701/msfs-blind-assist`
  for what the preview holds since the last release.

Something that is in the preview but not in a release is "in the preview build". Say so,
and never list it as a feature of the release.

## Downloads

The site never hosts binaries. The two permalinks are fixed and are the same ones the app
README uses:

- Release: https://github.com/oasis1701/msfs-blind-assist/releases/latest/download/MSFSBA.zip
  (GitHub's `latest` skips pre-releases, so this can never serve the preview).
- Preview: https://github.com/oasis1701/msfs-blind-assist/releases/download/preview/MSFSBA-preview.zip
  (the `preview` tag is fixed and the release is updated in place).

`assets/js/releases.js` fills in version numbers from GitHub's public API. Every page
must read correctly without it.

## Site structure

- Pages are the top-level Markdown files (`index.md`, `download.md`, `aircraft.md`,
  `faq.md`) with a front matter `title`. The layout renders the title as the page's only
  `h1`, so content starts at `##`.
- Navigation is `_data/navigation.yml`.
- The layout is `_layouts/default.html`, written by hand. Keep the skip link as the first
  focusable element, `<nav aria-label="Main">` with a `<ul>`, and
  `<main id="main" tabindex="-1">`.
- `assets/css/simple.min.css` is vendored Simple.css: never edit it. Upgrade by replacing
  the file and the version line in `SIMPLE-CSS-LICENSE.txt`. Site rules go in
  `assets/css/site.css`.
- Internal links go through `relative_url`: `[Download]({{ '/download/' | relative_url }})`.
  A bare `/download/` breaks under the `baseurl` at the GitHub Pages address.
- `_config.yml` holds `url` and `baseurl` (change both when the custom domain goes live),
  the shared links (`site.app_repo`, `site.discord`, `site.kofi`) and the plugin list.
  Only plugins on the GitHub Pages allow-list work with the built-in builder.

## Accessibility rules for every change

- One `h1` per page. Heading levels in order, none skipped.
- Link text says where the link goes. Never "here", "click", or a bare URL as link text.
- Images carry `alt` text that says what the image shows, or `alt=""` when decorative.
- Nothing is conveyed by colour alone. Text contrast is at least 4.5:1 in both light and
  dark mode; Simple.css's defaults satisfy this, so check any new colour.
- Keyboard focus stays visible. Never remove outlines.
- Menu paths in prose use words, not arrows: "Settings, then Updates".

## Building and checking

Do not assume Ruby is installed. The GitHub run and the live page are the check:

```
git push
gh run watch $(gh run list --workflow pages.yml --limit 1 --json databaseId -q '.[0].databaseId') --exit-status
curl -s https://oasis1701.github.io/msfs-blind-assist-site/download/ | grep -c "<h1"
```

The served pages can lag a deploy by a minute; a first 404 is not a failure. A push to
`main` deploys at once, so for anything beyond a typo, branch and open a pull request so
the wording can be reviewed first.

## Machine-specific notes

Anything true only of one computer (where the app repo is checked out, whether Ruby is
installed) goes in `CLAUDE.local.md`, which Claude Code loads alongside this file and
which is git-ignored. Never put a local path in this file.
