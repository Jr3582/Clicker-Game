export function make_snow_flakes() {

    const canvas = document.getElementById("snowflakes");
    const sn_wrapper = document.getElementById("sn_wrapper");
    const ctx = canvas.getContext("2d");

    canvas.width = sn_wrapper.clientWidth;
    canvas.height = sn_wrapper.clientHeight;


    const snowFlakes = []; // snowflake array

    for(let i = 0; i < 750; i++ ) {
        let dir = 1; // creating randomized direction
        if(Math.random() < 0.5) {
            dir = -1;
        }
        const x = Math.random() * (canvas.width - 1) + 1;
        const center = x;
        const y = Math.random() * (0 - 500);
        const radius = Math.random() * (4 - 1) + 1;
        const speed = Math.random() * (0.5 - 0.1) + 0.2;
        const sway = Math.random() * (50 - 1) + 1;
        const swayspeed = Math.random() * (0.5 - 0.1) + 0.1;

        const flake = {
            x: x,
            center: center,
            y: y,
            radius: radius,
            speed: speed,
            sway: sway,
            swayspeed: swayspeed,
            direction: dir,
        };
        snowFlakes.push(flake); // pushing snowflake object into array
    }

    function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for(const flake of snowFlakes) {
        flake.y += flake.speed;
        if(flake.center - flake.sway >= flake.x) {
            flake.direction = 1;
        } else if (flake.center + flake.sway <= flake.x) {
            flake.direction = -1;
        }
        flake.x += flake.swayspeed * flake.direction; // swaying animation


        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2); // creation of the snowflake using the object variables
        ctx.fillStyle = "white";
        ctx.fill();
        // VVV if snow flake reached the bottom of the screen
        // VVV send it back to the top and create new x, center, and radius
        // VVV creates more randomization
        if(flake.y >= canvas.height) {
            flake.x = Math.random() * (canvas.width - 1) + 1;
            flake.radius = radius = Math.random() * (3 - 1) + 1;
            flake.center = flake.x;
            flake.y = 0;
        }
    }

    requestAnimationFrame(animate);
    }

    animate();
}
// problems i had:
// 1:
// i was make the snowflake oscillate around the x
// but the x was always changing
// fix: make a center variable set to the starting x (center never changes)
// 2:
// understanding how animate works

// making snowflakes notes:
// snowflakes are made from a canvas on the html side
// assign a ID to the canvas to edit it's DOM
// snow flake shape is made with ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);

