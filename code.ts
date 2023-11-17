(async () => {
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });

  const nodes = figma.currentPage.findAllWithCriteria({
    types: ["RECTANGLE"],
  });
  for (let i = 0; i < nodes.length; ++i) {
    const text = figma.createText();
    text.name = nodes[i].name.split(" ")[1];
    text.x = nodes[i].x;
    text.y = nodes[i].y;
    text.characters = nodes[i].name.split(" ")[1];

    text.fontSize = 24;
    text.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
    text.strokes = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
    text.strokeWeight = 2;
    nodes[i].parent?.appendChild(text);
  }
})().then(() => {
  figma.closePlugin();
});
