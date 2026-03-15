import { signup, getEmail } from "./api.js";

export function sign_up() {
    const pass = document.getElementById("pass");
    const confirm_pass = document.getElementById("confirm_password")
    const error = document.getElementById("error");
    const form = document.getElementById("sign_up_form");
    const submit_btn = document.getElementById("submit_btn");
    const email = document.getElementById("email");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const password = document.getElementById("pass").value;

        const result = await signup(email, username, password);

        error.classList.remove("er");
        error.classList.add("ap");

        error.textContent = "Account created!";

        console.log(result);
    })

    email.addEventListener("blur", async () => {
        const user = await getEmail(email.value);

        if(user) {
            error.classList.remove("ap");
            error.classList.add("ap");

            error.textContent = "User email already exists";
        }

    })

    form.addEventListener("input", () => {
        const confirm_pass_val = confirm_pass.value;
        const pass_val = pass.value;

        const valid_pass = validatePassword(pass_val);

        if(valid_pass && confirm_pass_val !== pass_val) {
            error.textContent = "Passwords do not match";
            submit_btn.disabled = true;
            submit_btn.classList.remove("btn-style");
            submit_btn.classList.add("btn-inactive");

            error.classList.remove("ap");
            error.classList.add("er");
        } else if (!valid_pass) {
            submit_btn.disabled = true;
            submit_btn.classList.remove("btn-style");
            submit_btn.classList.add("btn-inactive");

            error.classList.remove("ap");
            error.classList.add("er");
        } else {
            submit_btn.disabled = false;
            submit_btn.classList.remove("btn-inactive");
            submit_btn.classList.add("btn-style");

            error.classList.remove("er");
            error.classList.add("ap");
        }
    })

    function validatePassword(password) {
        if(password == "") {
            error.textContent = "Please enter a password";
            return false
        } else if(password.length < 8) {
            error.textContent = "Password length is invalid";
            return false;
        } else if(!/[a-z]/.test(password)) {
            error.textContent = "Password contains no lowercase";
            return false;
        } else if(!/[A-Z]/.test(password)) {
            error.textContent = "Password needs 1 uppercase";
            return false;
        } else if(!/[0-9]/.test(password)) {
            error.textContent = "Password must contain a number";
            return false;
        } else if(!/[!@#$%^&*]/.test(password)) {
            error.textContent = "Password must contain a special symbol";
            return false;
        }
        error.textContent = "";
        return true;
    }
}
