export function money_rain() {
    const canvas = document.getElementById("money_rain");
    const left_bg = document.getElementById("left");
    const ctx = canvas.getContext("2d");

    const coin_img = new Image();
    coin_img.src = "assets/gold_coin.png";

    requestAnimationFrame(() => {
        canvas.height = left_bg.clientHeight;
        canvas.width = left_bg.clientWidth;
    })


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
            speed: 2,
            angle: Math.random() * Math.PI * 2,
            rotate_speed: Math.random() * (Math.PI / 90)
        })
    }

    function animate () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();

        if(coins.length < max_coins) {
            spawn_timer++;
            if (spawn_timer >= spawn_interval) {
                spawn_coin();
                spawn_timer = 0;
            }
        }

        for(const coin of coins) {
            coin.y += coin.speed;
            coin.angle += coin.rotate_speed;

            let centerX = coin.x + (coin.width / 2);
            let centerY = coin.y + (coin.height / 2);

            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(coin.angle);
            ctx.drawImage(coin_img, -coin.width / 2, -coin.height / 2, coin.width, coin.height);
            ctx.restore();
            if(coin.y >= canvas.height) {
                coin.x = Math.random() * canvas.width;
                coin.y = -200 * Math.random();
            }

        }
        requestAnimationFrame(animate);
    }

    coin_img.onload = () => {
        animate();
    }
}
