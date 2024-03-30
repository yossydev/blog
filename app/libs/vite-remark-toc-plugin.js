import { visit } from "unist-util-visit";

function rehypeTOC() {
  return (tree) => {
    const headings = [];
    visit(tree, "element", (node) => {
      if (node.tagName === "h2" || node.tagName === "h3") {
        const id = createId(node);
        headings.push({ id, ...node });
        node.properties.id = id;
      }
    });

    if (headings.length) {
      const toc = buildTOC(headings);
      tree.children.unshift(toc);
    }
  };
}

function createId(node) {
  return node.children
    .filter((child) => child.type === "text")
    .map((child) => child.value.replace(/\s+/g, "-").toLowerCase())
    .join("");
}

function buildTOC(headings) {
  const listItems = headings.map((heading) => {
    const levelClass = getLevelClass(heading.tagName);
    return {
      type: "element",
      tagName: "li",
      properties: { className: [levelClass] },
      children: [
        {
          type: "element",
          tagName: "a",
          properties: { href: `#${heading.id}` },
          children: [...heading.children],
        },
      ],
    };
  });

  return {
    type: "element",
    tagName: "details",
    properties: { className: ["details-toc"] },
    children: [
      {
        type: "element",
        tagName: "summary",
        children: [{ type: "text", value: "目次" }],
      },
      {
        type: "element",
        tagName: "ul",
        children: listItems,
      },
    ],
  };
}

function getLevelClass(tagName) {
  switch (tagName) {
    case "h2":
      return "toc-level-2";
    case "h3":
      return "toc-level-3";
    case "h4":
      return "toc-level-4";
    default:
      return "";
  }
}

export default rehypeTOC;
