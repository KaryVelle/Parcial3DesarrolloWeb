import {toggleThemes} from "./themes.js";
import {clock} from "./clock.js";

clock("#clock", "#btn-start", "#btn-stop");
toggleThemes(".theme-btn", "dark-mode");