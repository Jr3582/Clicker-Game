//button that generates money
const money_button = document.getElementById("generate-money");

//all the text
const money_text = document.getElementById("money_text");
const net_worth_text = document.getElementById("net_worth_text");
const property_text = document.getElementById("property_text")

//left bg and canvas
const left_bg = document.getElementById("left_game");
const canvas = document.getElementById("canvas");

//money per min
const money_per_min_text = document.getElementById("money_per_min");

//counts
const lemonade_stands = document.getElementById("lemonade_count");
const food_stands = document.getElementById("food_count");
const small_stores = document.getElementById("small_store_count");
const restaurants = document.getElementById("restaurant_count");
const apartments = document.getElementById("apartment_complexes");
const real_estates = document.getElementById("real_estate_count");
const tech_starts = document.getElementById("tech_start_count");
const hedge_funds = document.getElementById("hedge_fund_count");
const space_mines = document.getElementById("space_mining_count");
const moon_colonies = document.getElementById("moon_colony_count");

//buy buttons
const buy_lemonade = document.getElementById("buy_lemonade");
const buy_food = document.getElementById("buy_food");
const buy_store = document.getElementById("buy_store");
const buy_restaurant = document.getElementById("buy_restaurant");
const buy_apartment = document.getElementById("buy_apartment");
const buy_real_estate = document.getElementById("buy_real_estate");
const buy_tech = document.getElementById("buy_tech");
const buy_hedge = document.getElementById("buy_tech");
const buy_space_mine = document.getElementById("buy_space_mine");
const buy_moon = document.getElementById("buy_moon");

//sell buttons
const sell_lemonade = document.getElementById("sell_lemonade");
const sell_food = document.getElementById("sell_food");
const sell_store = document.getElementById("sell_store");
const sell_restaurant = document.getElementById("sell_restaurant");
const sell_apartment = document.getElementById("sell_apartment");
const sell_real_estate = document.getElementById("sell_real_estate");
const sell_tech = document.getElementById("sell_tech");
const sell_hedge = document.getElementById("sell_tech");
const sell_space_mine = document.getElementById("sell_space_mine");
const sell_moon = document.getElementById("sell_moon");

const ctx = canvas.getContext("2d");

const coin_img = new Image();
coin_img.src = "../assets/gold_coin.png";

canvas.width = left_bg.clientWidth;
canvas.height = left_bg.clientHeight;

//cash & coins
let cash = 0;
const coins = [];

//property numbers
let lemonade = 0;
let food = 0;
let store = 0;
let restaurant = 0;
let apartment = 0;
let real_estate = 0;
let tech = 0;
let hedge = 0;
let mine = 0;
let moon = 0;

//net worth
let net_worth = 0;

//total property
let total_property = 0;

//money per minute
let money_per_min = 0;

//~~~~~~~~~~~~~~~~~~~~~~~~ money tickers ~~~~~~~~~~~~~~~~~~~~~~~~
const lemondate_ticker = setInterval(() => {
    if(lemonade > 0) {
        cash += 1 * lemonade;
        const spawn_target = lemonade;
        for(let i = 0; i < spawn_target; i++) {
            if(!check_coin_num()) break;
            auto_gen_coin();
        }
        money_text.textContent = cash;
    }
}, 5000);

const food_ticker = setInterval(() => {
    if(food > 0) {
        cash += 40 * food;
        const spawn_target = 40 * food;
        for(let i = 0; i < spawn_target; i++) {
            if(!check_coin_num()) break;
            auto_gen_coin();
        }
        money_text.textContent = cash;
    }
}, 10000);

const store_ticker = setInterval(() => {
    if(store > 0) {
        cash += 1000 * store;
        const spawn_target = 1000 * store;
        for(let i = 0; i < spawn_target; i++) {
            if(!check_coin_num()) break;
            auto_gen_coin();
        }
        money_text.textContent = cash;
    }
}, 30000);


const restaurant_ticker = setInterval(() => {
    if(restaurant > 0) {
        cash += 5000 * restaurant;
        const spawn_target = 5000 * restaurant;
        for(let i = 0; i < spawn_target; i++) {
            if(!check_coin_num()) break;
            auto_gen_coin();
        }
        money_text.textContent = cash;
    }
}, 60000);

const apartment_ticker = setInterval(() => {
    if(apartment > 0) {
        cash += 30000 * apartment;
        const spawn_target = 30000 * apartment;
        for(let i = 0; i < spawn_target; i++) {
            if(!check_coin_num()) break;
            auto_gen_coin();
        }
        money_text.textContent = cash;
    }
}, 180000);

const real_estate_ticker = setInterval(() => {
    if(real_estate > 0) {
        cash += 150000 * real_estate;
        const spawn_target = 150000 * real_estate;
        for(let i = 0; i < spawn_target; i++) {
            if(!check_coin_num()) break;
            auto_gen_coin();
        }
        money_text.textContent = cash;
    }
}, 300000);

const tech_ticker = setInterval(() => {
    if(tech > 0) {
        cash += 500000 * tech;
        const spawn_target = 500000 * tech;
        for(let i = 0; i < spawn_target; i++) {
            if(!check_coin_num()) break;
            auto_gen_coin();
        }
        money_text.textContent = cash;
    }
}, 600000);

const hedge_fund_ticker = setInterval(() => {
    if(hedge > 0) {
        cash += 2000000 * hedge;
        const spawn_target = 2000000* hedge;
        for(let i = 0; i < spawn_target; i++) {
            if(!check_coin_num()) break;
            auto_gen_coin();
        }
        money_text.textContent = cash;
    }
}, 1200000);

const space_mine_ticker = setInterval(() => {
    if(mine > 0) {
        cash +=  5000000 * mine;
        const spawn_target = 5000000* mine;
        for(let i = 0; i < spawn_target; i++) {
            if(!check_coin_num()) break;
            auto_gen_coin();
        }
        money_text.textContent = cash;
    }
}, 2400000);

const moon_ticker = setInterval(() => {
    if(moon > 0) {
        cash +=  15000000 * moon;
        const spawn_target = 15000000 * moon;
        for(let i = 0; i < spawn_target; i++) {
            if(!check_coin_num()) break;
            auto_gen_coin();
        }
        money_text.textContent = cash;
    }
}, 3600000);

//~~~~~~~~~~~~~~~~~~~~~~~~ buy listeners ~~~~~~~~~~~~~~~~~~~~~~~~
buy_lemonade.addEventListener("click", () => {
    if(cash >= 10) {
        lemonade++;
        total_property++;
        net_worth += 10;
        cash -= 10;
        money_per_min += lemonade * 12;
        lemonade_stands.textContent = lemonade;
        update_net_worth();
    }
})
buy_food.addEventListener("click", () => {
    if(cash >= 1000) {
        food++;
        total_property++;
        net_worth += 1000;
        cash -= 1000;
        money_per_min += food * 10 * 40;
        food_stands.textContent = food;
        update_net_worth();
    }
})
buy_store.addEventListener("click", () => {
    if(cash >= 100000) {
        store++;
        total_property++;
        net_worth += 100000
        cash -= 100000;
        money_per_min += store * 2 * 1000;
        small_stores.textContent = store;
        update_net_worth();
    }
})
buy_restaurant.addEventListener("click", () => {
    if(cash >= 1000000) {
        restaurant++;
        total_property++;
        net_worth += 1000000;
        cash -= 1000000;
        money_per_min += 5000 * restaurant;
        restaurants.textContent = restaurant;
        update_net_worth();
    }
})
buy_apartment.addEventListener("click", () => {
    if(cash >= 10000000) {
        apartment++;
        total_property++;
        net_worth += 10000000;
        cash -= 10000000;
        money_per_min += (30000 * apartment) / 3;
        apartments.textContent = apartment;
        update_net_worth();
    }
})
buy_real_estate.addEventListener("click", () => {
    if(cash >= 100000000) {
        real_estate++;
        total_property++;
        net_worth += 100000000;
        cash -= 100000000;
        money_per_min += (150000 * real_estate) / 5;
        real_estates.textContent = real_estate;
        update_net_worth();
    }
})
buy_tech.addEventListener("click", () => {
    if(cash >= 1000000000) {
        tech++;
        total_property++;
        net_worth += 1000000000;
        money_per_min += (500000 * tech) / 10
        cash -= 1000000000;
        tech_starts.textContent = tech;
        update_net_worth();
    }
})
buy_hedge.addEventListener("click", () => {
    if(cash >= 10000000000) {
        hedge++;
        total_property++;
        net_worth += 10000000000;
        cash -= 10000000000;
        money_per_min += (2000000 * hedge) / 20;
        hedge_funds.textContent = hedge;
        update_net_worth();
    }
})
buy_space_mine.addEventListener("click", () => {
    if(cash >= 100000000000) {
        mine++;
        total_property++;
        net_worth += 100000000000;
        cash -= 100000000000;
        money_per_min += (5000000 * mine) / 40;
        space_mines.textContent = mine;
        update_net_worth();
    }
})
buy_moon.addEventListener("click", () => {
    if(cash >= 500000000000) {
        moon++;
        total_property++;
        net_worth += 500000000000;
        cash -= 500000000000;
        money_per_min += (15000000 * moon) / 60;
        moon_colonies.textContent = moon;
        update_net_worth();

    }
})

//~~~~~~~~~~~~~~~~~~~~~~~~ sell buttons ~~~~~~~~~~~~~~~~~~~~~~~~
sell_lemonade.addEventListener("click", () => {
    if(lemonade >= 1) {
        lemonade--;
        total_property--;
        net_worth -= 5;
        cash += 5;
        money_per_min -= lemonade * 12;
        lemonade_stands.textContent = lemonade;
        update_net_worth();
    }
})
sell_food.addEventListener("click", () => {
    if(food >= 1) {
        food--;
        total_property--;
        net_worth -= 500
        cash += 500;
        money_per_min -= food * 40 * 6;
        food_stands.textContent = food;
        update_net_worth();
    }
})
sell_store.addEventListener("click", () => {
    if(store >= 1) {
        store--;
        total_property--;
        net_worth -= 50000;
        cash += 50000;
        money_per_min -= store * 1000 * 2;
        small_stores.textContent = store;
        update_net_worth();
    }
})
sell_restaurant.addEventListener("click", () => {
    if(restaurant >= 1) {
        restaurant--;
        total_property--;
        net_worth -= 500000;
        cash += 500000;
        money_per_min -= restaurant * 5000
        restaurants.textContent = restaurant;
        update_net_worth();
    }
})
sell_apartment.addEventListener("click", () => {
    if(apartment >= 1) {
        apartment--;
        total_property--;
        net_worth -= 5000000;
        cash += 5000000;
        money_per_min -= (30000 * apartment) / 3;
        apartments.textContent = apartment;
        update_net_worth();
    }
})
sell_real_estate.addEventListener("click", () => {
    if(real_estate >= 1) {
        real_estate--;
        total_property--;
        net_worth -= 50000000;
        cash += 50000000;
        money_per_min -= (150000 * real_estate) / 5;
        real_estates.textContent = real_estate;
        update_net_worth();
    }
})
sell_tech.addEventListener("click", () => {
    if(tech >= 1) {
        tech--;
        total_property--;
        net_worth -= 500000000;
        cash += 500000000;
        money_per_min -= (500000 * tech) / 10
        tech_starts.textContent = tech;
        update_net_worth();
    }
})
sell_hedge.addEventListener("click", () => {
    if(hedge >= 1) {
        hedge--;
        total_property--;
        net_worth -= 5000000000;
        cash += 5000000000;
        money_per_min -= (2000000 * hedge) / 20;
        hedge_funds.textContent = hedge;
        update_net_worth();
    }
})
sell_space_mine.addEventListener("click", () => {
    if(mine >= 1) {
        mine--;
        total_property--;
        net_worth -= 50000000000;
        cash += 50000000000;
        money_per_min -= (5000000 * mine) / 40;
        space_mines.textContent = mine;
        update_net_worth();
    }
})
sell_moon.addEventListener("click", () => {
    if(moon >= 1) {
        moon--;
        total_property--;
        net_worth -= 250000000000;
        cash += 250000000000;
        money_per_min -= (15000000 * moon) / 60;
        moon_colonies.textContent = moon;
        update_net_worth();
    }
})

//~~~~~~~~~~~~~~~~~~~~~~~~ generate money btn ~~~~~~~~~~~~~~~~~~~~~~~~
money_button.addEventListener("click", () => {
    cash += 1;
    money_text.textContent = cash;
    create_coin();
})

function create_coin() {
    const coin = {
        x: Math.random() * canvas.width,
        y: Math.random() * -100,
        width: 53,
        height: 48,
        speed: 2,
        angle: Math.random() * Math.PI * 2,
        rotate_speed:Math.random() * ((Math.PI / 180) - (Math.PI / 90)) + Math.PI / 90
    }
    coins.push(coin);
}

function auto_gen_coin() {
    const coin = {
        x: Math.random() * canvas.width,
        y: Math.random() * -1000,
        width: 53,
        height: 48,
        speed: 2,
        angle: Math.random() * Math.PI * 2,
        rotate_speed:Math.random() * ((Math.PI / 180) - (Math.PI / 90)) + Math.PI / 90
    }
    coins.push(coin);

}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    for(let i = 0; i < coins.length; i++) {
        coins[i].y += coins[i].speed;
        coins[i].angle += coins[i].rotate_speed;

        let centerX = coins[i].x + (coins[i].width / 2);
        let centerY = coins[i].y + (coins[i].height / 2);

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(coins[i].angle);
        ctx.drawImage(coin_img, -coins[i].width / 2, -coins[i].height / 2, coins[i].width, coins[i].height);
        ctx.restore();
        if(coins[i].y >= canvas.height) {
            coins.splice(i, 1);
            i--;
        }
    }


    requestAnimationFrame(animate);
}

function check_coin_num() {
    if(coins.length <= 500) {
        return true;
    }
    return false;
}

function update_net_worth() {
    money_per_min_text.textContent = money_per_min;
    money_text.textContent = cash;
    net_worth_text.textContent = net_worth;
    property_text.textContent = total_property;
}

animate();

