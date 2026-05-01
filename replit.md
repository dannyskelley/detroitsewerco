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
- Minification is only enabled in production (`ELEVENTY_ENV=PROD`)
