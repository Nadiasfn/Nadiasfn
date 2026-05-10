# Nadia's Personal Website

This repository contains Nadia's personal website built with [Astro](https://astro.build/), including:

- a welcome page on `/`
- a portfolio section managed from content files
- a simple blog
- GitHub Actions deployment to GitHub Pages

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Manage content

- Blog posts: `/src/content/blog/*.md`
- Portfolio entries: `/src/content/projects/*.md`

Add or edit markdown files in these folders to update website content.

## Deployment

The workflow at `.github/workflows/deploy.yml` deploys the site to GitHub Pages on pushes to `main`.

If needed, enable GitHub Pages in repository settings and select **GitHub Actions** as the source.
