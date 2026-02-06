const pass = document.getElementById("pass");
const confirm_pass = document.getElementById("confirm_password")
const error = document.getElementById("error");

pass.addEventListener("input", () => {
    const pass_val = pass.value;

    error.textContent = validatePassword(pass_val);
})

confirm_pass.addEventListener("input", () => {
    const confirm_pass_val = confirm_pass.value;
    const pass_val = pass.value;

    confirm_pass_val != pass_val ? error.textContent = "Passwords do not match" : "";
})

function validatePassword(password) {
    if(password == "") return "";
    if(password.length < 8) return "Password length is invalid";
    if(!/[a-z]/.test(password)) return "Password contains no lowercase";
    if(!/[A-Z]/.test(password)) return "Password needs 1 uppercase";
    if(!/[0-9]/.test(password)) return "Password must contain a number";
    if(!/[!@#$%^&*]/.test(password))  return "Password must contain a special symbol"
    return "";
}
