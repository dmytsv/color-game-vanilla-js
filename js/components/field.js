import { setState, getState } from "../state.js";
import { cellClick } from "../events.js";

export default ({ gridSize, color, row, col }) => {
  const size = Math.floor(10000 / gridSize) / 100;
  const field = document.createElement("div");
  field.style.cssText = `
  flex: 1 0 ${size}%; 
  background: ${color};
  box-sizing: border-box;
  border: 1px solid white;
  `;
  field.setAttribute("data-row", row);
  field.setAttribute("data-col", col);
  field.addEventListener("click", cellClick);
  return field;
};
