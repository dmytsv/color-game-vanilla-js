import { getState, setState } from "./state.js";
import { EVENTS, MESSAGE_CLASS, MESSAGE_TEXT } from "./_constants.js";

import buildFields from "./components/fieldContainer.js";
import buildMessage from "./components/message.js";

export const stateChangeEvent = new Event(EVENTS.STATE_CHANGE);

export const buildView = event => {
  buildMessage();
  buildFields();
};

export const cellClick = ({ target }) => {
  let row = +target.getAttribute("data-row");
  let col = +target.getAttribute("data-col");
  let { fields, numberOfColors } = getState();
  if (fields.length) {
    fields = fields.map(field => ({
      ...field,
      color:
        field.row === row || field.col === col
          ? ++field.color % numberOfColors
          : field.color
    }));
    setState({ fields });
  }
};

const inputGrid = document.querySelector("#grid");
const random = numberOfColors => Math.floor(Math.random() * numberOfColors);
const setColors = () => {
  let colorInputs = [
    ...document.querySelectorAll('.colors > input[type="color"]')
  ];
  let { numberOfColors, defaultColors } = getState();
  let colors = colorInputs.map(({ value }) => value);
  colors = colors.length ? colors : defaultColors;
  setState({ colors, numberOfColors: colors.length });
};

export const colorClick = event => {
  let hexColor = c => {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  const randomColor = () => hexColor(Math.floor(Math.random() * 257));

  let colorButton = document.querySelector("#color");
  let colorsContainer = document.querySelector(".colors");
  let colorInput = document.createElement("input");

  colorInput.setAttribute("type", "color");
  colorInput.value = `#${randomColor()}${randomColor()}${randomColor()}`;
  colorsContainer.insertBefore(colorInput, colorButton);

  setColors();
};

export const startClick = event => {
  let gridSize = +inputGrid.value;
  let { message, numberOfColors } = getState();
  let text = "";
  let customClass = "";

  if (!gridSize) {
    text = MESSAGE_TEXT.ERROR_EMPTY_INPUT;
    customClass = [MESSAGE_CLASS.ERROR];
    gridSize = null;
  } else if (gridSize < 0 || gridSize % 1) {
    text = MESSAGE_TEXT.ERROR_NEGATIVE_DECIMAL_ROWS;
    customClass = [MESSAGE_CLASS.ERROR];
    gridSize = null;
  } else {
    text = MESSAGE_TEXT.DEFAULT;
    customClass = [MESSAGE_CLASS.HIDE];
  }
  const fields = [];

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      fields.push({ row: i, col: j, color: random(numberOfColors) });
    }
  }
  setColors();
  gridSize = gridSize || getState().gridSize;
  message = { ...message, text, customClass };
  setState({ message, gridSize, fields });
};
export const downClick = event => {
  let { value } = inputGrid;
  if (value && +value === +value && +value > 1) {
    inputGrid.value = +value - 1;
  } else {
    inputGrid.value = 1;
  }
};
export const upClick = event => {
  let { value } = inputGrid;
  if (value && +value === +value && +value > 1) {
    inputGrid.value = +value + 1;
  } else {
    inputGrid.value = 1;
  }
};
