/*
  Sections on the Fun page (fun.html), in this order. Add anything you like.

  Fields:
    title        Card heading
    description  One line
    url          Page it links to. Leave null for a section that doesn't exist yet.
    status       Optional small badge, e.g. "Coming soon"
    placeholder  true draws the dashed outline. Set to false once the entry is real.

  To add a new section with its own page: copy uses.html (a simple page) or
  food.html (a page rendered from a data file) as a starting point, then add
  an entry here pointing to it.
*/
window.FUN_SECTIONS = [
  {
    title: "Food",
    description: "Restaurant reviews, rated on the stellar magnitude scale.",
    url: "food.html",
  },
  {
    title: "Video games",
    description: "[What you'll put here: reviews, a backlog, favorites.]",
    url: null,
    status: "Coming soon",
    placeholder: true,
  },
  {
    title: "Writing",
    description: "Fiction, essays, and technical explainers.",
    url: "writing.html",
  },
  {
    title: "Uses",
    description: "The hardware and software I use, including the home lab.",
    url: "uses.html",
  },
];
