# lortuno
My CV / portfolio and personal projects.

## Portfolio (GitHub Pages)

A static React site with no build step: React 18 and [htm](https://github.com/developit/htm) load from jsDelivr, and the pages are plain HTML + JS.

| File | Purpose                                                                                              |
| --- |------------------------------------------------------------------------------------------------------|
| `index.html` | English page |
| `src/es.html` | Spanish page |
| `assets/js/app.js` | React components (shared by both languages) |
| `assets/js/content.en.js` / `assets/js/content.es.js` | CV content for each language, taken from `assets/docs/Laura_Ortuno_Lopez_Senior_PHP_CV (092026).pdf` |
| `assets/css/portfolio.css` | Styles (light/dark theme, responsive, print) |
| `src/404.html` | Not-found page |

To change the CV text, edit the two `content.*.js` files. Both files use the same structure.
Links inside them (language switch, CV download) are relative to the page that loads them, so `content.es.js` uses `../` paths.

### Deploy
GitHub Pages publishes the `main` branch as it is (Settings → Pages → "Deploy from a branch"):

- English: https://lortuno.github.io/lortuno/
- Spanish: https://lortuno.github.io/lortuno/src/es.html

`.nojekyll` tells GitHub to serve the files as they are, without Jekyll processing.

## Local environment (Docker)
```
docker compose up -d --build
```
nginx serves the repo root, so the URLs match GitHub Pages: http://localhost/ (English), http://localhost/src/es.html (Spanish), and the PHP projects under http://localhost/src/.
