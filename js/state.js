import { stateChangeEvent } from "./events.js";
let state = {
  gridSize: 0,
  numberOfColors: 3,
  colors: [],
  defaultColors: ["#fa8072", "#0080ff", "#50c878"],
  fields: [],
  input: "",
  message: {
    text: "",
    baseClass: ["ui", "message"],
    customClass: ["hide"]
  }
};
const getState = () => ({ ...state });
const setState = newState => {
  state = { ...state, ...newState };
  window.dispatchEvent(stateChangeEvent);
};

export { setState, getState };
