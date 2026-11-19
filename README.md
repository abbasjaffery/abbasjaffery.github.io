# abbasjaffery.github.io

Personal site. Plain HTML, one stylesheet (`css/style.css`), one script (`js/main.js`). No framework, no build step, no Jekyll (`.nojekyll` turns it off), no tracking. The only external request is one Google Fonts stylesheet.

The nav has four tabs: **Home**, **Now** (what I'm working on), **Code** (all projects) and **Fun** (a hub for everything else). Food, Writing and Uses are pages under Fun.

```
index.html              Home: sidebar intro + featured projects
now.html                What I'm working on
code.html               All projects with descriptions
fun.html                Hub page linking to the fun sections
food.html               Restaurant reviews (magnitude scale), under Fun
writing.html            Writing index with category filters, under Fun
writing/example-piece.html   Template for a single piece
uses.html               Hardware and software, under Fun
colophon.html  404.html
data/projects.js        Projects (Code page, and featured ones on Home)
data/fun.js             Sections on the Fun page
data/food.js            Restaurant reviews
data/writing.js         Writing entries
css/style.css           All styles; colors are custom properties on :root
js/main.js              Renders the data files, sorting and filters
assets/images/          Photo, project images, figures
assets/resume/          resume.pdf
favicon.svg
```

## Placeholders

Placeholder text is in `[square brackets]`, and placeholder elements have a `placeholder` class that draws a dashed outline. When something is real, delete the brackets and remove the class. In the `data/` files, set `placeholder: false` instead. Search for `TODO:` to find things you need to supply (photo, resume PDF, LinkedIn, email, map).

## Add a project

Add an object to `window.PROJECTS` in `data/projects.js`:

```js
{
  title: "My project",
  description: "What it is. Why it's interesting.",
  details: "Optional longer paragraph, shown only on the Code page.",
  tags: ["Python", "Imaging"],
  url: "https://example.com/demo",          // optional main link
  linkLabel: "Try the demo",                // optional; defaults to "View project"
  repo: "https://github.com/abbasjaffery/my-project",   // optional "Source" link
  image: { src: "assets/images/my-project.jpg", alt: "What the image shows" },
  featured: true,                           // also show it on the home page
  placeholder: false,
},
```

Every project appears on the Code page, in the order listed. Only `featured: true` projects appear on the home page; if none are featured, the home page shows them all. Use `src: null` to keep the placeholder box.

## Add something to the Fun page

Add an object to `window.FUN_SECTIONS` in `data/fun.js`:

```js
{
  title: "Video games",
  description: "One line about what's there.",
  url: "games.html",              // null if the page doesn't exist yet
  status: "Coming soon",          // optional badge
  placeholder: false,
},
```

To give it its own page, copy `uses.html` (a plain page) or `food.html` (a page rendered from a data file) and change the content. Keep the breadcrumb line (`Fun / …`) at the top so people can find their way back.

## Add a food review

Add an object to `window.FOOD_REVIEWS` in `data/food.js`:

```js
{
  city: "Seattle",
  restaurant: "Restaurant name",
  neighborhood: "Capitol Hill",
  visited: "2026-11-01",          // YYYY-MM-DD
  dish: "The thing to order",
  magnitude: 0.5,                 // lower is brighter
  note: "Two or three sentences.",
  placeholder: false,
},
```

Reviews are grouped by `city` (spell it the same way each time). A new city gets its own section and jump link automatically, and cities appear in the order they first show up in the file.

**The magnitude scale.** Ratings use stellar magnitude, where lower numbers are brighter:

| Magnitude | Meaning |
|---|---|
| ≤ −1 | Sirius-tier, unforgettable |
| 0 to 1 | Excellent |
| 2 to 3 | Solid, would return |
| 4 to 5 | Fine |
| ≥ 6 | Below naked-eye visibility, skip it |

Decimals are fine. Values between the listed bands go to the brighter band: anything below 2 counts as excellent, below 4 as solid, and below 6 as fine. The star next to each rating gets bigger as the restaurant gets brighter. The map container at the bottom of `food.html` is empty on purpose and has a `TODO:` comment.

## Add a writing piece

1. Copy `writing/example-piece.html` to `writing/your-piece.html` and replace the bracketed text. It already links to `../css/style.css` and the other shared files.
2. Add an entry to `window.WRITING` in `data/writing.js`:

```js
{
  title: "Piece title",
  category: "Essays",             // Fiction | Essays | Technical explainers | Other
  date: "2026-11-19",             // YYYY-MM-DD; list is newest first
  blurb: "One line.",
  url: "writing/your-piece.html",
  placeholder: false,
},
```

`category` must match a filter button in `writing.html` exactly. To add a category, add a button there with the same `data-category` value.

## Update the Now page

Edit `now.html` directly: change the bullets under Work, Building, Reading and Eating, and update the `Last updated:` date.

## Change colors or fonts

The site is dark-only. Colors are custom properties on `:root` at the top of `css/style.css`, and `--accent` is the one accent color. Fonts are loaded by the Google Fonts `<link>` in each page's `<head>` and named in `--font-display`, `--font-body` and `--font-mono`.

The header and footer are copied into every page. If you change the nav, change it in every HTML file (including `writing/example-piece.html` and `404.html`).

## Preview locally

From the repo folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. You can also open `index.html` straight from disk, since the data files are plain scripts, not `fetch()`ed JSON. The one exception is `404.html`, which uses root paths (`/css/style.css`) so it works at any missing URL on the live site. It only looks right through a server.

## Deploy

1. Push to `main`.
2. On GitHub, go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, and save.
3. The site appears at https://abbasjaffery.github.io within a minute or two of each push.
