import { setState, getState } from "../state.js";
import { MESSAGE_CLASS, MESSAGE_TEXT } from "../_constants.js";
import { startClick, colorClick } from "../events.js";

const buttonStart = document.querySelector("#start");
const buttonColor = document.querySelector("#color");
// const input = document.querySelector("#rows");

buttonStart.addEventListener("click", startClick);
buttonColor.addEventListener("click", colorClick);
