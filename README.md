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

## Issue editor (new sites)

New sites created from this template get GitHub Issues → **Edit content** and **Edit YAML** from the org default forms. Do not add a local `.github/ISSUE_TEMPLATE/` unless this site’s filenames differ from the org list.

1. Add `<!-- CMS:section id=unique_id -->` … `<!-- /CMS:section -->` around editable paragraphs (or run `add_cms_markers.py` from `energy-modelling-tools/.github`).
2. Create labels `content-edit`, `yml-edit`, and `upload-image`.
3. Confirm Actions can create pull requests (the org default is usually enough).

The caller workflow is `.github/workflows/issue-content-handler.yml`. See `energy-modelling-tools/.github` `docs/MAINTENANCE.md`.

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

