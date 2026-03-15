import { money_rain } from "./money_rain.js";
import { init_navbar} from "./navbar.js";
import { sign_up } from "./sign_up.js";
import { make_snow_flakes } from "./snow_flake.js";
import { forgot_pass } from "./forgot_pass.js";

export function init_landing() {
    money_rain();
    init_navbar();
}

export function init_sign_up () {
    init_navbar();
    make_snow_flakes();
    sign_up();
}

export function init_forgot_pass() {
    init_navbar();
    make_snow_flakes();
    forgot_pass();
}

export function init_about_me() {
    init_navbar();
    make_snow_flakes();
}