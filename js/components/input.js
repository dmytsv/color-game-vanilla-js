import { setState, getState } from "../state.js";
import { MESSAGE_CLASS, MESSAGE_TEXT } from "../_constants.js";
import {
  startClick,
  colorClick,
  upClick,
  downClick,
  deleteColorClick
} from "../events.js";

const buttonStart = document.querySelector("#start");
const buttonColor = document.querySelector("#color");
const buttonDeleteColor = document.querySelector("#delete");
const buttonUp = document.querySelector("#up");
const buttonDown = document.querySelector("#down");

buttonStart.addEventListener("click", startClick);
buttonColor.addEventListener("click", colorClick);
buttonDeleteColor.addEventListener("click", deleteColorClick);
buttonUp.addEventListener("click", upClick);
buttonDown.addEventListener("click", downClick);
