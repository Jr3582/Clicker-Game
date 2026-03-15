const navbar = document.getElementById("navbar");


function load_navbar() {
    fetch("/components/navbar.html")
        .then(response => response.text())
        .then(html => {
            navbar.innerHTML = html;
        })
}

export function init_navbar() {
    load_navbar();
}