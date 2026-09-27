# lortuno
My CV / portfolio and personal projects.

## Portfolio (GitHub Pages)

A static React site with no build step: React 18 and [htm](https://github.com/developit/htm) load from jsDelivr, and the pages are plain HTML + JS.

| File | Purpose                                                                                              |
| --- |------------------------------------------------------------------------------------------------------|
| `src/index.html` | English page                                                                                         |
| `src/es.html` | Spanish page                                                                                         |
| `assets/js/app.js` | React components (shared by both languages)                                                          |
| `assets/js/content.en.js` / `assets/js/content.es.js` | CV content for each language, taken from `assets/docs/Laura_Ortuno_Lopez_Senior_PHP_CV (092026).pdf` |
| `assets/css/portfolio.css` | Styles (light/dark theme, responsive, print)                                                         |
| `src/404.html` | Not-found page                                                                                       |

To change the CV text, edit the two `content.*.js` files. Both files use the same structure.

### Deploy
`.github/workflows/pages.yml` publishes the portfolio every time you push to `main`/`master`. Before the first deploy, go to **Settings → Pages → Source** and select **GitHub Actions**.
The workflow publishes the three pages in `src/` and the whole `assets/` folder (CSS, JS, the CV PDF and the favicon). PHP pages don't run on GitHub Pages, so it leaves them out.

## Local environment (Docker)
```
docker compose up -d --build
```
Then open http://localhost/ (English) or http://localhost/es.html (Spanish).
