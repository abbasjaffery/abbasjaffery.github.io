/*
  Projects shown on the home page, in this order.

  Fields:
    title        Card heading
    description  Two sentences
    tags         Short labels (languages, hardware, topics)
    url          Where the card links (repo, demo, write-up)
    linkLabel    Optional link text (defaults to "View project")
    image        { src: "assets/images/your-file.jpg", alt: "What the image shows" }
                 Leave src null to show the placeholder box.
    placeholder  true draws the dashed outline. Set to false once the card is real.
*/
window.PROJECTS = [
  {
    title: "LED matrix server (Raspberry Pi + C#)",
    description: "[What it does, in one sentence.] [What was interesting about building it.]",
    tags: ["Raspberry Pi", "C#", "[Tag]"],
    url: "#", // TODO: link to repo or write-up
    linkLabel: "[Link]",
    image: { src: null, alt: "[Describe the image]" },
    placeholder: true,
  },
  {
    title: "Interactive image-processing demos",
    description: "[What it does, in one sentence.] [What was interesting about building it.]",
    tags: ["[Tag]", "[Tag]"],
    url: "#", // TODO
    linkLabel: "[Link]",
    image: { src: null, alt: "[Describe the image]" },
    placeholder: true,
  },
  {
    title: "Sunday comics app",
    description: "[What it does, in one sentence.] [What was interesting about building it.]",
    tags: ["[Tag]", "[Tag]"],
    url: "#", // TODO
    linkLabel: "[Link]",
    image: { src: null, alt: "[Describe the image]" },
    placeholder: true,
  },
  {
    title: "Home lab",
    description: "[What it does, in one sentence.] [What was interesting about building it.]",
    tags: ["[Tag]", "[Tag]"],
    url: "uses.html#home-lab",
    linkLabel: "[Link]",
    image: { src: null, alt: "[Describe the image]" },
    placeholder: true,
  },
];
