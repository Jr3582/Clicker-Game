//button that generates money
const money_button = document.getElementById("generate-money");

//all the text
const money_text = document.getElementById("money_text");
const net_worth_text = document.getElementById("net_worth_text");
const property_text = document.getElementById("property_text")
const money_per_sec_text = document.getElementById("money_per_sec");

//left bg and canvas
const left_bg = document.getElementById("left_game");
const canvas = document.getElementById("canvas");

//counts
const lemonade_stands = document.getElementById("lemonade_count");
const food_trucks = document.getElementById("food_count");
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
const buy_hedge = document.getElementById("buy_hedge");
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

//mps text DOM nodes
const lemonade_mps_text = document.getElementById("lemonade_mps");
const food_mps_text = document.getElementById("food_mps");
const store_mps_text = document.getElementById("store_mps");
const restaurant_mps_text = document.getElementById("restaurant_mps");
const apartment_mps_text = document.getElementById("apartment_mps");
const real_estate_mps_text = document.getElementById("real_estate_mps");
const tech_mps_text = document.getElementById("tech_mps");
const hedge_mps_text = document.getElementById("hedge_mps");
const mine_mps_text = document.getElementById("mine_mps");
const moon_mps_text = document.getElementById("moon_mps");

//pop up stuff
const overlay = document.getElementById("overlay");
const event_text = document.getElementById("event_text");
const exit_popup = document.getElementById("exit_popup");
const accept_btn = document.getElementById("accept");
const acknowledge_btn = document.getElementById("acknowledge");
const reject_btn = document.getElementById("reject");

//events for 50 achieved property
let fifty_lemonades = false;
let fifty_foods = false;
let fifty_stores = false;
let fifty_restaurants = false;
let fifty_apartments = false;
let fifty_real_estates = false;
let fifty_techs = false;
let fifty_hedge_funds = false;
let fifty_minings = false;
let fifty_moons = false;

const ctx = canvas.getContext("2d");

const coin_img = new Image();
coin_img.src = "../assets/gold_coin.png";

canvas.width = left_bg.clientWidth;
canvas.height = left_bg.clientHeight;

//cash & coins
let cash = 9999999999999999;
const coins = [];

//random early game pop ups with no ability to choose
const early_events_no_input = [
    "You found $100 on the ground while taking a stroll!",
    "Your dog accidentally ate some of your money!! (-1% cash)",
    "Your lemonade stand got featured on TikTok! (+10 cash generation for all lemonade stands!)",
    "Someone stole your credit card info and went on a shopping spree! (-25% cash)",
    "You won a scratch off ticket! (+1000 cash)",
    "Your great aunt Birgit passed away and you inherit her wealth! (+621,552 cash)",
    "You found a coupon on car washes (car washes are now 20% off)",
    "You accidentally spilled lemonade on a customer. Lawsuit pending... (-5% cash)",
    "You switched to organic lemons. Customers are impressed! (+5% income on lemonade stands)",
    "A squirrel stole your tip jar! (-15 cash)",
    "You found some lose change in your couch cushins! (+10 cash)",
];
// early game pop ups

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

//base buy values
const lemonade_base_buy = 10;
const food_base_buy= 1000;
const store_base_buy = 10000;
const restaurant_base_buy = 1000000;
const apartment_base_buy = 10000000;
const real_estate_base_buy = 100000000;
const tech_base_buy = 1000000000;
const hedge_base_buy = 10000000000;
const mine_base_buy = 100000000000;
const moon_base_buy = 250000000000;

//base sell values
const lemonade_base_sell = lemonade_base_buy / 2;
const food_base_sell= food_base_buy / 2;
const store_base_sell = store_base_buy / 2;
const restaurant_base_sell = real_estate_base_buy / 2;
const apartment_base_sell = apartment_base_buy / 2;
const real_estate_base_sell = real_estate_base_buy / 2;
const tech_base_sell = tech_base_buy / 2;
const hedge_base_sell = hedge_base_buy / 2;
const mine_base_sell = mine_base_buy / 2;
const moon_base_sell = moon_base_buy / 2;

//variables for updating buy price after each buy
let buy_lemonade_price = lemonade_base_buy;
let buy_food_price = food_base_buy;
let buy_store_price = store_base_buy;
let buy_restaurant_price = real_estate_base_buy;
let buy_apartment_price = apartment_base_buy;
let buy_real_estate_price = real_estate_base_buy;
let buy_tech_price = tech_base_buy;
let buy_hedge_price = hedge_base_buy;
let buy_mine_price = mine_base_buy;
let buy_moon_price = moon_base_buy;

//variables for updating sell price after buying each property
let sell_lemonade_price = lemonade_base_sell;
let sell_food_price = food_base_sell;
let sell_store_price = store_base_sell;
let sell_restaurant_price = restaurant_base_sell;
let sell_apartment_price = apartment_base_sell;
let sell_real_estate_price = real_estate_base_sell;
let sell_tech_price = tech_base_sell;
let sell_hedge_price = hedge_base_sell;
let sell_mine_price = mine_base_sell;
let sell_moon_price = moon_base_sell;

//money per sec base (MPS = money per second)
let lemon_MPS = 1;
let food_MPS = 80;
let store_MPS = 800;
let restaurant_MPS = 4800;
let apartment_MPS = 28800;
let real_estate_MPS = 115200;
let tech_MPS = 230400;
let hedge_MPS = 460800;
let mine_MPS = 921600;
let moon_MPS = 1843200;

//adding images
const lemonade_img = document.getElementById("lemonade_img");
const food_img = document.getElementById("food_img");
const store_img = document.getElementById("store_img");
const restaurant_img = document.getElementById("restaurant_img");
const apartment_img = document.getElementById("apartment_img");
const real_estate_img = document.getElementById("real_estate_img");
const tech_start_img = document.getElementById("tech_img");
const hedge_fund_img = document.getElementById("hedge_fund_img");

//net worth
let net_worth = 0;

//total property
let total_property = 0;

//money per minute
let money_per_sec = 0;

//~~~~~~~~~~~~~~~~~~~~~~~~ pop-up overlay ~~~~~~~~~~~~~~~~~~~~~~~~
// const pop_up_test = setInterval(() => {
//     overlay.classList.remove("hidden");
//     overlay.classList.add("show");
// }, 5000);

//~~~~~~~~~~~~~~~~~~~~~~~~ money tickers ~~~~~~~~~~~~~~~~~~~~~~~~
const lemondate_ticker = setInterval(() => {
    if(lemonade > 0) {
        cash += lemon_MPS * lemonade;
        const spawn_target = lemonade;
        for(let i = 0; i < spawn_target; i++) {
            if(!check_coin_num()) break;
            auto_gen_coin();
        }
        money_text.textContent = abbreviate(cash);
    }
}, 1000);

const food_ticker = setInterval(() => {
    if(food > 0) {
        cash += food_MPS * food;
        const spawn_target = food_MPS * food;
        for(let i = 0; i < spawn_target; i++) {
            if(!check_coin_num()) break;
            auto_gen_coin();
        }
        money_text.textContent = abbreviate(cash);
    }
}, 1000);

const store_ticker = setInterval(() => {
    if(store > 0) {
        cash += store_MPS * store;
        const spawn_target = store_MPS * store;
        for(let i = 0; i < spawn_target; i++) {
            if(!check_coin_num()) break;
            auto_gen_coin();
        }
        money_text.textContent = abbreviate(cash);
    }
}, 1000);


const restaurant_ticker = setInterval(() => {
    if(restaurant > 0) {
        cash += restaurant_MPS * restaurant;
        const spawn_target = restaurant_MPS * restaurant;
        for(let i = 0; i < spawn_target; i++) {
            if(!check_coin_num()) break;
            auto_gen_coin();
        }
        money_text.textContent = abbreviate(cash);
    }
}, 1000);

const apartment_ticker = setInterval(() => {
    if(apartment > 0) {
        cash += apartment_MPS * apartment;
        const spawn_target = apartment_MPS * apartment;
        for(let i = 0; i < spawn_target; i++) {
            if(!check_coin_num()) break;
            auto_gen_coin();
        }
        money_text.textContent = abbreviate(cash);
    }
}, 1000);

const real_estate_ticker = setInterval(() => {
    if(real_estate > 0) {
        cash += real_estate_MPS * real_estate;
        const spawn_target = real_estate_MPS * real_estate;
        for(let i = 0; i < spawn_target; i++) {
            if(!check_coin_num()) break;
            auto_gen_coin();
        }
        money_text.textContent = abbreviate(cash);
    }
}, 1000);

const tech_ticker = setInterval(() => {
    if(tech > 0) {
        cash += tech_MPS * tech;
        const spawn_target = tech_MPS * tech;
        for(let i = 0; i < spawn_target; i++) {
            if(!check_coin_num()) break;
            auto_gen_coin();
        }
        money_text.textContent = abbreviate(cash);
    }
}, 1000);

const hedge_fund_ticker = setInterval(() => {
    if(hedge > 0) {
        cash += hedge_MPS * hedge;
        const spawn_target = hedge_MPS * hedge;
        for(let i = 0; i < spawn_target; i++) {
            if(!check_coin_num()) break;
            auto_gen_coin();
        }
        money_text.textContent = abbreviate(cash);
    }
}, 1000);

const space_mine_ticker = setInterval(() => {
    if(mine > 0) {
        cash +=  mine_MPS * mine;
        const spawn_target = mine_MPS * mine;
        for(let i = 0; i < spawn_target; i++) {
            if(!check_coin_num()) break;
            auto_gen_coin();
        }
        money_text.textContent = abbreviate(cash);
    }
}, 1000);

const moon_ticker = setInterval(() => {
    if(moon > 0) {
        cash +=  moon_MPS * moon;
        const spawn_target = moon_MPS * moon;
        for(let i = 0; i < spawn_target; i++) {
            if(!check_coin_num()) break;
            auto_gen_coin();
        }
        money_text.textContent = abbreviate(cash);
    }
}, 1000);

//~~~~~~~~~~~~~~~~~~~~~~~~ buy listeners ~~~~~~~~~~~~~~~~~~~~~~~~
buy_lemonade.addEventListener("click", () => {
    if(cash >= buy_lemonade_price) {
        lemonade++;

        if(lemonade === 50 && !fifty_lemonades) {
            fifty_lemonades = true;
            lemon_MPS *= 2;
            money_per_sec *= 2;
            double_money_function("lemonade stands");
        }

        const result = buy_property({
            property: lemonade,
            buy_property_price: buy_lemonade_price,
            net_worth,
            cash,
            buy_base: lemonade_base_buy,
            sell_base: lemonade_base_sell,
        })
        
        net_worth = result.net_worth;
        cash = result.cash;
        buy_lemonade_price = result.buy_price;
        sell_lemonade_price = result.sell_price;
        money_per_sec += lemon_MPS;

        total_property++;

        lemonade_stands.textContent = lemonade;
        buy_lemonade.textContent = "Buy for $" + abbreviate(buy_lemonade_price);
        sell_lemonade.textContent = "Sell for $" + abbreviate(sell_lemonade_price);
        lemonade_mps_text.textContent = lemon_MPS;
        update_img(lemonade, lemonade_img, "lemonade-img");
        update_net_worth();
    }
})
buy_food.addEventListener("click", () => {
    if(cash >= buy_food_price) {
        food++;

        if(food === 50 && !fifty_foods) {
            fifty_foods = true;
            food_MPS *= 2;
            money_per_sec *= 2;
            double_money_function("food trucks");
        }

        const result = buy_property({
            property: food,
            buy_property_price: buy_food_price,
            net_worth,
            cash,
            buy_base: food_base_buy,
            sell_base: food_base_sell
        })
        
        net_worth = result.net_worth;
        cash = result.cash;
        buy_food_price = result.buy_price;
        sell_food_price = result.sell_price;
        money_per_sec += food_MPS;

        total_property++;

        food_trucks.textContent = food;
        buy_food.textContent = "Buy for $" + abbreviate(buy_food_price);
        sell_food.textContent = "Sell for $" + abbreviate(sell_food_price);
        food_mps_text.textContent = food_MPS;
        update_img(food, food_img, "food-img");
        update_net_worth();
    }
})
buy_store.addEventListener("click", () => {
    if(cash >= buy_store_price) {
        store++;

        if(store === 50 && !fifty_stores) {
            fifty_stores = true;
            store_MPS *= 2;
            money_per_sec *= 2;
            double_money_function("grocery stores");
        }

        const result = buy_property({
            property: store,
            buy_property_price: buy_store_price,
            net_worth,
            cash,
            buy_base: store_base_buy,
            sell_base: store_base_sell
        })
        net_worth = result.net_worth;
        cash = result.cash;
        buy_store_price = result.buy_price;
        sell_store_price = result.sell_price;
        money_per_sec += store_MPS;

        total_property++;

        small_stores.textContent = store;
        buy_store.textContent = "Buy for $" + abbreviate(buy_store_price);
        sell_store.textContent = "Sell for $" + abbreviate(sell_store_price);
        store_mps_text = store_MPS;
        update_img(store, store_img, "store-img");
        update_net_worth();
    }
})
buy_restaurant.addEventListener("click", () => {
    if(cash >= buy_restaurant_price) {
        restaurant++;

        if(restaurant === 50 && !fifty_restaurants) {
            fifty_restaurants = true;
            restaurant_MPS *= 2;
            money_per_sec *= 2;
            double_money_function("restaurants");
        }

        const result = buy_property({
            property: restaurant,
            buy_property_price: buy_restaurant_price,
            net_worth,
            cash,
            buy_base: restaurant_base_buy,
            sell_base: restaurant_base_sell
        })
        net_worth = result.net_worth;
        cash = result.cash;
        buy_restaurant_price = result.buy_price;
        sell_restaurant_price = result.sell_price;
        money_per_sec += restaurant_MPS;

        total_property++;

        restaurants.textContent = restaurant;
        buy_restaurant.textContent = "Buy for $" + abbreviate(buy_restaurant_price);
        sell_restaurant.textContent = "Sell for $" + abbreviate(sell_restaurant_price);
        restaurant_mps_text.textContent = real_estate_MPS;
        update_img(restaurant, restaurant_img, "restaurant-img");
        update_net_worth();
    }
})
buy_apartment.addEventListener("click", () => {
    if(cash >= buy_apartment_price) {
        apartment++;

        if(apartment === 50 && !fifty_apartments) {
            fifty_apartments = true;
            apartment_MPS *= 2;
            money_per_sec *= 2;
            double_money_function("apartment complexes");
        }

        const result = buy_property({
            property: apartment,
            buy_property_price: buy_apartment_price,
            net_worth,
            cash,
            buy_base: apartment_base_buy,
            sell_base: apartment_base_sell
        })
        net_worth = result.net_worth;
        cash = result.cash;
        buy_apartment_price = result.buy_price;
        sell_apartment_price = result.sell_price;
        money_per_sec += apartment_MPS;

        total_property++;

        apartments.textContent = apartment;
        buy_apartment.textContent = "Buy for $" + abbreviate(buy_apartment_price);
        sell_apartment.textContent = "Sell for $" + abbreviate(sell_apartment_price);
        apartment_mps_text.textContent = apartment_MPS;
        update_img(apartment, apartment_img, "apartment-img");
        update_net_worth();
    }
})
buy_real_estate.addEventListener("click", () => {
    if(cash >= buy_real_estate_price) {
        real_estate++;

        if(real_estate === 50 && !fifty_real_estates) {
            fifty_real_estates = true;
            real_estate_MPS *= 2;
            money_per_sec *= 2;
            double_money_function("real estate properties");
        }

        const result = buy_property({
            property: real_estate,
            buy_property_price: buy_real_estate_price,
            net_worth,
            cash,
            buy_base: real_estate_base_buy,
            sell_base: real_estate_base_sell
        })
        net_worth = result.net_worth;
        cash = result.cash;
        buy_real_estate_price = result.buy_price;
        sell_real_estate_price = result.sell_price;
        money_per_sec += real_estate_MPS;

        total_property++;

        real_estates.textContent = real_estate;
        buy_real_estate.textContent = "Buy for $" + abbreviate(buy_real_estate_price);
        sell_real_estate.textContent = "Sell for $" + abbreviate(sell_real_estate_price);
        real_estate_mps_text.textContent = real_estate_MPS;
        update_img(real_estate, real_estate_img, "real-estate-img");
        update_net_worth();
    }
})
buy_tech.addEventListener("click", () => {
    if(cash >= buy_tech_price) {
        tech++;

        if(tech === 25 && !fifty_techs) {
            fifty_techs = true;
            tech_MPS *= 2;
            money_per_sec *= 2;
            double_money_function("tech startups");
        }

        const result = buy_property({
            property: tech,
            buy_property_price: buy_tech_price,
            net_worth,
            cash,
            buy_base: tech_base_buy,
            sell_base: tech_base_sell

        })
        net_worth = result.net_worth;
        cash = result.cash;
        buy_tech_price = result.buy_price;
        sell_tech_price = result.sell_price;
        money_per_sec += tech_MPS;

        total_property++;

        tech_starts.textContent = tech;
        buy_tech.textContent = "Buy for $" + abbreviate(buy_tech_price);
        sell_tech.textContent = "Sell for $" + abbreviate(sell_tech_price);
        tech_mps_text.textContent = tech_MPS;
        update_img(tech, tech_start_img, "tech-img");
        update_net_worth();
    }
})
buy_hedge.addEventListener("click", () => {
    if(cash >= buy_hedge_price) {
        hedge++;

        if(hedge === 25 && !fifty_hedge_funds) {
            fifty_hedge_funds = true;
            hedge_MPS *= 2;
            money_per_sec *= 2;
            double_money_function("hedge funds");
        }

        const result = buy_property({
            property: hedge,
            buy_property_price: buy_hedge_price,
            net_worth,
            cash,
            buy_base: hedge_base_buy,
            sell_base: hedge_base_sell
        })
        net_worth = result.net_worth;
        cash = result.cash;
        buy_hedge_price = result.buy_price;
        sell_hedge_price = result.sell_price;
        money_per_sec += hedge_MPS;

        total_property++;

        hedge_funds.textContent = hedge;
        buy_hedge.textContent = "Buy for $" + abbreviate(buy_hedge_price);
        sell_hedge.textContent = "Sell for $" + abbreviate(sell_hedge_price);
        hedge_mps_text.textContent = hedge_MPS;
        update_img(hedge, hedge_fund_img, "hedge-fund-img");        
        update_net_worth();
    }
})
buy_space_mine.addEventListener("click", () => {
    if(cash >= buy_mine_price) {
        mine++;

        if(mine === 25 && !fifty_minings) {
            fifty_minings = true;
            mine_MPS *= 2;
            money_per_sec *= 2;
            double_money_function("space mines");
        }

        const result = buy_property({
            property: mine,
            buy_property_price: buy_mine_price,
            net_worth,
            cash,
            buy_base: mine_base_buy,
            sell_base: mine_base_sell

        })
        net_worth = result.net_worth;
        cash = result.cash;
        buy_mine_price = result.buy_price;
        sell_mine_price = result.sell_price;
        money_per_sec += mine_MPS;

        total_property++;

        space_mines.textContent = mine;
        buy_space_mine.textContent = "Buy for $" + abbreviate(buy_mine_price);
        sell_space_mine.textContent = "Sell for $" + abbreviate(sell_mine_price);
        mine_mps_text.textContent = mine_MPS;
        update_bg();
        update_net_worth();
    }
})
buy_moon.addEventListener("click", () => {
    if(cash >= buy_moon_price){
        moon++;

        if(moon === 25 && !fifty_moons) {
            fifty_moons = true;
            moon_MPS *= 2;
            money_per_sec *= 2;
            double_money_function("moon colonies");
        }

        const result = buy_property({
            property: moon,
            buy_property_price: buy_moon_price,
            net_worth,
            cash,
            buy_base: moon_base_buy,
            sell_base: moon_base_sell
        })
        net_worth = result.net_worth;
        cash = result.cash;
        buy_moon_price = result.buy_price;
        sell_moon_price = result.sell_price;
        money_per_sec += moon_MPS;

        total_property++;

        moon_colonies.textContent = moon;
        buy_moon.textContent = "Buy for $" + abbreviate(buy_moon_price);
        sell_moon.textContent = "Sell for $" + abbreviate(sell_moon_price);
        moon_mps_text.textContent = moon_MPS;
        update_bg();
        update_net_worth();
    }
})

//~~~~~~~~~~~~~~~~~~~~~~~~ sell buttons ~~~~~~~~~~~~~~~~~~~~~~~~
sell_lemonade.addEventListener("click", () => {
    if(lemonade >= 1) {
        lemonade--;

        const result = sell_property({
            property: lemonade,
            buy_property_price: buy_lemonade_price,
            sell_property_price: sell_lemonade_price,
            net_worth,
            cash,
            buy_base: lemonade_base_buy,
            sell_base: lemonade_base_sell
        })
        net_worth = result.net_worth;
        cash = result.cash;
        buy_lemonade_price = result.buy_price;
        sell_lemonade_price = result.sell_price;
        money_per_sec -= lemon_MPS;

        total_property--;

        lemonade_stands.textContent = lemonade;
        buy_lemonade.textContent = "Buy for $" + abbreviate(buy_lemonade_price);
        sell_lemonade.textContent = "Sell for $" + abbreviate(sell_lemonade_price);
        update_img(lemonade, lemonade_img, "lemonade-img");
        update_net_worth();
    }
})
sell_food.addEventListener("click", () => {
    if(food >= 1) {
        food--;

        const result = sell_property({
            property: food,
            buy_property_price: buy_food_price,
            sell_property_price: sell_food_price,
            net_worth,
            cash,
            buy_base: food_base_buy,
            sell_base: food_base_sell
        })
        net_worth = result.net_worth;
        cash = result.cash;
        buy_food_price = result.buy_price;
        sell_food_price = result.sell_price;
        money_per_sec -= food_MPS;

        total_property--;

        food_trucks.textContent = food;
        buy_food.textContent = "Buy for $" + abbreviate(buy_food_price);
        sell_food.textContent = "Sell for $" + abbreviate(sell_food_price);
        update_img(food, food_img, "food-img");
        update_net_worth();
    }
})
sell_store.addEventListener("click", () => {
    if(store >= 1) {
        store--;

        const result = buy_property({
            property: store,
            buy_property_price: buy_store_price,
            sell_property_price: sell_store_price,
            net_worth,
            cash,
            buy_base: store_base_buy,
            sell_base: store_base_sell
        })
        net_worth = result.net_worth;
        cash = result.cash;
        buy_store_price = result.buy_price;
        sell_store_price = result.sell_price;
        money_per_sec -= store_MPS;

        total_property--;

        small_stores.textContent = store;
        buy_store.textContent = "Buy for $" + abbreviate(buy_store_price);
        sell_store.textContent = "Sell for $" + abbreviate(sell_store_price);
        update_img(store, store_img, "store-img");
        update_net_worth();
    }
})
sell_restaurant.addEventListener("click", () => {
    if(restaurant >= 1) {
        restaurant--;

        const result = buy_property({
            property: restaurant,
            buy_property_price: buy_restaurant_price,
            sell_property_price: sell_restaurant_price,
            net_worth,
            cash,
            buy_base: restaurant_base_buy,
            sell_base: restaurant_base_sell
        })
        net_worth = result.net_worth;
        cash = result.cash;
        buy_restaurant_price = result.buy_price;
        sell_restaurant_price = result.sell_price;
        money_per_sec -= restaurant_MPS;

        total_property--;

        restaurants.textContent = restaurant;
        buy_restaurant.textContent = "Buy for $" + abbreviate(buy_restaurant_price);
        sell_restaurant.textContent = "Sell for $" + abbreviate(sell_restaurant_price);
        update_img(restaurant, restaurant_img, "restaurant-img");
        update_net_worth();
    }
})
sell_apartment.addEventListener("click", () => {
    if(apartment >= 1) {
        apartment--;

        const result = buy_property({
            property: restaurant,
            buy_property_price: buy_apartment_price,
            sell_property_price: sell_apartment_price,
            net_worth,
            cash,
            buy_base: apartment_base_buy,
            sell_base: apartment_base_sell
        })
        net_worth = result.net_worth;
        cash = result.cash;
        buy_apartment_price = result.buy_price;
        sell_apartment_price = result.sell_price;
        money_per_sec -= apartment_MPS;

        total_property--;

        apartments.textContent = apartment;
        buy_apartment.textContent = "Buy for $" + abbreviate(buy_apartment_price);
        sell_apartment.textContent = "Sell for $" + abbreviate(sell_apartment_price);
        update_img(apartment, apartment_img, "apartment-img");
        update_net_worth();
    }
})
sell_real_estate.addEventListener("click", () => {
    if(real_estate >= 1) {
        real_estate--;

        const result = buy_property({
            property: real_estate,
            buy_property_price: buy_real_estate_price,
            sell_property_price: sell_real_estate_price,
            net_worth,
            cash,
            buy_base: real_estate_base_buy,
            sell_base: real_estate_base_sell
        })
        net_worth = result.net_worth;
        cash = result.cash;
        buy_real_estate_price = result.buy_price;
        sell_real_estate_price = result.sell_price;
        money_per_sec -= real_estate_MPS;

        total_property--;

        real_estates.textContent = real_estate;
        buy_real_estate.textContent = "Buy for $" + abbreviate(buy_real_estate_price);
        sell_real_estate.textContent = "Sell for $" + abbreviate(sell_real_estate_price);
        update_img(real_estate, real_estate_img, "real-estate-img");
        update_net_worth();
    }
})
sell_tech.addEventListener("click", () => {
    if(tech >= 1) {
        tech--;

        const result = buy_property({
            property: tech,
            buy_property_price: buy_tech_price,
            sell_property_price: sell_tech_price,
            net_worth,
            cash,
            buy_base: tech_base_buy,
            sell_base: tech_base_sell
        })
        net_worth = result.net_worth;
        cash = result.cash;
        buy_tech_price = result.buy_price;
        sell_tech_price = result.sell_price;
        money_per_sec -= tech_MPS;

        total_property--;

        tech_starts.textContent = tech;
        buy_tech.textContent = "Buy for $" + abbreviate(buy_tech_price);
        sell_tech.textContent = "Sell for $" + abbreviate(sell_tech_price);
        update_img(tech, tech_start_img, "tech-img");
        update_net_worth();
    }
})
sell_hedge.addEventListener("click", () => {
    if(hedge >= 1) {
        hedge--;

        const result = buy_property({
            property: hedge,
            buy_property_price: buy_hedge_price,
            sell_property_price: sell_hedge_price,
            net_worth,
            cash,
            buy_base: hedge_base_buy,
            sell_base: hedge_base_sell
        })
        net_worth = result.net_worth;
        cash = result.cash;
        buy_hedge_price = result.buy_price;
        sell_hedge_price = result.sell_price;
        money_per_sec -= hedge_MPS;

        total_property--;

        hedge_funds.textContent = hedge;
        buy_hedge.textContent = "Buy for $" + abbreviate(buy_hedge_price);
        sell_hedge.textContent = "Sell for $" + abbreviate(sell_hedge_price);
        update_img(hedge, hedge_fund_img, "hedge-fund-img");
        update_net_worth();
    }
})
sell_space_mine.addEventListener("click", () => {
    if(mine >= 1) {
        mine--;
        update_bg();

        const result = buy_property({
            property: mine,
            buy_property_price: buy_mine_price,
            sell_property_price: sell_mine_price,
            net_worth,
            cash,
            buy_base: mine_base_buy,
            sell_base: mine_base_sell
        })
        net_worth = result.net_worth;
        cash = result.cash;
        buy_mine_price = result.buy_price;
        sell_mine_price = result.sell_price;
        money_per_sec -= mine_MPS;

        total_property--;

        space_mines.textContent = mine;
        buy_space_mine.textContent = "Buy for $" + abbreviate(buy_mine_price);
        sell_space_mine.textContent = "Sell for $" + abbreviate(sell_mine_price);
        update_bg();
        update_net_worth();
    }
})
sell_moon.addEventListener("click", () => {
    if(moon >= 1) {
        moon--;
        update_bg();

        const result = buy_property({
            property: moon,
            buy_property_price: buy_moon_price,
            sell_property_price: sell_moon_price,
            net_worth,
            cash,
            buy_base: moon_base_buy,
            sell_base: moon_base_sell
        })
        net_worth = result.net_worth;
        cash = result.cash;
        buy_moon_price = result.buy_price;
        sell_moon_price = result.sell_price;
        money_per_sec -= mine_MPS;

        total_property--;

        moon_colonies.textContent = moon;
        buy_moon.textContent = "Buy for $" + abbreviate(buy_moon_price);
        sell_moon.textContent = "Sell for $" + abbreviate(sell_moon_price);
        update_bg();
        update_net_worth();
    }
})
//~~~~~~~~~~~~~~~~~~~~~~~~ popup btns ~~~~~~~~~~~~~~~~~~~~~~~~
acknowledge_btn.addEventListener("click", () => {
    overlay.classList.remove("show");
    overlay.classList.add("hidden");
})

//~~~~~~~~~~~~~~~~~~~~~~~~ generate money btn ~~~~~~~~~~~~~~~~~~~~~~~~
money_button.addEventListener("click", () => {
    cash += 1;
    money_text.textContent = abbreviate(cash);
    create_coin();
});

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
        y: Math.random() * -2 * canvas.height,
        width: 53,
        height: 48,
        speed: 2,
        angle: Math.random() * Math.PI * 2,
        rotate_speed:Math.random() * ((Math.PI / 180) - (Math.PI / 90)) + Math.PI / 90
    }
    coins.push(coin);
}

function buy_property({
    property,
    buy_property_price,
    net_worth,
    cash,
    buy_base,
    sell_base
}) {
    let multiplier = 1.01;
    if(property === tech || property === hedge || property === mine || property === moon) {
        multiplier = 1.05;
    }
    return {
        net_worth: net_worth + buy_property_price,
        cash: cash - buy_property_price,
        buy_price: buy_base * (multiplier ** property),
        sell_price: sell_base * (multiplier ** property)
    }
}

function sell_property({
    property,
    buy_property_price,
    sell_property_price,
    net_worth,
    cash,
    buy_base,
    sell_base
}) {
    let multiplier = 1.01;
    if(property === tech || property === hedge || property === mine || property === moon) {
        multiplier = 1.05;
    }
    return {
        net_worth: net_worth - buy_property_price,
        cash: cash + sell_property_price,
        buy_price: buy_base * (multiplier ** property),
        sell_price: sell_base * (multiplier ** property)
    }
}

function update_bg() {
    if (moon > 0) {
        left_bg.classList.remove("mine-bg");
        left_bg.classList.add("moon-bg");
    } else if (mine > 0) {
        left_bg.classList.remove("moon-bg");
        left_bg.classList.add("mine-bg");
    } else {
        left_bg.classList.remove("moon-bg");
        left_bg.classList.remove("mine-bg");s
    }
}

function update_img(property, img, img_class) {
    property == 0 ? img.classList.remove(img_class) : img.classList.add(img_class);
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
    money_per_sec_text.textContent = abbreviate(money_per_sec);
    money_text.textContent = abbreviate(cash);
    net_worth_text.textContent = abbreviate(net_worth);
    property_text.textContent = abbreviate(total_property);
}

function abbreviate(money) {
    if(money >= 1000000000000) {
        const new_cash = money / 1000000000000;
        return (Math.round(new_cash * 10) / 10) + "T";
    } else if (money >= 1000000000) {
        const new_cash = money / 1000000000;
        return (Math.round(new_cash * 10) / 10) + "B";
    } else if (money >= 1000000) {
        const new_cash = money / 1000000;
        return (Math.round(new_cash * 10) / 10) + "M";
    } else if (money >= 1000) {
        const new_cash = money / 1000;
        return (Math.round(new_cash * 10) / 10) + "K";
    }
    return Math.round(money * 10) / 10;
}

function double_money_function(property) {
    const special_properties = ["tech startups", "hedge funds", "space mines", "moon colonies"];
    overlay.classList.remove("hidden");
    overlay.classList.add("show");
    special_properties.includes(property)
        ? event_text.textContent = `Congratulations on buying 25 ${property}! You're ${property} now generate 2x more money per second!`
        : event_text.textContent = `Congratulations on buying 50 ${property}! You're ${property} now generate 2x more money per second!`;
    acknowledge_btn.textContent = "Awesome!";
    accept_btn.classList.remove("show-btn");
    reject_btn.classList.remove("show-btn");
    acknowledge_btn.classList.add("show-btn");
}

animate();

