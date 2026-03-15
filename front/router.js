import { init_landing, init_sign_up, init_forgot_pass, init_about_me } from "/js/init.js";

const app = document.getElementById("app");

function router() {
    const path = window.location.pathname;

    console.log(path);

    if(path === "/") {
        load_page("landing.html", init_landing);
    } 
    
    else if(path === "/sign_up") {
        load_page("sign_up.html", init_sign_up);
    }

    else if(path === "/forgot_pass") {
        load_page("forgot_pass.html", init_forgot_pass);
    }

    else if(path === "/about_me") {
        load_page("about_me.html", init_about_me);
    }

}

function load_page(path, init) {
    fetch(`/pages/${path}`)
        .then(response => response.text())
        .then(html => {
            app.innerHTML = html;

            if(init) {
                init();
            }
        })

}

document.addEventListener("click", (e) => {
    const link = e.target.closest("a");

    if (!link) return;

    e.preventDefault();

    history.pushState({}, "", link.getAttribute("href"));

    router();

});

window.addEventListener("popstate", router);

router();