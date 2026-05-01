# Starter Kit v4 — Intermediate Website Kit (SASS)

## Project Overview

A static website starter kit built with **Eleventy (11ty)** + **Nunjucks** templates, styled with **SASS**. This is a business website for Detroit Sewer Co, featuring multiple pages, a blog, and a CMS powered by Decap CMS.

## Tech Stack

- **Static Site Generator:** Eleventy (`@11ty/eleventy` v2)
- **Template Language:** Nunjucks (`.njk`)
- **Styling:** SASS → compiled to `src/assets/css/`
- **CMS:** Decap CMS (admin panel at `/admin`)
- **Image Processing:** `@codestitchofficial/eleventy-plugin-sharp-images`
- **Package Manager:** npm

## Project Structure

```
src/
  _includes/        # Nunjucks layouts and components
    layouts/        # Base templates (base.html, post.html)
    components/     # Reusable partials (header, footer, hero, etc.)
  _data/            # Global data files (client.json)
  admin/            # Decap CMS config and entry point
  assets/
    sass/           # SASS source files
    css/            # Compiled CSS (output from SASS)
    js/             # Client-side JavaScript
    images/         # Images
    fonts/          # Fonts
  content/
    pages/          # Site pages
    blog/           # Blog posts (Markdown)
  config/           # Eleventy config helpers
  index.html        # Homepage
public/             # Generated output (gitignored in production)
```

## Development

- **Start dev server:** `npm run dev`
  - Builds SASS first, then runs SASS watcher + Eleventy dev server in parallel
  - Eleventy serves on port 5000
- **Build for production:** `npm run build`
  - Runs SASS build then Eleventy production build
  - Output goes to `public/`

## Deployment

- **Type:** Static site deployment
- **Build command:** `npm run build`
- **Public directory:** `public/`

## Configuration Notes

- `src/config/server.js` — Eleventy dev server options (port 5000, showAllHosts: true)
- `.eleventy.js` — Main Eleventy configuration
- `src/_data/client.json` — Site metadata (used for sitemap hostname, etc.)
- `src/_data/cities.json` — 16 Metro Detroit city entries used to paginate `/servicearea/[city-slug]/` pages
- `src/_data/services.json` — 5 service entries used to paginate `/services/[service-slug]/` pages
- Minification is only enabled in production (`ELEVENTY_ENV=PROD`)

## SEO Architecture (as of Task #8)

- **Individual city pages:** `src/content/pages/servicearea/city.html` (Eleventy pagination over `cities`) generates 16 pages at `/servicearea/[slug]/`, each with unique title, description, H1, and city-scoped LocalBusiness JSON-LD
- **Individual service pages:** `src/content/pages/services/service.html` (Eleventy pagination over `services`) generates 5 pages at `/services/[slug]/`, each with unique title, description, H1, and Service JSON-LD
- **Computed SEO data:** `city.11tydata.js` and `service.11tydata.js` use `eleventyComputed` to dynamically set `title` and `description` per paginated page
- **Parent page links:** `/services/` page shows a card grid linking to all 5 service sub-pages; `/servicearea/` shows a card grid linking to all 16 city sub-pages
- **Sitemap:** All 21 new pages included automatically via `addAllPagesToCollections: true`
- Build produces 45 HTML pages (was 24 before this task)
