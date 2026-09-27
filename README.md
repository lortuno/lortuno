# lortuno
My CV / portfolio and personal projects.

## Portfolio (GitHub Pages)

A static React site with no build step: React 18 and [htm](https://github.com/developit/htm) load from jsDelivr, and the pages are plain HTML + JS.

| File | Purpose                                                                                              |
| --- |------------------------------------------------------------------------------------------------------|
| `src/index.html` | English page                                                                                         |
| `src/es.html` | Spanish page                                                                                         |
| `src/assets/js/app.js` | React components (shared by both languages)                                                          |
| `src/assets/js/content.en.js` / `src/assets/js/content.es.js` | CV content for each language, taken from `src/assets/docs/Laura_Ortuno_Lopez_Senior_PHP_CV (092026).pdf` |
| `src/assets/css/portfolio.css` | Styles (light/dark theme, responsive, print)                                                         |
| `src/404.html` | Not-found page                                                                                       |

To change the CV text, edit the two `content.*.js` files. Both files use the same structure.

### Deploy
GitHub Pages publishes the `main` branch as it is (Settings → Pages → "Deploy from a branch"). The portfolio lives in `src/`, so it is served at:

- English: https://lortuno.github.io/lortuno/src/
- Spanish: https://lortuno.github.io/lortuno/src/es.html

All of the portfolio's assets are in `src/assets/`, next to the pages, so their relative links work both on GitHub Pages and locally.

`.github/workflows/pages.yml` is only used if you switch Pages → Source to "GitHub Actions". It publishes `src/` at the site root.

## Local environment (Docker)
```
docker compose up -d --build
```
Then open http://localhost/ (English) or http://localhost/es.html (Spanish).
