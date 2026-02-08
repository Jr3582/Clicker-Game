const reset_text = document.getElementById("reset_text");
const button = document.getElementById("submit_button");

button.addEventListener("click", () => {
    reset_text.textContent = "Reset link sent to email!"
})