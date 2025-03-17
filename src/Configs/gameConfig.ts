export const cellColors = {
  entry: "rgba(193, 232, 232, 1.00)",
  path: "rgba(189, 201, 237, 1.00)",
  pathBorder: "yellow",
  wall: "rgba(243, 196, 189, 1.00)",
  visited: "rgba(230, 222, 245, 1.00)",
  visitedMid: "deepskyblue",
  visitedStart: "blue",
  exit: "rgba(164, 240, 196, 1.00)",
  clear: "transparent",
};

const root = document.querySelector(":root") as HTMLElement;
root.style.setProperty("--pf-cell-entry", cellColors.entry);
root.style.setProperty("--pf-cell-path", cellColors.path);
root.style.setProperty("--pf-cell-path-border", cellColors.pathBorder);
root.style.setProperty("--pf-cell-wall", cellColors.wall);
root.style.setProperty("--pf-cell-visited", cellColors.visited);
root.style.setProperty("--pf-cell-visited-mid", cellColors.visitedMid);
root.style.setProperty("--pf-cell-visited-start", cellColors.visitedStart);
root.style.setProperty("--pf-cell-exit", cellColors.exit);
root.style.setProperty("--pf-cell-clear", cellColors.clear);
