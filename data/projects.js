/*
  Projects. The Code page (code.html) lists all of them; the home page shows
  only the ones marked featured: true (or all of them if none are featured).

  Fields:
    title        Card heading
    description  Two sentences: what it is and why it's interesting
    details      Optional longer paragraph, shown only on the Code page
    tags         Short labels (languages, hardware, topics)
    url          Optional main link (demo, write-up, project page)
    linkLabel    Optional text for url (defaults to "View project")
    repo         Optional link to the source code (shown as "Source")
    image        { src: "assets/images/your-file.jpg", alt: "What the image shows" }
                 Leave src null to show the placeholder box.
    featured     true to show it on the home page
    placeholder  true draws the dashed outline. Set to false once the entry is real.
*/
window.PROJECTS = [
  {
    title: "LED matrix server (Raspberry Pi + C#)",
    description: "[What it is, in one sentence.] [What was interesting about building it.]",
    details: "[Optional longer description for the Code page: how it works, what you'd do differently, what's next.]",
    tags: ["Raspberry Pi", "C#", "[Tag]"],
    url: null, // TODO: demo or write-up link, if any
    repo: "#", // TODO: link to the repo
    image: { src: null, alt: "[Describe the image]" },
    featured: true,
    placeholder: true,
  },
  {
    title: "Interactive image-processing demos",
    description: "[What it is, in one sentence.] [What was interesting about building it.]",
    details: "[Optional longer description for the Code page.]",
    tags: ["[Tag]", "[Tag]"],
    url: "#", // TODO: demo link
    linkLabel: "Try the demos",
    repo: "#", // TODO
    image: { src: null, alt: "[Describe the image]" },
    featured: true,
    placeholder: true,
  },
  {
    title: "Sunday comics app",
    description: "[What it is, in one sentence.] [What was interesting about building it.]",
    details: "[Optional longer description for the Code page.]",
    tags: ["[Tag]", "[Tag]"],
    url: null,
    repo: "#", // TODO
    image: { src: null, alt: "[Describe the image]" },
    featured: false,
    placeholder: true,
  },
  {
    title: "Home lab",
    description: "[What it is, in one sentence.] [What was interesting about building it.]",
    details: "[Optional longer description for the Code page.]",
    tags: ["[Tag]", "[Tag]"],
    url: "uses.html#home-lab",
    linkLabel: "See the hardware",
    repo: null,
    image: { src: null, alt: "[Describe the image]" },
    featured: false,
    placeholder: true,
  },
];
