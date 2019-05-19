import { setState, getState } from "./state.js";
import { EVENTS } from "./_constants.js";
import "./components/input.js";
import { buildView } from "./events.js";
import { stateChangeEvent } from "./events.js";
window.addEventListener(EVENTS.STATE_CHANGE, buildView);
