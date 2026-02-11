const canvas = document.getElementById("money_rain");
const left_bg = document.getElementById("left");
const ctx = canvas.getContext("2d");

const coin_img = new Image();
coin_img.src = "../assets/gold_coin.png";

canvas.height = left_bg.clientHeight;
canvas.width = left_bg.clientWidth;

const coins = [];
let spawn_timer = 0;
const spawn_interval = 20;
const max_coins = 25;

function spawn_coin() {
    coins.push({
        x: Math.random() * canvas.width,
        y: -100,
        width: 53,
        height: 48,
        speed: 2
    })
}

function animate () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(coins.length < max_coins) {
        spawn_timer++;
        if (spawn_timer >= spawn_interval) {
            spawn_coin();
            spawn_timer = 0;
        }
    }

    for(const coin of coins) {
        coin.y += coin.speed;

        ctx.beginPath();
        ctx.drawImage(coin_img, coin.x, coin.y, coin.width, coin.height);

        if(coin.y >= canvas.height) {
            coin.x = Math.random() * canvas.width;
            coin.y = -100;
        }

    }
    requestAnimationFrame(animate);
}

coin_img.onload = () => {
    animate();
}