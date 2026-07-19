import { visit } from "unist-util-visit";

export function customImages() {
  return (tree) => {
    visit(tree, "paragraph", (node, index, parent) => {
      if (!node.children || node.children.length !== 1) return;
      const child = node.children[0];
      if (child.type !== "text") return;
      const match = child.value.match(
        /^!\[\]\("([^"]+)",\s*"([^"]*)",\s*"([^"]*)",\s*(true|false)\)$/
      );
      if (!match) return;
      const [, src, align, caption, float] = match;
      const floatClass = float === "true"
        ? (align === "left" ? "img-left" : align === "right" ? "img-right" : "img-center")
        : "";
      const html = `<figure class="${floatClass}">
  <img src="${src}" alt="${caption}" />
  <figcaption>${caption}</figcaption>
</figure>`;
      parent.children[index] = { type: "html", value: html };
    });
  };
}
