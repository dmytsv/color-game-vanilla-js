import { setState, getState } from "../state.js";
import createField from "./field.js";

export default () => {
  const root = document.querySelector("#root");
  let { colors, fields, gridSize } = getState();

  const container = document.createElement("div");
  container.classList.add("field-container");
  fields.forEach(({ color, row, col }) => {
    let field = createField({ gridSize, color: colors[color], row, col });
    container.appendChild(field);
  });
  root.innerHTML = "";
  root.appendChild(container);
};
