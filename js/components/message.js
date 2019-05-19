import { getState } from "../state.js";
export default () => {
  const messageElement = document.querySelector("#message");

  let {
    message: { text, baseClass, customClass }
  } = getState();

  messageElement.classList = [...baseClass, ...customClass].join(" ");
  messageElement.textContent = text;
};
