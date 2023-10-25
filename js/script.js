import {toggleThemes} from "./themes.js";
import {clock} from "./clock.js";
import { contactFormValidations } from "./contact-form-validation.js"; 
import { obtenerDatosDelJSON } from "./obtener-datos.js";

clock("#clock", "#btn-start", "#btn-stop");
toggleThemes(".theme-btn", "dark-mode");
contactFormValidations(".contact-form")
obtenerDatosDelJSON();

