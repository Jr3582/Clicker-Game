//button that generates money
const money_button = document.getElementById("generate-money");

//all the text
const money_text = document.getElementById("money_text");
const net_worth_text = document.getElementById("net_worth_text");
const property_text = document.getElementById("property_text")
const money_per_sec_text = document.getElementById("money_per_sec");
const total_minutes_played_text = document.getElementById("total_minutes_played");

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
const sell_hedge = document.getElementById("sell_hedge");
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
const event_title = document.getElementById("event_title");
const overlay = document.getElementById("overlay");
const event_text = document.getElementById("event_text");
const exit_popup = document.getElementById("exit_popup");
const accept_btn = document.getElementById("accept");
const acknowledge_btn = document.getElementById("acknowledge");
const reject_btn = document.getElementById("reject");

//adding images
const lemonade_img = document.getElementById("lemonade_img");
const food_img = document.getElementById("food_img");
const store_img = document.getElementById("store_img");
const restaurant_img = document.getElementById("restaurant_img");
const apartment_img = document.getElementById("apartment_img");
const real_estate_img = document.getElementById("real_estate_img");
const tech_start_img = document.getElementById("tech_img");
const hedge_fund_img = document.getElementById("hedge_fund_img");

//history
const history = document.querySelector("#history");

//cash & coins
let cash = 10000000000;
const coins = [];

//donation amount
const donation_amount = Math.floor(Math.random() * (50000 - 10000) + 10000);

//early event objects
const early_event_effects = [
    { type: "cash", gain: "gain", history: "Found 100 dollars!",title:"Lucky Day!" ,mode: "flat", cash_effect: 100, target: "cash" ,description: "You found $100 on the ground while taking a stroll! (+100 cash)"},
    { type: "choice",
        gain: "loss", 
        accept: {
            mode: "flat",
            gain: "gain",
            history: "Sold your dog",
            accepted: true,
            cash_effect: 500,
            btn_text: "Sell your dog (+500)",
            target: "cash"
        },
        reject: {
            mode:"flat",
            gain: "event",
            history: "Yelled at your dog for eating your money",
            accepted: false,
            cash_effect: 0,
            btn_text: "Reprimand your dog",
            target: "cash"
        },
        history: "Your dog at some of your money!", title:"Dog Ate My Money" ,mode:"percent", cash_effect: -.01, target: "cash" ,description: "Your dog accidentally ate some of your money!! \n (-1% cash)", checker: "is_dog_sold"
    },
    { type: "boost", gain: "gain", history: "Lemonade stand promoted by TikTok influencer!", title:"TikTok Promotion!" ,mode:"flat", cash_effect: 5, duration: 60 * 1000 * 3 ,target: "lemon_MPS" ,description: "Your lemonade stand got featured on TikTok! \n (+5 cash generation for all lemonade stands! for 3 minutes!)"},
    { type: "choice", 
        gain: "loss",
        accept: {
            mode:"flat",
            gain: "loss",
            history: "Bought extra security for your account!", 
            accepted: true, 
            cash_effect: -10000, 
            btn_text: "Pay 10K", 
            target:"cash"
        }, 
        reject: {
            mode:"flat", 
            gain: "event",
            history: "You do nothing about the security of your account.", 
            accepted: false,
            cash_effect: 0, 
            btn_text: "That's too expensive!", 
            target:"cash"
        },
        history: "Someone hacked in your account! And stole some of your money!", title:"Secuirty Alert" ,mode:"percent", cash_effect: -0.25, target: "cash" , description: "Someone stole your credit card info and went on a shopping spree! \n (-25% cash) \n \n Do you want to spend an additional 10k to secure your account?", checker: "is_account_secure"
    },
    { type: "cash", gain: "gain", history:"You won a lucky scratch off!", title:"Lucky Scratch Off" ,mode:"flat", cash_effect: 1000, target: "cash" ,description: "You won a scratch off ticket! \n (+1000 cash)"},
    { type: "cash", title:"Great Aunt Birgit", gain: "gain", history: "You got a great inheritence!" ,mode:"flat", cash_effect: 621552, target: "cash" ,description: "Your great Aunt Birgit passed away and you inherit her wealth! \n (+621,552 cash)", checker: "is_aunt_birgit_dead"},
    { type: "boost", title:"A Bathroom Break", gain: "gain", history: "You're competitor went on a bathroom break!",mode:"percent", cash_effect: .2, duration: 60 * 1000 * 2 ,target: "food_MPS" ,description: "Your rival food truck competitor decided to go on a bathroom break \n (+20% income on all food trucks! For 2 minutes!"},
    { type: "cash", title:"Lawsuit Settlement", gain: "loss", history: "You got sued for 5k",mode:"flat", cash_effect: -5000, target: "cash" ,description: "You accidentally spilled lemonade on a customer and get sued, you settle for 5K in damages \n (-5000 cash)"},
    { type: "boost", title:"Organic Lemons!", gain: "gain", history: "Your organic lemons draw in customers!",mode:"percent", cash_effect: 0.05, duration: 60 * 1000 * 4 ,target: "lemon_MPS" ,description: "You switched to organic lemons. Customers are impressed! \n (+5% income on lemonade stands for 4 minutes!)"},
    { type: "choice",
        gain : "loss",
        accept: {
            mode: "flat", 
            gain: "loss",
            history: "You paid someone to get rid of all the squirrels in the world",
            accepted: true, 
            cash_effect: -1000, 
            btn_text: "Yes, I hate squirrels!", 
            target:"cash"},
        reject: {
            mode: "flat",
            gain: "event",
            history: "You continue to let the squirrels bully you",
            accepted: false, 
            cash_effect: 0, 
            btn_text: "Keep, the squirrels!", 
            target: "cash"
        }, 
        history:"A squirrel stole some of your money", title:"Sneaky Squirrel!" ,mode:"flat", cash_effect: -150, target: "cash" ,description: "A squirrel stole your tip jar! (-$150) \n \n Would you like to call the exterminator and have them exterminate all squirrels for 1K?", checker: "is_squirrel_exterminated"
    },
    { type: "choice",
        gain: "event",
        accept: {
            mode: "flat",
            gain: "loss",
            history: "You donate some of your wealth to the hospital",
            accepted: true, 
            cash_effect: (donation_amount) * -1, 
            btn_text: "Yes, I will donate!", 
            target:"cash"
        },
        reject: {
            mode: "flat",
            gain: "event",
            history: "you don't donate your wealth to the hospital", 
            accepted: false, 
            cash_effect: 0, 
            btn_text: "I won't donate", 
            target:"cash"
        }, 
        history:"You're asked to make a small donatation to a hospital", title:"Small Donation", mode:"flat", cash_effect: 0, target:"cash", description: `A children hospital for cancer research is reaching out to you to see if you'll make a donation of $${donation_amount} \n \n would you like to donate?`, checker: "has_donated_to_hospital"
    },
    { type: "choice",
        gain: "event",
        accept: {
            mode: "flat",
            gain: "loss",
            history: "You gave a homeless man 1,000, because you are nice :)",
            accepted: true,
            cash_effect: -1000,
            btn_text: "Give the man money",
            target:"cash"
        },
        reject: {
            mode: "flat",
            gain: "event",
            history: "You spit in a homeless man face because you are mean :(",
            accepted: false,
            cash_effect: 0,
            btn_text: "Spit in his face and leave",
            target: "cash"
        },
        good_follow_up: {
            mode: "flat",
            gain: "gain",
            history: "The homeless man rewards your generosity and gives you $100,000",
            cash_effect: 100000,
            accepted: true,
            title:"Good Karma!",
            description: "The homeless man was actually a secret trillionaire and was testing your kindness! He returns 100K back to you as a gesture of kindness! (+100K Cash)",
            checker: "recieved_reward",
            target: "cash"
        },
        bad_follow_up: {
            mod: "flat",
            gain: "loss",
            history: "The homeless man crushes your house and steals your money",
            cash_effect: -1000000,
            accepted: false,
            title: "Bad Karma",
            description: "The homeless man turns out to be a magic wizard and summons a meteor on top of your house and crushes it, he also steals a lot of your money. (-1M Cash)",
            checker: "recieved_reward",
            target: "cash"
        },
        history: "You were asked to make a small donation from a homeless man", title:"Donation To The Homeless", mode:"flat", cash_effect: 0, description: "A homeless man comes up to you and asks you for some money \n \n Do you want to make a small donation? \n (-1K Cash)", checker: "donated_to_homeless", has_follow_up: true, follow_up_delay: 10 * 1000, checker: "donated_to_homeless"
    }
]

const mid_event_effects = [
    { type: "boost", title:"TikTok Promotion!" ,mode:"flat", cash_effect: 5, duration: 60 * 1000 * 3 ,target: "lemon_MPS" ,description: "Your lemonade stand got featured on TikTok! \n (+5 cash generation for all lemonade stands! for 3 minutes!)"},
]

const early_game_event_objects = {
    get cash() {return cash; },
    set cash(value) { cash = value; },

    get lemon_MPS() {return lemon_MPS; },
    set lemon_MPS(value) { lemon_MPS = value; },

    get food_MPS() { return food_MPS; },
    set food_MPS(value) { food_MPS = value; },

    get is_account_secure() {return is_account_secure},
    set is_account_secure(value) { is_account_secure = value},

    get is_squirrel_exterminated() {return is_squirrel_exterminated},
    set is_squirrel_exterminated(value) {is_squirrel_exterminated = value},

    get has_donated_to_hospital() {return has_donated_to_hospital},
    set has_donated_to_hospital(value) {return has_donated_to_hospital = value},

    get is_aunt_birgit_dead() {return is_aunt_birgit_dead},
    set is_aunt_birgit_dead(value) {is_aunt_birgit_dead = value},

    get is_dog_sold() {return is_dog_sold},
    set is_dog_sold(value) {is_dog_sold = value},

    get donated_to_homeless() {return donated_to_homeless},
    set donated_to_homeless(value) {donated_to_homeless = value},

    get recieved_reward() {return recieved_reward},
    set recieved_reward(value) {recieved_reward = value},
}

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
const restaurant_base_sell = restaurant_base_buy / 2;
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
let buy_restaurant_price = restaurant_base_buy;
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

//net worth
let net_worth = 0;

//total property
let total_property = 0;

//money per minute
let money_per_sec = 0;

//playtime
let total_play_time = Number(localStorage.getItem("total_play_time")) || 0;
let start_time = Date.now();

const current_session_time = Date.now() - start_time;
const current_total = total_play_time + current_session_time;

//variables for canvas
const ctx = canvas.getContext("2d");

const coin_img = new Image();
coin_img.src = "../assets/gold_coin.png";

canvas.width = left_bg.clientWidth;
canvas.height = left_bg.clientHeight;

window.addEventListener("resize", () => {
    canvas.width = left_bg.clientWidth;
    canvas.height = left_bg.clientHeight;
});

//pop-up variables
let is_pop_up_open = false;
let last_pick = 0;
let active_boots = {};
let is_account_secure = false;
let is_aunt_birgit_dead = false;
let is_squirrel_exterminated = false;
let has_donated_to_hospital = false;
let is_dog_sold = false;
let donated_to_homeless = false;
let recieved_reward = false;

//~~~~~~~~~~~~~~~~~~~~~~~~ beginning random events ~~~~~~~~~~~~~~~~~~~~~~~~
const pop_up_events = randomInterval(() => {
    let random_event;
    let event;
    let attempts = 0;
    
    do {
        random_event = Math.floor(Math.random() * early_event_effects.length);
        event = early_event_effects[random_event];
        attempts++;
    } while (
        attempts < 50 && (
        random_event === last_pick ||
        (event.type === "boost" && active_boots[event.target]) ||
        (event.checker && early_game_event_objects[event.checker]) ||
        is_pop_up_open
        )
    );

    if(!is_pop_up_open && get_total_minutes(current_total) <= 15) {
        if(event.type === "boost") {
            active_boots[event.target] = true;

            let original_value = early_game_event_objects[event.target];

            apply_event_effect(event, early_game_event_objects);

            setTimeout(() => {
                active_boots[event.target] = false;
                early_game_event_objects[event.target] = original_value;
            }, event.duration);

            last_pick = random_event;
            add_history(event.history, event.gain);
            pop_up_acknowledge(event, event.gain);
            update_all_text();
        }
        
        if(event.type === "cash") {
            if(event.checker === "is_aunt_birgit_dead"){ early_game_event_objects[event.checker] = true };
            last_pick = random_event;
            add_history(event.history, event.gain);
            apply_event_effect(event, early_game_event_objects);
            pop_up_acknowledge(event, event.gain);
        }
        
        if(event.type === "choice") {
            add_history(event.history, event.gain);
            last_pick = random_event;
            show_choice_events(event, early_game_event_objects[event.checker]);
        }
    }
    update_UI();
}, 90 * 1000, 150 * 1000);

//~~~~~~~~~~~~~~~~~~~~~~~~ update play time ~~~~~~~~~~~~~~~~~~~~~~~~
const update_save = setInterval(() => {
    total_play_time = 0;
    total_minutes_played_text.textContent = get_total_minutes(current_total);
}, 1000);

//~~~~~~~~~~~~~~~~~~~~~~~~ yearly taxes every 10 minutes ~~~~~~~~~~~~~~~~~~~~~~~~
const taxes = setInterval(() => {
    let owe_to_irs = "";
    if(cash <= 100000) {
        owe_to_irs = abbreviate(cash * 0.20);
        cash *= 0.80;
    } else if (cash <= 100000000) {
        owe_to_irs = abbreviate(cash * 0.10);
        cash *= 0.90;
    } else if (cash <= 100000000000) {
        owe_to_irs = abbreviate(cash * 0.05);
        cash *= 0.95;
    } else {
        owe_to_irs = abbreviate(cash * 0.01);
        cash *= 0.99;
    }
    overlay_for_taxes(owe_to_irs);
    update_UI();
},10 * 60 * 1000);

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
    update_img(lemonade, lemonade_img, "lemonade-img");
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
    update_img(food, food_img, "food-img");
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
    update_img(store, store_img, "store-img");
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
    update_img(restaurant, restaurant_img, "restaurant-img");
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
    update_img(apartment, apartment_img, "apartment-img");
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
    update_img(real_estate, real_estate_img, "real-estate-img");
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
    update_img(tech, tech_start_img, "tech-img");
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
    update_img(hedge, hedge_fund_img, "hedge-fund-img");
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
    update_bg();
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
    update_bg();
}, 1000);

//~~~~~~~~~~~~~~~~~~~~~~~~ buy listeners ~~~~~~~~~~~~~~~~~~~~~~~~
buy_lemonade.addEventListener("click", () => {
    if(cash >= buy_lemonade_price) {
        lemonade++;

        add_history(`Bought a lemonade stand for $${abbreviate(buy_lemonade_price)}!`, "gain");


        if(lemonade === 50 && !fifty_lemonades) {
            fifty_lemonades = true;
            lemon_MPS *= 2;
            money_per_sec *= 2;
            double_money_pop_up("lemonade stands");
            update_MPS_text(lemonade_mps_text, lemon_MPS);
        }

        const result = buy_property({
            property: lemonade,
            buy_property_price: buy_lemonade_price,
            sell_property_price: sell_lemonade_price,
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
        update_UI();
    }
})
buy_food.addEventListener("click", () => {
    if(cash >= buy_food_price) {
        food++;

        add_history(`Bought a food truck for $${abbreviate(buy_food_price)}!`, "gain");

        if(food === 50 && !fifty_foods) {
            fifty_foods = true;
            food_MPS *= 2;
            money_per_sec *= 2;
            double_money_pop_up("food trucks");
            update_MPS_text(food_mps_text, food_MPS);
        }

        const result = buy_property({
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
        money_per_sec += food_MPS;

        total_property++;

        food_trucks.textContent = food;
        buy_food.textContent = "Buy for $" + abbreviate(buy_food_price);
        sell_food.textContent = "Sell for $" + abbreviate(sell_food_price);
        food_mps_text.textContent = food_MPS;
        update_UI();
    }
})
buy_store.addEventListener("click", () => {
    if(cash >= buy_store_price) {
        store++;

        add_history(`Bought a small store for $${abbreviate(buy_store_price)}!`, "gain");

        if(store === 50 && !fifty_stores) {
            fifty_stores = true;
            store_MPS *= 2;
            money_per_sec *= 2;
            double_money_pop_up("grocery stores");
            update_MPS_text(store_mps_text, store_MPS);
        }

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
        money_per_sec += store_MPS;

        total_property++;

        small_stores.textContent = store;
        buy_store.textContent = "Buy for $" + abbreviate(buy_store_price);
        sell_store.textContent = "Sell for $" + abbreviate(sell_store_price);
        store_mps_text.textContent = store_MPS;
        update_UI();
    }
})
buy_restaurant.addEventListener("click", () => {
    if(cash >= buy_restaurant_price) {
        restaurant++;

        add_history(`Bought a restaraunt for $${abbreviate(buy_restaurant_price)}!`, "gain");

        if(restaurant === 50 && !fifty_restaurants) {
            fifty_restaurants = true;
            restaurant_MPS *= 2;
            money_per_sec *= 2;
            double_money_pop_up("restaurants");
            update_MPS_text(restaurant_mps_text, restaurant_MPS);
        }

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
        money_per_sec += restaurant_MPS;

        total_property++;

        restaurants.textContent = restaurant;
        buy_restaurant.textContent = "Buy for $" + abbreviate(buy_restaurant_price);
        sell_restaurant.textContent = "Sell for $" + abbreviate(sell_restaurant_price);
        restaurant_mps_text.textContent = real_estate_MPS;
        update_UI();
    }
})
buy_apartment.addEventListener("click", () => {
    if(cash >= buy_apartment_price) {
        apartment++;

        add_history(`Bought a apartment complex for $${abbreviate(buy_apartment_price)}!`, "gain");

        if(apartment === 50 && !fifty_apartments) {
            fifty_apartments = true;
            apartment_MPS *= 2;
            money_per_sec *= 2;
            double_money_pop_up("apartment complexes");
            update_MPS_text(apartment_mps_text, apartment_MPS);
        }

        const result = buy_property({
            property: apartment,
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
        money_per_sec += apartment_MPS;

        total_property++;

        apartments.textContent = apartment;
        buy_apartment.textContent = "Buy for $" + abbreviate(buy_apartment_price);
        sell_apartment.textContent = "Sell for $" + abbreviate(sell_apartment_price);
        apartment_mps_text.textContent = apartment_MPS;
        update_UI();
    }
})
buy_real_estate.addEventListener("click", () => {
    if(cash >= buy_real_estate_price) {
        real_estate++;

        add_history(`Bought a real estate property for $${abbreviate(buy_real_estate_price)}!`, "gain");

        if(real_estate === 50 && !fifty_real_estates) {
            fifty_real_estates = true;
            real_estate_MPS *= 2;
            money_per_sec *= 2;
            double_money_pop_up("real estate properties");
            update_MPS_text(real_estate_mps_text, real_estate_MPS);
        }

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
        money_per_sec += real_estate_MPS;

        total_property++;

        real_estates.textContent = real_estate;
        buy_real_estate.textContent = "Buy for $" + abbreviate(buy_real_estate_price);
        sell_real_estate.textContent = "Sell for $" + abbreviate(sell_real_estate_price);
        real_estate_mps_text.textContent = real_estate_MPS;
        update_UI();
    }
})
buy_tech.addEventListener("click", () => {
    if(cash >= buy_tech_price) {
        tech++;

        add_history(`Bought a tech start up for $${abbreviate(buy_tech_price)}!`, "gain");

        if(tech === 25 && !fifty_techs) {
            fifty_techs = true;
            tech_MPS *= 2;
            money_per_sec *= 2;
            double_money_pop_up("tech startups");
            update_MPS_text(tech_mps_text, tech_MPS);
        }

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
        money_per_sec += tech_MPS;

        total_property++;

        tech_starts.textContent = tech;
        buy_tech.textContent = "Buy for $" + abbreviate(buy_tech_price);
        sell_tech.textContent = "Sell for $" + abbreviate(sell_tech_price);
        tech_mps_text.textContent = tech_MPS;
        update_UI();
    }
})
buy_hedge.addEventListener("click", () => {
    if(cash >= buy_hedge_price) {
        hedge++;
        add_history(`Bought a hedge fund company for $${abbreviate(buy_hedge_price)}!`)

        if(hedge === 25 && !fifty_hedge_funds) {
            fifty_hedge_funds = true;
            hedge_MPS *= 2;
            money_per_sec *= 2;
            double_money_pop_up("hedge funds");
            update_MPS_text(hedge_mps_text, hedge_MPS);
        }

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
        money_per_sec += hedge_MPS;

        total_property++;

        hedge_funds.textContent = hedge;
        buy_hedge.textContent = "Buy for $" + abbreviate(buy_hedge_price);
        sell_hedge.textContent = "Sell for $" + abbreviate(sell_hedge_price);
        hedge_mps_text.textContent = hedge_MPS;  
        update_UI();
    }
})
buy_space_mine.addEventListener("click", () => {
    if(cash >= buy_mine_price) {
        mine++;

        add_history(`Bought a space mining corporation for $${abbreviate(buy_mine_price)}!`, "gain");

        if(mine === 25 && !fifty_minings) {
            fifty_minings = true;
            mine_MPS *= 2;
            money_per_sec *= 2;
            double_money_pop_up("space mines");
            update_MPS_text(mine_mps_text, mine_MPS);
        }

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
        money_per_sec += mine_MPS;

        total_property++;

        space_mines.textContent = mine;
        buy_space_mine.textContent = "Buy for $" + abbreviate(buy_mine_price);
        sell_space_mine.textContent = "Sell for $" + abbreviate(sell_mine_price);
        mine_mps_text.textContent = mine_MPS;
        update_UI();
    }
})
buy_moon.addEventListener("click", () => {
    if(cash >= buy_moon_price){
        moon++;

        add_history(`Established a moon colony for the small small price of $${abbreviate(buy_moon_price)}!`, "gain");

        if(moon === 25 && !fifty_moons) {
            fifty_moons = true;
            moon_MPS *= 2;
            money_per_sec *= 2;
            double_money_pop_up("moon colonies");
            update_MPS_text(moon_mps_text, moon_MPS);
        }

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
        money_per_sec += moon_MPS;

        total_property++;

        moon_colonies.textContent = moon;
        buy_moon.textContent = "Buy for $" + abbreviate(buy_moon_price);
        sell_moon.textContent = "Sell for $" + abbreviate(sell_moon_price);
        moon_mps_text.textContent = moon_MPS;
        update_UI();
    }
})

//~~~~~~~~~~~~~~~~~~~~~~~~ sell buttons ~~~~~~~~~~~~~~~~~~~~~~~~
sell_lemonade.addEventListener("click", () => {
    if(lemonade >= 1) {
        lemonade--;

        add_history(`Sold a lemonade stand for $${abbreviate(sell_lemonade_price)}!`, "loss");

        const result = sell_property({
            property: lemonade,
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
        update_UI();
    }
})
sell_food.addEventListener("click", () => {
    if(food >= 1) {
        food--;

        add_history(`Sold a food truck for $${abbreviate(sell_food_price)}!`, "loss");

        const result = sell_property({
            property: food,
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
        update_UI();
    }
})
sell_store.addEventListener("click", () => {
    if(store >= 1) {
        store--;
        console.log(store);

        add_history(`Sold a small grocery store for $${abbreviate(sell_store_price)}!`, "loss");


        const result = sell_property({
            property: store,
            sell_property_price: sell_store_price,
            net_worth,
            cash,
            buy_base: store_base_buy,
            sell_base: store_base_sell
        })
        net_worth = result.net_worth;
        console.log(result.cash);
        buy_store_price = result.buy_price;
        sell_store_price = result.sell_price;
        money_per_sec -= store_MPS;

        total_property--;

        small_stores.textContent = store;
        buy_store.textContent = "Buy for $" + abbreviate(buy_store_price);
        sell_store.textContent = "Sell for $" + abbreviate(sell_store_price);
        update_UI();
    }
})
sell_restaurant.addEventListener("click", () => {
    if(restaurant >= 1) {
        restaurant--;

        add_history(`Sold a restaurant for $${abbreviate(sell_restaurant_price)}!`, "loss");

        const result = sell_property({
            property: restaurant,
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
        update_UI();
    }
})
sell_apartment.addEventListener("click", () => {
    if(apartment >= 1) {
        apartment--;

        add_history(`Sold a apartment complex for $${abbreviate(sell_apartment_price)}!`, "loss");

        const result = sell_property({
            property: restaurant,
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
        update_UI();
    }
})
sell_real_estate.addEventListener("click", () => {
    if(real_estate >= 1) {
        real_estate--;

        add_history(`Sold a real estate property for $${abbreviate(sell_lemonade_price)}!`, "loss");


        const result = sell_property({
            property: real_estate,
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
        update_UI();
    }
})
sell_tech.addEventListener("click", () => {
    if(tech >= 1) {
        tech--;

        add_history(`Sold a tech start up for $${abbreviate(sell_tech_price)}!`, "loss");


        const result = sell_property({
            property: tech,
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
        update_UI();
    }
})
sell_hedge.addEventListener("click", () => {
    if(hedge >= 1) {
        hedge--;

        add_history(`Sold a hedge fund company for $${abbreviate(sell_hedge_price)}!`, "loss");

        const result = sell_property({
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
        update_UI();
    }
})
sell_space_mine.addEventListener("click", () => {
    if(mine >= 1) {
        mine--;

        add_history(`Sold a space mining company for $${abbreviate(sell_mine_price)}!`, "loss");


        update_bg();

        const result = sell_property({
            property: mine,
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
        update_UI();
    }
})
sell_moon.addEventListener("click", () => {
    if(moon >= 1) {
        moon--;

        add_history(`You just sold a moon colony for $${abbreviate(sell_moon_price)}!`, "loss");

        update_bg();

        const result = sell_property({
            property: moon,
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
        update_UI();
    }
})
//~~~~~~~~~~~~~~~~~~~~~~~~ popup btns ~~~~~~~~~~~~~~~~~~~~~~~~
acknowledge_btn.addEventListener("click", () => {
    overlay.classList.remove("show");
    overlay.classList.add("hidden");
    acknowledge_btn.classList.remove("show-btn");

    accept_btn.textContent = "";
    reject_btn.textContent = "";

    acknowledge_btn.onclick = null;

    is_pop_up_open = false;
})

//~~~~~~~~~~~~~~~~~~~~~~~~ generate money btn ~~~~~~~~~~~~~~~~~~~~~~~~
money_button.addEventListener("click", () => {
    cash += 1;
    money_text.textContent = abbreviate(cash);
    create_coin();
});

//~~~~~~~~~~~~~~~~~~~~~~~~ save functionality ~~~~~~~~~~~~~~~~~~~~~~~~
const save_game = setInterval(() => {
    const session_time = Date.now() - start_time;
    total_play_time += session_time;
    localStorage.setItem("save_state", JSON.stringify(get_game_state()));
    add_history("!!!GAME IS AUTO SAVING!!!", "event");
}, 5 * 60 * 1000)

//~~~~~~~~~~~~~~~~~~~~~~~~ all functions ~~~~~~~~~~~~~~~~~~~~~~~~
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
        net_worth: net_worth + sell_property_price,
        cash: cash - buy_property_price,
        buy_price: buy_base * (multiplier ** property),
        sell_price: sell_base * (multiplier ** property)
    }
}

function sell_property({
    property,
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
        net_worth: net_worth - (sell_base * (multiplier ** property)),
        cash: cash + sell_property_price,
        buy_price: buy_base * (multiplier ** property),
        sell_price: sell_base * (multiplier ** property)
    }
}

function calculate_net_worth() {
    return (
        lemonade * sell_lemonade_price
    )
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
        left_bg.classList.remove("mine-bg");
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

function update_UI () {
    money_per_sec_text.textContent = abbreviate(money_per_sec);
    money_text.textContent = abbreviate(cash);
    net_worth_text.textContent = abbreviate(net_worth);
    property_text.textContent = abbreviate(total_property);
    total_minutes_played_text.textContent = get_total_minutes(total_play_time); 
}

function update_MPS_text(mps_object, mps) {
    mps_object.textContent = mps;
}

function update_all_text () {
    lemonade_stands.textContent = lemonade;
    food_trucks.textContent = food;
    small_stores.textContent = store;
    restaurants.textContent = restaurant;
    apartments.textContent = apartment;
    real_estates.textContent = real_estate;
    tech_starts.textContent = tech;
    hedge_funds.textContent = hedge;
    space_mines.textContent = mine;
    moon_colonies.textContent = moon;

    lemonade_mps_text.textContent = lemon_MPS;
    food_mps_text.textContent = food_MPS;
    store_mps_text.textContent = store_MPS;
    restaurant_mps_text.textContent = restaurant_MPS;
    apartment_mps_text.textContent = apartment_MPS;
    real_estate_mps_text.textContent = real_estate_MPS;
    tech_mps_text.textContent = tech_MPS;
    hedge_mps_text.textContent = hedge_MPS;
    mine_mps_text.textContent = mine_MPS;
    moon_mps_text.textContent = moon_MPS;

    buy_lemonade.textContent = "Buy for $" + abbreviate(buy_lemonade_price);
    buy_food.textContent = "Buy for $" + abbreviate(buy_food_price);
    buy_store.textContent = "Buy for $" + abbreviate(buy_store_price);
    buy_restaurant.textContent = "Buy for $" + abbreviate(buy_restaurant_price);
    buy_apartment.textContent = "Buy for $" + abbreviate(buy_apartment_price);
    buy_real_estate.textContent = "Buy for $" + abbreviate(buy_real_estate_price);
    buy_tech.textContent = "Buy for $" + abbreviate(buy_tech_price);
    buy_hedge.textContent = "Buy for $" + abbreviate(buy_hedge_price);
    buy_space_mine.textContent = "Buy for $" + abbreviate(buy_mine_price);
    buy_moon.textContent = "Buy for $" + abbreviate(buy_moon_price);

    sell_lemonade.textContent = "Sell for $" + abbreviate(sell_lemonade_price);
    sell_food.textContent = "Sell for $" + abbreviate(sell_food_price);
    sell_store.textContent = "Sell for $" + abbreviate(sell_store_price);
    sell_restaurant.textContent = "Sell for $" + abbreviate(sell_restaurant_price);
    sell_apartment.textContent = "Sell for $" + abbreviate(sell_apartment_price);
    sell_real_estate.textContent = "Sell for $" + abbreviate(sell_real_estate_price);
    sell_tech.textContent = "Sell for $" + abbreviate(sell_tech_price);
    sell_hedge.textContent = "Sell for $" + abbreviate(sell_hedge_price);
    sell_space_mine.textContent = "Sell for $" + abbreviate(sell_mine_price);
    sell_moon.textContent = "Sell for $" + abbreviate(sell_moon_price);
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
    return Math.round(money * 100) / 100;
}

function get_total_minutes(ms) {
    return Math.floor(ms / 60000);
}

function get_game_state() {
    return {
        fifty_lemonades,
        fifty_foods,
        fifty_stores,
        fifty_restaurants,
        fifty_apartments,
        fifty_real_estates,
        fifty_techs,
        fifty_hedge_funds,
        fifty_minings,
        fifty_moons,

        lemonade,
        food,
        store,
        restaurant,
        apartment,
        real_estate,
        tech,
        hedge,
        mine,
        moon,

        buy_lemonade_price,
        buy_food_price,
        buy_store_price,
        buy_restaurant_price,
        buy_apartment_price,
        buy_real_estate_price,
        buy_tech_price,
        buy_hedge_price,
        buy_mine_price,
        buy_moon_price,

        sell_lemonade_price,
        sell_food_price,
        sell_store_price,
        sell_restaurant_price,
        sell_apartment_price,
        sell_real_estate_price,
        sell_tech_price,
        sell_hedge_price,
        sell_mine_price,
        sell_moon_price,

        lemon_MPS,
        food_MPS,
        store_MPS,
        restaurant_MPS,
        apartment_MPS,
        real_estate_MPS,
        tech_MPS,
        hedge_MPS,
        mine_MPS,
        moon_MPS,

        cash,
        net_worth,
        total_property,
        money_per_sec,
        total_play_time,

        last_pick,
        active_boots,
        is_account_secure,
        is_aunt_birgit_dead,
        is_squirrel_exterminated,
        has_donated_to_hospital,
        is_dog_sold,
        donated_to_homeless,
        recieved_reward,
    };
}

function load_game() {
    const saved = localStorage.getItem("save_state");
    if (!saved) return;

    const data = JSON.parse(saved);

    fifty_lemonades = data.fifty_lemonades;
    fifty_foods = data.fifty_foods;
    fifty_stores = data.fifty_stores;
    fifty_apartments = data.fifty_apartments;
    fifty_real_estates = data.fifty_real_estates;
    fifty_techs = data.fifty_techs;
    fifty_hedge_funds = data.fifty_hedge_funds;
    fifty_minings = data.fifty_minings;
    fifty_moons = data.fifty_moons;

    lemonade = data.lemonade;
    food = data.food;
    store = data.store;
    restaurant = data.restaurant;
    apartment = data.apartment;
    real_estate = data.real_estate;
    tech = data.tech;
    hedge = data.hedge;
    mine = data.mine;
    moon = data.moon;

    buy_lemonade_price = data.buy_lemonade_price;
    buy_food_price = data.buy_food_price;
    buy_store_price = data.buy_store_price;
    buy_restaurant_price = data.buy_restaurant_price;
    buy_apartment_price = data.buy_apartment_price;
    buy_tech_price = data.buy_tech_price;
    buy_hedge_price = data.buy_hedge_price;
    buy_mine_price = data.buy_mine_price;
    buy_moon_price = data.buy_moon_price;

    sell_lemonade_price = data.sell_lemonade_price;
    sell_food_price = data.sell_food_price;
    sell_store_price = data.sell_store_price;
    sell_restaurant_price = data.sell_restaurant_price;
    sell_apartment_price = data.sell_apartment_price;
    sell_real_estate_price = data.sell_real_estate_price;
    sell_tech_price = data.sell_tech_price;
    sell_hedge_price = data.sell_hedge_price;
    sell_mine_price = data.sell_mine_price;
    sell_moon_price = data.sell_moon_price;

    lemon_MPS = data.lemon_MPS;
    food_MPS = data.food_MPS;
    store_MPS = data.store_MPS;
    restaurant_MPS = data.restaurant_MPS;
    apartment_MPS = data.apartment_MPS;
    real_estate_MPS = data.real_estate_MPS;
    tech_MPS = data.tech_MPS;
    hedge_MPS = data.hedge_MPS;
    mine_MPS = data.mine_MPS;
    moon_MPS = data.moon_MPS;

    cash = data.cash;
    net_worth = data.net_worth;
    total_property = data.total_property;
    money_per_sec = data.money_per_sec;
    total_play_time = data.total_play_time;

    last_pick = data.last_pick;
    active_boots = data.active_boots;
    is_account_secure = data.is_account_secure;
    is_aunt_birgit_dead = data.is_aunt_birgit_dead;
    is_squirrel_exterminated = data.is_squirrel_exterminated;
    has_donated_to_hospital = data.has_donated_to_hospital;
    is_dog_sold = data.is_dog_sold;
    donated_to_homeless = data.donated_to_homeless;
    recieved_reward = data.recieved_reward;

    update_UI();
    update_all_text();
}

function overlay_for_taxes(tax_amount) {
    overlay.classList.remove("hidden");
    overlay.classList.add("show");
    accept_btn.classList.remove("show-btn")
    reject_btn.classList.remove("show-btn");
    acknowledge_btn.classList.add("show-btn");
    event_title.textContent = "Tax Season!";
    event_text.textContent = `It's time for yearly taxes, you owe ${tax_amount} dollars to the IRS!`
    is_pop_up_open = true;
}

function pop_up_acknowledge(event) {
    if(event.gain === "gain") acknowledge_btn.textContent = ":D";
    if(event.gain === "loss") acknowledge_btn.textContent = ":C";
    if(event.gain === "event") acknowledge_btn.textContext = ":|";
    overlay.classList.remove("hidden");
    overlay.classList.add("show");
    
    accept_btn.classList.remove("show-btn")
    reject_btn.classList.remove("show-btn");
    reject_btn.textContent = "";
    accept_btn.textContent = "";

    acknowledge_btn.classList.add("show-btn");
    is_pop_up_open = true;
    event_title.textContent = event.title;
    event_text.textContent = event.description;
}

function show_choice_events(event, checker) {
    if(!checker) {
        overlay.classList.remove("hidden");
        overlay.classList.add("show");
        is_pop_up_open = true;

        event_title.textContent = event.title;
        event_text.textContent = event.description;

        accept_btn.classList.add("show-btn")
        reject_btn.classList.add("show-btn");

        accept_btn.textContent = event.accept.btn_text;
        reject_btn.textContent = event.reject.btn_text;

        accept_btn.onclick = () => {
            early_game_event_objects[event.checker] = event.accept.accepted;
            apply_event_effect(event.accept, early_game_event_objects);
            add_history(event.accept.history, event.accept.gain);
            close_pop_up();
            if(event.has_follow_up && !early_game_event_objects[event.good_follow_up.checker]) {
                setTimeout(() => {
                    early_game_event_objects[event.good_follow_up.checker] = event.good_follow_up.accepted;
                    overlay.classList.remove("hidden");
                    overlay.classList.add("show");
                    accept_btn.classList.remove("show-btn")
                    reject_btn.classList.remove("show-btn");
                    acknowledge_btn.classList.add("show-btn");
                    acknowledge_btn.textContent = "Yippee!!"

                    is_pop_up_open = true;

                    event_title.textContent = event.good_follow_up.title;
                    event_text.textContent = event.good_follow_up.description;

                    add_history(event.good_follow_up.history, event.good_follow_up.gain);
                    apply_event_effect(event.good_follow_up, early_game_event_objects);
                }, event.follow_up_delay);
            }
        }

        reject_btn.onclick = () => {
            early_game_event_objects[event.checker] = event.reject.accepted;
            add_history(event.reject.history, event.reject.gain);
            apply_event_effect(event.reject, early_game_event_objects);
            close_pop_up();
            if(event.has_follow_up && !early_game_event_objects[event.bad_follow_up.checker]) {
                setTimeout(() => {
                    early_game_event_objects[event.bad_follow_up.checker] = event.bad_follow_up.accepted;
                    overlay.classList.remove("hidden");
                    overlay.classList.add("show");
                    accept_btn.classList.remove("show-btn")
                    reject_btn.classList.remove("show-btn");
                    acknowledge_btn.classList.add("show-btn");
                    acknowledge_btn.textContent = "D:"

                    is_pop_up_open = true;

                    event_title.textContent = event.bad_follow_up.title;
                    event_text.textContent = event.bad_follow_up.description;

                    add_history(event.bad_follow_up.history, event.bad_follow_up.gain);
                    apply_event_effect(event.bad_follow_up, early_game_event_objects);
                }, event.follow_up_delay);
            }
        }
    }
}

function close_pop_up() {
    overlay.classList.remove("show");
    overlay.classList.add("hidden");

    acknowledge_btn.classList.remove("show-btn");
    accept_btn.classList.remove("show-btn");
    reject_btn.classList.remove("show-btn");

    accept_btn.textContent = "";
    reject_btn.textContent = "";

    accept_btn.onclick = null;
    reject_btn.onclick = null;

    is_pop_up_open = false;
}

function apply_event_effect(event, game_object) {
    if(event.mode === "flat") {
        game_object[event.target] += event.cash_effect;
    } else if (event.mode === "percent") {
        game_object[event.target] *= (1 + event.cash_effect);
    }
    update_UI();
}

function double_money_pop_up(property) {
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

function add_history(text, style) {
    const li = document.createElement("li");
    li.textContent = text;
    li.classList.add(style)
    history.appendChild(li);
}

function randomInterval(fn, min, max) {
    const delay = Math.random() * (max - min) + min;

    setTimeout(() => {
        fn();
        randomInterval(fn, min, max);
    }, delay);
}

// load_game();

animate();