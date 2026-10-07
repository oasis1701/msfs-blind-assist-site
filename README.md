# MSFS Blind Assist website

The source of the MSFS Blind Assist website. The application itself lives in
[oasis1701/msfs-blind-assist](https://github.com/oasis1701/msfs-blind-assist); this
repository holds only the site.

The site is built with [Jekyll](https://jekyllrb.com/) and published by GitHub Pages
from the `main` branch. Every push to `main` rebuilds and redeploys it within a minute
or two; there is nothing to run locally.

## Editing

- **Pages** are the Markdown files at the top level (`index.md`, `download.md`,
  `aircraft.md`, `faq.md`). Each starts with a short header block giving its `title`,
  which the layout renders as the page's single `h1`, so page content starts its
  headings at `##`.
- **Navigation** is `_data/navigation.yml`. Add a page there to put it in the menu.
- **Internal links** go through `relative_url` so they work both at the GitHub Pages
  address and on the custom domain, for example
  `[Download]({{ '/download/' | relative_url }})`.
- **Site-wide values** (title, description, the Discord and repository links)
  are in `_config.yml`.
- **Layout** is the one file `_layouts/default.html`: skip link, header with the main
  navigation, `main`, footer. It is written by hand so the markup stays accessible.
- **Styles**: `assets/css/simple.min.css` is [Simple.css](https://simplecss.org)
  (MIT, see `SIMPLE-CSS-LICENSE.txt` beside it), a classless stylesheet that styles
  plain semantic HTML, including dark mode. Site additions go in `assets/css/site.css`.
- **Downloads** are not hosted here. The Download page links to the app repository's
  release assets through permanent URLs, and `assets/js/releases.js` fills in the
  current version numbers from GitHub's public API when the page can reach it.

## Accessibility checklist for changes

- One `h1` per page (the layout provides it); headings in order, none skipped.
- Link text says where the link goes. Never "here" or "click this".
- Images get an `alt` text that says what the image shows, or `alt=""` if decorative.
- Nothing is conveyed by colour alone; text contrast stays at 4.5:1 or better.

## Local preview (optional)

With Ruby installed: `bundle install`, then `bundle exec jekyll serve` and open
`http://localhost:4000/`. Without Ruby, push a branch and open a
pull request; the deploy workflow only runs for `main`, so review the Markdown in the PR.

## The custom domain

The site is served at https://msfsblindassist.com. Three settings make that work:

1. DNS at Cloudflare: the apex has A and AAAA records for GitHub Pages' addresses, and
   `www` is a CNAME to `oasis1701.github.io`. All of them are DNS only, not proxied, so
   GitHub can issue and renew the certificate.
2. This repository's Settings, Pages names the domain as the custom domain with Enforce
   HTTPS on. The deploy workflow ignores any `CNAME` file, so that setting is the source.
3. `_config.yml` has `url` set to the domain and `baseurl` empty.

The domain is also verified under the account's Settings, Pages, Verified domains, so
nobody else can point it at a GitHub Pages site. The TXT record at Cloudflare named
`_github-pages-challenge-oasis1701` is that proof, so keep it. The old address at
`oasis1701.github.io/msfs-blind-assist-site` redirects to the domain.
