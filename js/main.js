/* ==========================================================================
   abbasjaffery.github.io — the one script
   Renders content from data/*.js (which set window.PROJECTS,
   window.FOOD_REVIEWS and window.WRITING) and wires up sorting and filters.
   Each block only runs if its container is on the current page.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- Helpers ---------- */
  const ESC = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ESC[c]);
  const phClass = (item) => (item.placeholder ? " placeholder" : "");
  const slug = (s) =>
    String(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "section";

  // ISO dates (YYYY-MM-DD) become <time>; anything else (like "[Date]") is shown as-is.
  function formatDate(s) {
    if (/^\d{4}-\d{2}-\d{2}$/.test(s)) {
      const d = new Date(s + "T00:00:00");
      const label = d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
      return `<time datetime="${s}">${label}</time>`;
    }
    return esc(s);
  }

  /* ---------- Footer year ---------- */
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  /* ---------- Projects (index.html) ---------- */
  const projectsGrid = document.getElementById("projects-grid");
  if (projectsGrid) {
    const projects = window.PROJECTS || [];
    projectsGrid.innerHTML = projects
      .map((p) => {
        const img = p.image && p.image.src
          ? `<img src="${esc(p.image.src)}" alt="${esc(p.image.alt)}" loading="lazy">`
          : `<div class="img-ph" role="img" aria-label="Image placeholder"><span>[Project image]</span></div>`;
        const tags = (p.tags || []).map((t) => `<li class="tag">${esc(t)}</li>`).join("");
        return `
          <li class="card${phClass(p)}">
            ${img}
            <h3>${esc(p.title)}</h3>
            <p>${esc(p.description)}</p>
            <ul class="tags" aria-label="Tags">${tags}</ul>
            <a class="more" href="${esc(p.url || "#")}">${esc(p.linkLabel || "View project")}<span class="sr-only">: ${esc(p.title)}</span> <span aria-hidden="true">→</span></a>
          </li>`;
      })
      .join("");
  }

  /* ---------- Food (food.html) ---------- */
  const foodRoot = document.getElementById("food-root");
  if (foodRoot) {
    const MINUS = "−";

    // Tier boundaries: ≤ −1 Sirius-tier · < 2 excellent · < 4 solid · < 6 fine · ≥ 6 skip
    const tierFor = (m) =>
      m <= -1 ? "Sirius-tier, unforgettable"
      : m < 2 ? "Excellent"
      : m < 4 ? "Solid, would return"
      : m < 6 ? "Fine"
      : "Below naked-eye visibility, skip it";

    const formatMag = (m) => Number(m).toFixed(1).replace("-", MINUS);

    // Brighter (lower) magnitude → bigger star, clamped to 4–15px.
    const dotSize = (m) => Math.max(4, Math.min(15, 12 - 1.6 * m)).toFixed(1) + "px";

    function renderReviews(items) {
      return items
        .map((r) => `
          <li class="card review${phClass(r)}">
            <div class="review-head">
              <div>
                <h3>${esc(r.restaurant)}</h3>
                <p class="meta">${esc(r.neighborhood)} · Visited ${formatDate(r.visited)}</p>
              </div>
              <p class="mag" title="${esc(tierFor(r.magnitude))}">
                <span class="mag-dot" style="--d:${dotSize(r.magnitude)}" aria-hidden="true"></span>
                <span><span class="sr-only">Magnitude </span>m ${formatMag(r.magnitude)}</span>
              </p>
            </div>
            <p class="tier">${esc(tierFor(r.magnitude))}</p>
            <p class="dish"><span class="label">Order</span> ${esc(r.dish)}</p>
            <p class="note">${esc(r.note)}</p>
          </li>`)
        .join("");
    }

    // Group by city, keeping cities and reviews in the order they appear in the data file.
    const byCity = new Map();
    (window.FOOD_REVIEWS || []).forEach((r, i) => {
      if (!byCity.has(r.city)) byCity.set(r.city, []);
      byCity.get(r.city).push(Object.assign({ _order: i }, r));
    });

    const jump = document.getElementById("city-jump");
    if (jump) {
      jump.innerHTML = [...byCity.keys()]
        .map((c) => `<li><a href="#city-${slug(c)}">${esc(c)}</a></li>`)
        .join("");
    }

    foodRoot.innerHTML = [...byCity.entries()]
      .map(([city, items], idx) => {
        const id = `city-${slug(city)}`;
        return `
          <section class="city" id="${id}" aria-labelledby="${id}-h">
            <div class="city-head">
              <h2 id="${id}-h">${esc(city)}</h2>
              <label class="sort" for="sort-${idx}">Sort
                <select id="sort-${idx}" data-city="${esc(city)}" autocomplete="off">
                  <option value="listed">As listed</option>
                  <option value="bright">Brightest first</option>
                  <option value="dim">Dimmest first</option>
                </select>
              </label>
            </div>
            <ul class="reviews">${renderReviews(items)}</ul>
          </section>`;
      })
      .join("");

    foodRoot.addEventListener("change", (e) => {
      const select = e.target.closest("select[data-city]");
      if (!select) return;
      const items = byCity.get(select.dataset.city).slice();
      if (select.value === "bright") items.sort((a, b) => a.magnitude - b.magnitude);
      else if (select.value === "dim") items.sort((a, b) => b.magnitude - a.magnitude);
      else items.sort((a, b) => a._order - b._order);
      select.closest(".city").querySelector(".reviews").innerHTML = renderReviews(items);
    });
  }

  /* ---------- Writing (writing.html) ---------- */
  const writingList = document.getElementById("writing-list");
  if (writingList) {
    // Newest first. Placeholder dates like "[Date]" keep their file order.
    const entries = (window.WRITING || []).slice().sort((a, b) => String(b.date).localeCompare(String(a.date)));
    const status = document.getElementById("writing-status");
    const buttons = document.querySelectorAll(".filter[data-category]");

    function render(category) {
      const shown = category === "All" ? entries : entries.filter((e) => e.category === category);
      writingList.innerHTML = shown.length
        ? shown
            .map((e) => `
              <li class="entry${phClass(e)}">
                <span class="date">${formatDate(e.date)}</span>
                <div>
                  <h2><a href="${esc(e.url)}">${esc(e.title)}</a></h2>
                  <p class="blurb">${esc(e.blurb)}</p>
                  <span class="tag">${esc(e.category)}</span>
                </div>
              </li>`)
            .join("")
        : `<li class="entry"><span class="date"></span><p>Nothing in this category yet.</p></li>`;
      if (status) {
        const noun = shown.length === 1 ? "piece" : "pieces";
        status.textContent = `Showing ${shown.length} ${noun}${category === "All" ? "" : " in " + category}.`;
      }
    }

    buttons.forEach((btn) =>
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
        render(btn.dataset.category);
      })
    );

    render("All");
  }
})();
