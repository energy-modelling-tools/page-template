# Page Template (shared theme)

This folder is a reusable Jekyll theme you can push to GitHub as `page-template`.

## How to publish
1) Create a repo named `page-template` (any owner/Org is fine).  
2) Copy these files into that repo and push.  
3) Ensure `jekyll-remote-theme` is allowed (GitHub Pages enables it by default).

## How to consume from a site
In the consuming site’s `_config.yml`:
```yaml
remote_theme: YOUR-ORG_OR_USER/page-template@main
plugins:
  - jekyll-remote-theme
  - jekyll-seo-tag
```
Then remove local `_layouts`, `_includes`, and shared `assets` so the theme is used.

## Override rules
- If the consuming site places a file with the same path/name, it overrides the theme file (e.g., `assets/img/logo.png` in the site beats the one in the theme).
- Content (Markdown pages, data files) stays in the consuming site.
# Page Template (shared theme)

This folder is a reusable Jekyll theme you can push to GitHub as `page-template`.

## How to publish
1) Create a repo named `page-template` (any owner/Org is fine).  
2) Copy these files into that repo and push.  
3) Ensure `jekyll-remote-theme` is allowed (GitHub Pages enables it by default).

## How to consume from a site
In the consuming site’s `_config.yml`:
```yaml
remote_theme: YOUR-ORG_OR_USER/page-template@main
plugins:
  - jekyll-remote-theme
  - jekyll-seo-tag
```
Then remove local `_layouts`, `_includes`, and shared `assets` so the theme is used.

## Override rules
- If the consuming site places a file with the same path/name, it overrides the theme file (e.g., `assets/img/logo.png` in the site beats the one in the theme).
- Content (Markdown pages, data files) stays in the consuming site.

