//button that generates money
const money_button = document.getElementById("generate-money");

//all the text
const money_text = document.getElementById("money_text");
const net_worth_text = document.getElementById("net_worth_text");
const property_text = document.getElementById("property_text")
const money_per_sec_text = document.getElementById("money_per_sec");
const total_minutes_played_text = document.getElementById("total_minutes_played");
const wife_text = document.getElementById("wife_text");

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
const accept_btn = document.getElementById("accept");
const acknowledge_btn = document.getElementById("acknowledge");
const reject_btn = document.getElementById("reject");

const overlay2 = document.getElementById("overlay2");
const event_title2 = document.getElementById("event_title2");
const event_text2 = document.getElementById("event_text2");
const accept_btn2 = document.getElementById("accept2");
const acknowledge_btn2 = document.getElementById("acknowledge2");
const reject_btn2 = document.getElementById("reject2");

const overlay3 = document.getElementById("overlay3");
const exit_gamble = document.getElementById("exit_gamble");
const gamble = document.getElementById("gamble");
const roulette_nums = document.getElementById("roulette_nums");

//adding images
const lemonade_img = document.getElementById("lemonade_img");
const food_img = document.getElementById("food_img");
const store_img = document.getElementById("store_img");
const restaurant_img = document.getElementById("restaurant_img");
const apartment_img = document.getElementById("apartment_img");
const real_estate_img = document.getElementById("real_estate_img");
const tech_start_img = document.getElementById("tech_img");
const hedge_fund_img = document.getElementById("hedge_fund_img");

//gamble money btns
const add_onek = document.getElementById("add_1k");
const add_tenk = document.getElementById("add_10k");
const add_hundredk = document.getElementById("add_100k");
const add_million = document.getElementById("add_1m");

const remove_onek = document.getElementById("remove_1k");
const remove_tenk = document.getElementById("remove_10k");
const remove_hundredk = document.getElementById("remove_100k");
const remove_million = document.getElementById("remove_1m");

const bet_amount_text = document.getElementById("bet_amount");

//history
const history = document.querySelector("#history");

//cash & coins
let cash = 10000000000000;
const coins = [];

//donation amount
const donation_amount = Math.floor(Math.random() * (50000 - 10000) + 10000);

//early event objects for pop-ups
const early_event_effects = [
    { type: "cash", gain: "gain", history: "Found 100 dollars!", title:"Lucky Day!", mode: "flat", effect: 100, target: "cash" ,description: "You found $100 on the ground while taking a stroll! (+100 cash)"},
    { type: "choice",
        gain: "loss", 
        accept: {
            mode: "flat",
            gain: "gain",
            history: "Sold your dog",
            accepted: true,
            effect: 500,
            btn_text: "Sell your dog (+500)",
            target: "cash"
        },
        reject: {
            mode:"flat",
            gain: "event",
            history: "Yelled at your dog for eating your money",
            accepted: false,
            effect: 0,
            btn_text: "Reprimand your dog",
            target: "cash"
        },
        history: "Your dog at some of your money!", title:"Dog Ate My Money" ,mode:"percent", effect: -.01, target: "cash" ,description: "Your dog accidentally ate some of your money!! \n (-1% cash)", checker: "is_dog_sold"
    },
    { type: "boost", gain: "gain", history: "Lemonade stand promoted by TikTok influencer!", title:"TikTok Promotion!" ,mode:"flat", effect: 5, duration: 60 * 1000 * 3 ,target: "lemon_MPS" ,description: "Your lemonade stand got featured on TikTok! \n (+5 cash generation for all lemonade stands! for 3 minutes!)"},
    { type: "choice", 
        gain: "loss",
        accept: {
            mode:"flat",
            gain: "loss",
            history: "Bought extra security for your account!", 
            accepted: true, 
            effect: -10000, 
            btn_text: "Pay 10K", 
            target:"cash"
        }, 
        reject: {
            mode:"flat", 
            gain: "event",
            history: "You do nothing about the security of your account.", 
            accepted: false,
            effect: 0, 
            btn_text: "That's too expensive!", 
            target:"cash"
        },
        history: "Someone hacked in your account! And stole some of your money!", title:"Secuirty Alert" ,mode:"percent", effect: -0.25, target: "cash" , description: "Someone stole your credit card info and went on a shopping spree! \n (-25% cash) \n \n Do you want to spend an additional 10k to secure your account?", checker: "is_account_secure"
    },
    { type: "cash", gain: "gain", history:"You won a lucky scratch off!", title:"Lucky Scratch Off" ,mode:"flat", effect: 1000, target: "cash" ,description: "You won a scratch off ticket! \n (+1000 cash)"},
    { type: "cash", title:"Great Aunt Birgit", gain: "gain", history: "You got a great inheritence!" ,mode:"flat", effect: 621552, target: "cash" ,description: "Your great Aunt Birgit passed away and you inherit her wealth! \n (+621,552 cash)", checker: "is_aunt_birgit_dead"},
    { type: "boost", title:"A Bathroom Break", gain: "gain", history: "You're competitor went on a bathroom break!",mode:"percent", effect: .2, duration: 60 * 1000 * 2 ,target: "food_MPS" ,description: "Your rival food truck competitor decided to go on a bathroom break \n (+20% income on all food trucks! For 2 minutes!"},
    { type: "cash", title:"Lawsuit Settlement", gain: "loss", history: "You got sued for 5k for spilling lemonade",mode:"flat", effect: -5000, target: "cash" ,description: "You accidentally spilled lemonade on a customer and get sued, you settle for 5K in damages \n (-5000 cash)"},
    { type: "boost", title:"Organic Lemons!", gain: "gain", history: "Your organic lemons draw in customers!",mode:"percent", effect: 0.05, duration: 60 * 1000 * 4 ,target: "lemon_MPS" ,description: "You switched to organic lemons. Customers are impressed! \n (+5% income on lemonade stands for 4 minutes!)"},
    { type: "choice",
        gain : "loss",
        accept: {
            mode: "flat", 
            gain: "loss",
            history: "You paid someone to get rid of all the squirrels in the world",
            accepted: true, 
            effect: -1000, 
            btn_text: "Yes, I hate squirrels!", 
            target:"cash"},
        reject: {
            mode: "flat",
            gain: "event",
            history: "You continue to let the squirrels bully you",
            accepted: false, 
            effect: 0, 
            btn_text: "Keep, the squirrels!", 
            target: "cash"
        }, 
        history:"A squirrel stole some of your money", title:"Sneaky Squirrel!" ,mode:"flat", effect: -150, target: "cash" ,description: "A squirrel stole your tip jar! (-$150) \n \n Would you like to call the exterminator and have them exterminate all squirrels for 1K?", checker: "is_squirrel_exterminated"
    },
    { type: "choice",
        gain: "event",
        accept: {
            mode: "flat",
            gain: "loss",
            history: "You donate some of your wealth to the hospital",
            accepted: true, 
            effect: (donation_amount) * -1, 
            btn_text: "Yes, I will donate!", 
            target:"cash"
        },
        reject: {
            mode: "flat",
            gain: "event",
            history: "you don't donate your wealth to the hospital", 
            accepted: false, 
            effect: 0, 
            btn_text: "I won't donate", 
            target:"cash"
        }, 
        history:"You're asked to make a small donatation to a hospital", title:"Small Donation", mode:"flat", effect: 0, target:"cash", description: `A children hospital for cancer research is reaching out to you to see if you'll make a donation of $${donation_amount} \n \n would you like to donate?`, checker: "has_donated_to_hospital"
    },
    { type: "choice",
        gain: "event",
        accept: {
            mode: "flat",
            gain: "loss",
            history: "You gave a homeless man 1K, because you are nice :)",
            accepted: true,
            effect: -1000,
            btn_text: "Give the man money",
            target:"cash"
        },
        reject: {
            mode: "flat",
            gain: "event",
            history: "You spit in a homeless man face because you are mean :(",
            accepted: false,
            effect: 0,
            btn_text: "Spit in his face and leave",
            target: "cash"
        },
        good_follow_up: {
            mode: "flat",
            gain: "gain",
            history: "The homeless man rewards your generosity and gives you $100,000",
            effect: 100000,
            accepted: true,
            title:"Good Karma!",
            description: "The homeless man was actually a secret trillionaire and was testing your kindness! He returns 100K back to you as a gesture of kindness! (+100K Cash)",
            checker: "recieved_reward",
            target: "cash"
        },
        bad_follow_up: {
            mode: "flat",
            gain: "loss",
            history: "The homeless man crushes your house and steals your money",
            effect: -1000000,
            accepted: false,
            title: "Bad Karma",
            description: "The homeless man turns out to be a magic wizard and summons a meteor on top of your house and crushes it, he also steals a lot of your money. (-1M Cash)",
            checker: "recieved_reward",
            target: "cash"
        },
        history: "You were asked to make a small donation from a homeless man", title:"Donation To The Homeless", mode:"flat", effect: 0, description: "A homeless man comes up to you and asks you for some money \n \n Do you want to make a small donation? \n (-1K Cash)", checker: "donated_to_homeless", has_follow_up: true, follow_up_delay: 10 * 1000
    }
]

const mid_event_effects = [
    { type: "cash", gain: "gain", history: "The government gave you a subsidy of (+ 250K)!",title:"Government Subsidy", mode:"flat", effect: 250000, target: "cash", description: "The city awards your company a mid-size business expansion grant \n \n(+ $250K)"},
    { type: "cash", gain: "loss", history: "The equipment at one of your properties malfunctions! (- 180K)", title:"Equipment Malfunction", mode:"flat", effect: -180000, target: "cash", description: "One of your production facilities suffers critical equipment failures \n \n (- $180K)"},
    { type: "choice", gain: "event", 
        accept: {
            mode: "flat",
            gain: "loss",
            history: "You give the worker a 25K raise!",
            accepted: true,
            effect: -25000,
            btn_text: "Give a bonus",
            target: "cash"
        },
        reject: {
            mode: "flat",
            gain: "event",
            history: "You laugh in the worker face refuses his demands",
            accepted: false,
            effect: 0,
            btn_text: "Don't give bonus",
            target: "cash"
        },
        good_follow_up: {
            type: "boost",
            mode: "percent",
            gain: "gain",
            history: "+50% income on all restaurants",
            effect: 0.50,
            accepted: true,
            title: "A Happy Worker",
            duration: 60 * 1000 * 5,
            description: "The worker feels vindicated and works harder than ever before! \n \n(+ 50% income on all restaurants! for 5 minutes)",
            checker: "happy_worker",
            target: "restaurant_MPS"
        },
        bad_follow_up: {
            type: "boost",
            mode: "percent",
            gain: "loss",
            history: "-50% income on all restaurants!",
            effect: -0.50,
            accepted: false,
            title: "Unhappy Worker",
            duration: 60 * 1000 * 5,
            description: "The worker is left unsatisfied and leaves, your restaurants becomes much less efficient without him! \n \n (-50% income on all restaurants! for 5 minutes)",
            checker: "happy_worker",
            target: "restaurant_MPS"
        },
        history: "Your top worker demands a raise!", title:"Worker Demands", mode:"percent", effect: 0, target: "cash", description: "Your top worker at your restaurant demands a 25K bonus or else he will leave!", checker: "has_given_worker_bonus", has_follow_up: true, follow_up_delay: 10 * 1000
    },
    { type: "cash", gain: "loss", history: "You've been audited for miscalculated taxes.", title:"Tax Audit", mode:"flat", effect: -275000, target: "cash", description: "You've been audited and owe previously miscalculated taxes of 275K \n \n (- $275K)"},
    { type: "boost", gain: "gain", history: "Mark Zuckerberg endorses your tech startup.", title:"Mark Zuckerberg", mode:"percent", effect: .10,  duration: 60 * 1000 * 3, target: "tech_MPS", description: "Mark Zuckerberg endorses your tech start up! \n \n (+ 10% income to all tech startups for 3 minutes)"},
    { type: "choice", gain: "event", 
        accept: {
            mode: "flat",
            gain: "loss",
            history: "You give the magical crypto wizard 1M dollars",
            accepted: true,
            effect: -1000000,
            btn_text: "Give the man 1M",
            target: "cash"
        },
        reject: {
            mode: "flat",
            gain: "event",
            history: "You don't give the wizard 1 million dollars",
            accepted: true,
            effect: 0,
            btn_text: "You pass on his offer",
            target: "cash",
        },
        good_follow_up: {
            mode: "flat",
            gain: "loss",
            history: "You got scammed by a magical wizard",
            effect: 0,
            accepted: true,
            title: "You Got Scammed",
            description: "The wizard turned out to be a professional con artist! He steals your money and you never see him again.",
            checker: "got_scammed",
            target: "cash"
        },
        bad_follow_up: {
            mode: "flat",
            gain: "event",
            history: "A bunch of investors got scammed by a magical crypto wizard!",
            effect: 0,
            accepted: true,
            title: "Break News!",
            description: "You see on the news that multiple investors got scammed by magical crypto wizard, these people will most likely never see their money ever again!",
            checker: "got_scammed",
            target: "cash"
        },
        history: "Mysterious crypto wizard appraoches you.", title:"Magic Crypto Wizard", mode:"flat", effect: 0, target: "cash", description: "A magical crypto wizard approaches you and says he can multiply your money if you give him a portion of your small fortune.", checker: "give_to_crypto_wizard", has_follow_up: true, follow_up_delay: 10 * 1000
    },
    { type: "cash", gain: "loss", history: "You rebrand the company logo to a worse logo!", title:"Logo rebrand", mode:"flat", effect: -250000, target: "cash", description: "You decided to rebrand the company logo into something much worse and less unrecognizeable \n \n (- $250K)"},
    { type: "cash", gain: "gain", history: "The price of bitcoin sky rockets!!", title:"Bitcoin Price Skyrockets!", mode:"flat", effect: 1000000, target: "cash", description:"The price of your bitcoin skyrockets! \n \n (+ $1M)"},
    { type: "cash", gain: "loss", history: "A intern deletes your whole database and the backups! You spend 500K to try and recover everything!", title:"Intern Incompetence", mode:"flat", effect: -500000, target: "cash", description: "Your newly hired intern deletes the entire production database and it's back-ups, and you spend $500K to try and recover everything! \n \n (- $500K)"},
    { type: "cash", gain: "loss", history: "A customer sues you!", title:"Minor Lawsuit", mode:"flat", effect: -120000, target: "cash", description: "A customer claims your product is 'emotionally damaging' them and he sues you for $120K \n \n (- $120K)"},
    { type: "cash", gain: "gain", history: "One of your post starts trending!", title:"Social Media Surge", mode:"flat", effect: 250000, target: "cash", description: "One of your posts trends for no clear reason! \n \n (- $250K)"},
    { type: "cash", gain: "gain", history: "You land a short-term sponsorship deal with another company!", title:"Corporate Sponsorship", mode:"flat", effect: 275000, target: "cash", description: "You landed a short-term sponsorship deal with another company \n \n (+ $275K)"},
    { type: "cash", gain: "loss", history: "Your dog takes revenge on you!", title:"Doggie Revenge!", mode:"percent", effect: -.1, target: "cash", description: "The dog you sold earlier came back for revenge and eats 10% of your wealth! \n \n (- 10% Cash)"}, 
]

const late_event_effects = [
    { type: "cash", gain: "event", 
        accept: {
            mode: "flat",
            gain: "loss",
            history: "You hire a Saul Goodman to fight your case!",
            accepted: true,
            effect: -2000000,
            btn_text: "Hire a lawyer",
            target: "cash"
        },
        reject: {
            mode: "flat",
            gain: "event",
            history: "You do nothing about the IRS",
            accepted: false,
            effect: 0,
            btn_text: "Do nothing",
            target: "cash"
        },
        good_follow_up: {
            mode: "percent",
            gain: "event",
            history: "Saul Goodman worked his magic and you only lose 5% of your cash",
            effect: -0.05,
            accepted: true,
            title: "IRS Audit Update",
            description: "Saul Goodman worked his magic and you only lose 5% of your total cash!",
            checker: "audit_fined",
            target: "cash"
        },
        bad_follow_up: {
            mode: "percent",
            gain: "event",
            history: "You have no one to defend you and the IRS fine you for 25% of your total cash!",
            effect: -0.25,
            accepted: false,
            title: "IRS Audit Update",
            description: "With no one to defend your case, the IRS, finds you guilty of fraud and you lose 25% of your total cash",
            checker: "audit_fined",
            target: "cash"
        },
        history: "The IRS takes a audit of your companies and properties and finds out you've been doing fraud!", title:"IRS Audit From Hell", mode:"flat", effect: 0, target: "cash", description: "The IRS audits all your companies and discovers you've been commiting some fraud!", checker: "irs_audit", has_follow_up: true, follow_up_delay: 10 * 1000
    }, 
    { type: "boost", gain: "loss", history: "A small meteor hit the dome of your moon colony and some of the air escapes", title:"Hull Breach!", mode:"percent", effect: -.1, duration: 60 * 1000 * 3, target: "moon_MPS", description: "You lose 10% on your moon colonies for 3 minutes!"}, 
    { type: "cash", gain: "gain", history: "You find a underground crypto vault!", title:"Crypto Vault", mode:"flat", effect: 100000000, target: "cash", description: "You find a underground crypto vault full of flash drives with Bitcoin!\n \n (+ $100M)"}, 
    { type: "cash", gain: "gain", history: "The united government gives you more subsidies!", title:"Government Subsidy", mode:"flat", effect: 50000000, target: "cash", description: "The government gives you more subsidies!\n \n (+ $50M)"}, 
    { type: "boost", gain: "gain", history: "The lemonade cartel endorses you!", title:"Lemonade Cartel", mode:"percent", effect: 10, target: "lemon_MPS",  duration: 60 * 1000 * 3, description: "The Don from the Lemonade Cartel endorses your lemonade recipe, everybody flocks to your lemonade stands! \n \n (+ 1000% for 3 minutes!)"}, 
]

const wife_events = [
    { type: "wife", type2: "cash", gain: "loss", history: "Your wife takes your credit card and charges 20K on it!", title:"Sneaky Wife", happiness: 20, mode:"flat", effect: -20000, target: "cash", target2: "wife_happiness", description: "Your wife takes your wallet while you weren't looking and takes your credit card and went on a shopping spree!\n \n (- $20K)"},
    { type: "wife", type2: "cash", gain: "loss", history: "Your wife breaks her nail!", title:"Broken Nail", happiness: -10, mode:"flat", effect: 0, target: "cash", target2: "wife_happiness", description: "Your wife breaks a nail and blames you for it for some reason!\n \n (-10 happiness)"},
    { type: "wife", type2: "cash", gain: "event", history: "You celebrate your anniversary with your wife!", title:"Anniversary Reminder", happiness: 10, mode:"flat", effect: -5000, target: "cash", target2: "wife_happiness", description: "You buy your wife a big shiny ring for her anniversary gift. \n \n (+10 happiness)"},
    { type: "wife", type2: "cash", gain: "loss", history: "You argue with your wife about something stupid.", title:"Major Argument", happiness: -10, mode:"flat", effect: 0, target: "cash", target2: "wife_happiness", description: "You argue with your wife about which came first the egg or the chicken. \n \n (-10 happiness)"},
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

const mid_game_event_objects = {
    get cash() {return cash},
    set cash(value) { cash = value},

    get restaurant_MPS() {return restaurant_MPS},
    set restaurant_MPS(value) {return restaurant_MPS = value},

    get tech_MPS() {return tech_MPS},
    set tech_MPS(value) {return tech_MPS = value},

    get happy_worker() {return happy_worker},
    set happy_worker(value) {return happy_worker = value},

    get has_given_worker_bonus() {return has_given_worker_bonus},
    set has_given_worker_bonus(value) {return has_given_worker_bonus = value},

    get got_scammed() {return got_scammed},
    set got_scammed(value) {return got_scammed = value},

    get give_to_crypto_wizard() {return give_to_crypto_wizard},
    set give_to_crypto_wizard(value) {return give_to_crypto_wizard = value},
}

const late_game_event_objects = {
    get cash() {return cash},
    set cash(value) { cash = value},

    get lemon_MPS() {return lemon_MPS; },
    set lemon_MPS(value) { lemon_MPS = value; },

    get irs_audit() {return irs_audit},
    set irs_audit(value) { irs_audit = value},

    get audit_fined() {return audit_fined},
    set audit_fined(value) { audit_fined = value}
}

const wife_game_event_objects = {
    get cash() {return cash},
    set cash(value) { cash = value},
}

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

//active boosts
let active_boots = {};

//early game variables
let is_pop_up_open = false;
let last_pick = 0;
let is_account_secure = false;
let is_aunt_birgit_dead = false;
let is_squirrel_exterminated = false;
let has_donated_to_hospital = false;
let is_dog_sold = false;
let donated_to_homeless = false;
let recieved_reward = false;

//mid game events
let happy_worker = false;
let has_given_worker_bonus = false;
let got_scammed = false;
let give_to_crypto_wizard = false;

//late game events
let irs_audit = false;
let audit_fined = false;

//wife variables
let wife_happiness = 100;
let divorced = false;
let buy_house = false;
let happy_wife = false;
let wife = 1;

//event queue
let event_queue = [];
let static_events_queue = [];

//history to load later
const history_stack = [];

//milestone variables
let one = false;
let one_thousand = false;
let one_hundred_thou = false;
let one_mil = false;
let one_hundred_mil = false;
let one_bil = false;
let one_hundred_bil = false;
let one_tril = false;
let mz_milestone = false;
let em_milestone = false;

//gambling variables
let bet_amount = 0;
let total_money_won = 0;


//~~~~~~~~~~~~~~~~~~~~~~~~ ticker for everything ~~~~~~~~~~~~~~~~~~~~~~~~
// const everything_ticker = setInterval(() => {
//     money_ticker();
//     milestone_funt();
//     update_play_funct();
// }, 1000)

// const process_next_queue = setInterval(() => {
//     if(static_events_queue.length >= 1) {
//         process_next_static_event();
//     }

//     if(event_queue.length >= 1) {
//         process_next_event();
//     }
// }, 30 * 1000);

//~~~~~~~~~~~~~~~~~~~~~~~~ save functionality ~~~~~~~~~~~~~~~~~~~~~~~~
// const save_game = setInterval(() => {
//     const session_time = Date.now() - start_time;
//     total_play_time += session_time;
//     localStorage.setItem("save_state", JSON.stringify(get_game_state()));
//     add_history("!!!GAME IS AUTO SAVING!!!", "event");
// }, 5 * 60 * 1000)

//~~~~~~~~~~~~~~~~~~~~~~~~ beginning random events ~~~~~~~~~~~~~~~~~~~~~~~~
// const pop_up_events = randomInterval(() => {
//     //early game events
//     if(!is_pop_up_open && cash <= 100000000) {
//         event_queue.push(() => {
//             execute_event(early_event_effects, early_game_event_objects, "lemon_MPS", "food_MPS", lemonade, food);
//         })
//     }

//     //mid game events
//     if(!is_pop_up_open && (cash <= 100000000000 || cash > 100000000)) {
//         event_queue.push(() => {
//             execute_event(mid_event_effects, mid_game_event_objects, "restaurant_MPS", "tech_MPS", restaurant, tech);
//         })
//     }

//     //late game events
//     if(!is_pop_up_open && cash > 100000000000) {
//         event_queue.push(() => {
//             execute_event(mid_event_effects, mid_game_event_objects, "moon_MPS", "lemon_MPS", moon, lemonade);
//         })
//     }

//     process_next_event();
//     update_all_text();
//     update_stats_UI();
// }, 2 * 60 * 1000, 5 * 60 * 1000);

//~~~~~~~~~~~~~~~~~~~~~~~~ wife events ~~~~~~~~~~~~~~~~~~~~~~~~
// const wife_pop_up_events = randomInterval(() => {
//     if(!is_pop_up_open && cash >= 100000) {
//         event_queue.push(() => {
//             execute_event(early_event_effects, early_game_event_objects, "lemon_MPS", "food_MPS", lemonade, food);
//         })
//     }

//     process_next_event();
//     update_all_text();
//     update_stats_UI();
// },  5 * 60 * 1000, 8 * 60 * 1000);

//~~~~~~~~~~~~~~~~~~~~~~~~ wife happiness ticker ~~~~~~~~~~~~~~~~~~~~~~~~
// const wife_happiness_ticker = setInterval(() => {
//     if(wife !== 0) {
//         wife_happiness -= 0.05;
//     }

//     if(wife_happiness >= 100) {
//         wife_happiness = 100;
//     }
    
//     if(wife_happiness <= 0 && wife === 1) {
//         overlay2.classList.remove("hidden");
//         overlay2.classList.add("show");
        
//         accept_btn2.classList.remove("show-btn")
//         reject_btn2.classList.remove("show-btn");
//         reject_btn2.textContent = "";
//         accept_btn2.textContent = "";

//         acknowledge_btn2.textContent = "T.T";
//         acknowledge_btn2.classList.add("show-btn");
//         is_pop_up_open = true;

//         event_title2.textContent = "Divorce";
//         event_text2.textContent = "Your wife is fed up with you and decided to devorce you! She takes half of your money and properties! And leaves you! (-50% cash)";

//         wife = 0;
//         cash = (Math.round((cash / 2) / 100) * 100);
//         lemonade = Math.floor(lemonade / 2);
//         food = Math.floor(food / 2);
//         store = Math.floor(store / 2);
//         restaurant = Math.floor(restaurant / 2);
//         apartment = Math.floor(apartment / 2);
//         real_estate = Math.floor(real_estate / 2);
//         tech = Math.floor(tech / 2);
//         hedge = Math.floor(hedge / 2);
//         mine = Math.floor(mine / 2);
//         moon = Math.floor(moon / 2);
//     }
//     update_stats_UI();
// }, 30 * 1000);

//~~~~~~~~~~~~~~~~~~~~~~~~ yearly taxes every 10 minutes ~~~~~~~~~~~~~~~~~~~~~~~~
// const taxes = setInterval(() => {
//     let owe_to_irs = "";
//     if(cash <= 100000) {
//         owe_to_irs = abbreviate(cash * 0.20);
//         cash *= 0.80;
//     } else if (cash <= 100000000) {
//         owe_to_irs = abbreviate(cash * 0.10);
//         cash *= 0.90;
//     } else if (cash <= 100000000000) {
//         owe_to_irs = abbreviate(cash * 0.05);
//         cash *= 0.95;
//     } else {
//         owe_to_irs = abbreviate(cash * 0.01);
//         cash *= 0.99;
//     }
//     static_events_queue.push(() => {
//         overlay_for_taxes(owe_to_irs);
//     })
//     process_next_static_event();
//     update_stats_UI();
// },10 * 60 * 1000);

//~~~~~~~~~~~~~~~~~~~~~~~~ add and remove gambling money ~~~~~~~~~~~~~~~~~~~~~~~~

//add money to bet
add_onek.addEventListener("click", () => {
    bet_amount += 1000;
    if(bet_amount > 100000000) {bet_amount = 100000000;}
    bet_amount_text_change();
})

add_tenk.addEventListener("click", () => {
    bet_amount += 10000;
    if(bet_amount > 100000000) {bet_amount = 100000000;}
    bet_amount_text_change();
})
add_hundredk.addEventListener("click", () => {
    bet_amount += 100000;
    if(bet_amount > 100000000) {bet_amount = 100000000;}
    bet_amount_text_change();
})
add_million.addEventListener("click", () => {
    bet_amount += 10000000;
    if(bet_amount > 100000000) {bet_amount = 100000000;}
    bet_amount_text_change();
})

//remove money from bet
remove_onek.addEventListener("click", () => {
    bet_amount -= 1000;
    if(bet_amount < 0) {bet_amount = 0;}
    bet_amount_text_change();
})
remove_tenk.addEventListener("click", () => {
    bet_amount -= 10000;
    if(bet_amount < 0) {bet_amount = 0;}
    bet_amount_text_change();
})
remove_hundredk.addEventListener("click", () => {
    bet_amount -= 100000;
    if(bet_amount < 0) {bet_amount = 0;}
    bet_amount_text_change();
})
remove_million.addEventListener("click", () => {
    bet_amount -= 10000000;
    if(bet_amount < 0) {bet_amount = 0;}
    bet_amount_text_change();
})



//~~~~~~~~~~~~~~~~~~~~~~~~ buy listeners ~~~~~~~~~~~~~~~~~~~~~~~~
buy_lemonade.addEventListener("click", () => {
    if(cash >= buy_lemonade_price) {
        lemonade++;

        add_history(`Bought a lemonade stand for $${abbreviate(buy_lemonade_price)}!`, "gain");


        if(lemonade === 50 && !fifty_lemonades) {
            fifty_lemonades = true;
            lemon_MPS *= 2;
            money_per_sec *= 2;
            static_events_queue.push(() => {
                double_money_pop_up("lemonade stands");
            })
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
        update_stats_UI();
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
            static_events_queue.push(() => {
                double_money_pop_up("food trucks");
            })
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
        update_stats_UI();
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
            static_events_queue.push(() => {
                double_money_pop_up("grocery stores");
            })

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
        update_stats_UI();
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
            static_events_queue.push(() => {
                double_money_pop_up("restaurants");
            })
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
        restaurant_mps_text.textContent = restaurant_MPS;
        update_stats_UI();
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
            static_events_queue.push(() => {
                double_money_pop_up("apartment complexes");
            })
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
        update_stats_UI();
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
            static_events_queue.push(() => {
                double_money_pop_up("real estate properties");
            })
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
        update_stats_UI();
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
            static_events_queue.push(() => {
                double_money_pop_up("tech startups");
            })
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
        update_stats_UI();
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
            static_events_queue.push(() => {
                double_money_pop_up("hedge funds");
            })
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
        update_stats_UI();
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
            static_events_queue.push(() => {
                double_money_pop_up("space mines");
            })
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
        update_stats_UI();
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
            static_events_queue.push(() => {
                double_money_pop_up("moon colonies");
            })
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
        update_stats_UI();
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
        update_stats_UI();
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
        update_stats_UI();
    }
})
sell_store.addEventListener("click", () => {
    if(store >= 1) {
        store--;

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
        update_stats_UI();
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
        update_stats_UI();
    }
})
sell_apartment.addEventListener("click", () => {
    if(apartment >= 1) {
        apartment--;

        add_history(`Sold a apartment complex for $${abbreviate(sell_apartment_price)}!`, "loss");

        const result = sell_property({
            property: apartment,
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
        update_stats_UI();
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
        update_stats_UI();
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
        update_stats_UI();
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
        update_stats_UI();
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
        update_stats_UI();
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
        money_per_sec -= moon_MPS;

        total_property--;

        moon_colonies.textContent = moon;
        buy_moon.textContent = "Buy for $" + abbreviate(buy_moon_price);
        sell_moon.textContent = "Sell for $" + abbreviate(sell_moon_price);
        update_stats_UI();
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

acknowledge_btn2.addEventListener("click", () => {
    overlay2.classList.remove("show");
    overlay2.classList.add("hidden");
    acknowledge_btn2.classList.remove("show-btn");

    accept_btn2.textContent = "";
    reject_btn2.textContent = "";

    acknowledge_btn2.onclick = null;

    is_pop_up_open = false;
})

exit_gamble.addEventListener("click", () => {
    overlay3.classList.remove("show");
    overlay3.classList.add("hidden");

    is_pop_up_open = false;
})

gamble.addEventListener("click", () => {
    overlay3.classList.remove("hidden");
    overlay3.classList.add("show");

    is_pop_up_open = true;
})

roulette_nums.addEventListener("click", (e) => {
    if (e.target.classList.contains("roulette-num")) {
        const chosenNumber = e.target.dataset.number;

        console.log("Player chose:", chosenNumber);
    }
});

//~~~~~~~~~~~~~~~~~~~~~~~~ generate money btn ~~~~~~~~~~~~~~~~~~~~~~~~
money_button.addEventListener("click", () => {
    cash += 1;
    money_text.textContent = abbreviate(cash);
    create_coin();
});

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

function update_stats_UI () {
    money_per_sec_text.textContent = abbreviate(money_per_sec);
    money_text.textContent = abbreviate(cash);
    net_worth_text.textContent = abbreviate(net_worth);
    property_text.textContent = abbreviate(total_property);
    total_minutes_played_text.textContent = get_total_minutes(total_play_time); 
    wife_text.textContent = Math.round(wife_happiness * 100) / 100; 
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

        happy_worker,
        has_given_worker_bonus,
        got_scammed,
        give_to_crypto_wizard,

        irs_audit,
        audit_fined,

        one,
        one_thousand,
        one_hundred_thou,
        one_mil,
        one_hundred_mil,
        one_bil,
        one_hundred_bil,
        one_tril,
        mz_milestone,
        em_milestone,

        history_stack,
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

    happy_worker = data.happy_worker,
    has_given_worker_bonus = data.has_given_worker_bonus,
    got_scammed = data.got_scammed,
    give_to_crypto_wizard = data.give_to_crypto_wizard,

    irs_audit = data.irs_audit,
    audit_fined = data.irs_audit,

    history_stack = data.history_stack,

    load_history(history_stack);
    update_stats_UI();
    update_all_text();
}

function overlay_for_taxes(tax_amount) {
    overlay2.classList.remove("hidden");
    overlay2.classList.add("show");
    accept_btn2.classList.remove("show-btn")
    reject_btn2.classList.remove("show-btn");
    acknowledge_btn2.classList.add("show-btn");
    event_title2.textContent = "Tax Season!";
    event_text2.textContent = `It's time for yearly taxes, you owe ${tax_amount} dollars to the IRS!`

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

function show_choice_events(event, checker, game_object) {
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
            game_object[event.checker] = event.accept.accepted;
            apply_event_effect(event.accept, game_object);
            add_history(event.accept.history, event.accept.gain);
            close_pop_up();
            if(event.has_follow_up && !game_object[event.good_follow_up.checker]) {
                setTimeout(() => {
                    const follow_up = event.good_follow_up;

                    game_object[follow_up.checker] = follow_up.accepted;

                    if(follow_up.type === "boost") {
                        active_boots[follow_up.target] = true;

                        let original_value = game_object[follow_up.target];

                        apply_event_effect(follow_up, game_object);

                        setTimeout(() => {
                            active_boots[follow_up.target] = false;
                            game_object[follow_up.target] = original_value;
                        }, follow_up.duration);
                    } else {
                        apply_event_effect(event.good_follow_up, game_object);
                    }
                    pop_up_acknowledge(follow_up);
                    add_history(event.good_follow_up.history, event.good_follow_up.gain);
                }, event.follow_up_delay);
            }
        }

        reject_btn.onclick = () => {
            game_object[event.checker] = event.reject.accepted;
            add_history(event.reject.history, event.reject.gain);
            apply_event_effect(event.reject, game_object);
            close_pop_up();
            if(event.has_follow_up && !game_object[event.bad_follow_up.checker]) {
                setTimeout(() => {
                    const follow_up = event.bad_follow_up;

                    game_object[follow_up.checker] = follow_up.accepted;

                    if(follow_up.type === "boost") {
                        active_boots[follow_up.target] = true;

                        let original_value = game_object[follow_up.target];

                        apply_event_effect(follow_up, game_object);

                        setTimeout(() => {
                            active_boots[follow_up.target] = false;
                            game_object[follow_up.target] = original_value;
                        }, follow_up.duration);
                    } else {
                        apply_event_effect(event.bad_follow_up, game_object);
                    }
                    pop_up_acknowledge(follow_up);
                    add_history(event.bad_follow_up.history, event.bad_follow_up.gain);
                }, event.follow_up_delay);
            }
        }
    }
}

function execute_event(game_effect, game_object, boost1, boost2, boostprop1, boostprop2) {
    let attempts = 0;
    let random_event;
    let event;

    do {
        random_event = Math.floor(Math.random() * game_effect.length);
        event = game_effect[random_event];
        attempts++;
        if (attempts >= 50) return;
    } while (
        attempts < 50 && (
        random_event === last_pick ||
        (event.type === "boost" && active_boots[event.target]) ||
        (event.checker && game_object[event.checker]) ||
        (event.target === boost1 && boostprop1 < 1) ||
        (event.target === boost2 && boostprop2 < 1) ||
        is_pop_up_open
        )
    );

    if (!event) return;

    last_pick = random_event;
    add_history(event.history, event.gain);

    if(event.type === "boost") {
        active_boots[event.target] = true;

        let original_value = game_object[event.target];

        apply_event_effect(event, game_object);

        setTimeout(() => {
            active_boots[event.target] = false;
            game_object[event.target] = original_value;
        }, event.duration);
        pop_up_acknowledge(event, event.gain);
    }
    
    if(event.type === "cash") {
        apply_event_effect(event, game_object);
        pop_up_acknowledge(event, event.gain);
    }
    
    if(event.type === "choice") {
        show_choice_events(event, game_object[event.checker], game_object);
    }

    if(event.type === "wife") {
        game_object[event.target2] += event.happiness;
        apply_event_effect(event, game_object);
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
        game_object[event.target] += event.effect;
    } else if (event.mode === "percent") {
        game_object[event.target] *= (1 + event.effect);
    }
    update_stats_UI();
}

function double_money_pop_up(property) {
    const special_properties = ["tech startups", "hedge funds", "space mines", "moon colonies"];
    overlay2.classList.remove("hidden");
    overlay2.classList.add("show");
    special_properties.includes(property)
        ? event_text2.textContent = `Congratulations on buying 25 ${property}! You're ${property} now generate 2x more money per second!`
        : event_text2.textContent = `Congratulations on buying 50 ${property}! You're ${property} now generate 2x more money per second!`;
    acknowledge_btn2.textContent = "Awesome!";
    accept_btn2.classList.remove("show-btn");
    reject_btn2.classList.remove("show-btn");
    acknowledge_btn2.classList.add("show-btn");
}

function add_history(text, style) {
    history_stack.push({h_text: text, h_style: style, t_play: total_play_time});
    const li = document.createElement("li");
    li.textContent = text + ` \n \n(Total time played: ${get_total_minutes(total_play_time)} Minutes)`;
    li.classList.add(style)
    history.appendChild(li);
}

function load_history(history_stack) {
    for (const his_obj of history_stack) {
        const li = document.createElement("li");
        li.textContent = his_obj.h_text;
        li.classList.add(his_obj.h_style);
        history.appendChild(li);
    }
}

function randomInterval(fn, min, max) {
    const delay = Math.random() * (max - min) + min;

    setTimeout(() => {
        fn();
        randomInterval(fn, min, max);
    }, delay);
}

function process_next_event() {
    if(is_pop_up_open) return;
    if (event_queue.length === 0) return;

    const next_event = event_queue.shift();
    next_event();
}

function process_next_static_event() {
    if(is_pop_up_open) return;
    if(static_events_queue.length === 0) return;

    const next_static_event = static_events_queue.shift();
    next_static_event();
}

function milestone_pop_up(text_title, text_desc) {
    overlay2.classList.remove("hidden");
    overlay2.classList.add("show");
    
    accept_btn2.classList.remove("show-btn")
    reject_btn2.classList.remove("show-btn");
    reject_btn2.textContent = "";
    accept_btn2.textContent = "";

    acknowledge_btn2.classList.add("show-btn");
    event_title2.textContent = text_title;
    event_text2.textContent = text_desc
    is_pop_up_open = true;
}

function tick_source(count, mps, img, img_id) {
    if (count > 0) {
        const earned = mps * count;

        update_img(count, img, img_id);

        return earned;
    } else {
        update_img(count, img, img_id);
        return 0;
    } 
}

function money_ticker() {
    let tick_income = 0;
    tick_income += tick_source(lemonade, lemon_MPS, lemonade_img, "lemonade-img");
    tick_income += tick_source(food, food_MPS, food_img, "food-img");
    tick_income += tick_source(store, store_MPS, store_img, "store-img");
    tick_income += tick_source(restaurant, restaurant_MPS, restaurant_img, "restaurant-img")
    tick_income += tick_source(apartment, apartment_MPS, apartment_img, "apartment-img");
    tick_income += tick_source(real_estate, real_estate_MPS, real_estate_img, "real-estate-img");
    tick_income += tick_source(tech, tech_MPS, tech_start_img, "tech-img");
    tick_income += tick_source(hedge, hedge_MPS, hedge_fund_img, "hedge-fund-img");
    tick_income += tick_source(mine, mine_MPS, left_bg, "mine-bg");
    tick_income += tick_source(moon, moon_MPS, left_bg, "moon-bg");

    update_bg();

    if(tick_income > 0) {
        cash += tick_income;
        update_stats_UI()
    }

    for(let i = 0; i < tick_income; i++) {
        if(!check_coin_num()) break;
        auto_gen_coin();
    }
}

function milestone_funt() {
        if(cash >= 1 && !one) {
        one = true;
        static_events_queue.push(() => {
            milestone_pop_up("Beginning!", "Congratulatons on making your first dollar! You're slowly but surely on the way to become a trillionaire!");
        })
    } else if (cash >= 1000 && !one_thousand) {
        one_thousand = true;
        static_events_queue.push(() => {
            milestone_pop_up("First Thousand!", "Congratulatons on collecting your first thousand dollars in cash! Go buy yourself something nice!");
        })
    } else if (cash >= 100000 && !one_hundred_thou) {
        one_hundred_thou = true;
        static_events_queue.push(() => {
            milestone_pop_up("Big Bucks!", "You just collected 100K in cash! Go ahead and go on a spending spree!");
        })
    } else if (cash >= 1000000 && !one_mil) {
        one_mil = true;
        static_events_queue.push(() => {
            milestone_pop_up("1 Million!", "Congrats on 1 Million dollars in cash, drinks are on you tonight!");
        })
    } else if (cash >= 100000000 && !one_hundred_mil) {
        one_hundred_mil = true;
        static_events_queue.push(() => {
            milestone_pop_up("100 MILLION!", "You accumulated one hundred million dollars! Give yourself a pat on the back!");
        })
    } else if (cash >= 1000000000 && !one_bil) {
        one_bil = true;
        static_events_queue.push(() => {
            milestone_pop_up("Forbes Youngest Billionaire", "Forbes lists you as the youngest billionaire in history!");
        })
    } else if (cash >= 100000000000 && !one_hundred_bil) {
        one_hundred_bil = true;
        static_events_queue.push(() => {
            milestone_pop_up("One Hundred Billion!", "Congratulations on accumulating 100 Billion dollars! You are now the 12th richest person in the world!");
        })
    } else if (cash + net_worth >= 220000000000 && mz_milestone) {
        mz_milestone = true;
        static_events_queue.push(() => {
            milestone_pop_up("Mark Zuckerberg", "You now have a total net worth more than Mark Zuckerberg!");
        })
    } else if (cash + net_worth >= 800000000000 && em_milestone) {
        em_milestone = true;
        static_events_queue.push(() => {
            milestone_pop_up("Elon Musk", "You now are now worth more than Elon Musk, you have more money than you know what to do with.");
        })
    } else if (cash >= 1000000000000 && !one_tril) {
        one_tril = true;
        static_events_queue.push(() => {
            milestone_pop_up("Trillionaire!", "You are now the first trillionaire in the world! You decided to celebrate by jumping in a pool of money!");
        })
    }
}

function update_play_funct() {
    total_minutes_played_text.textContent = get_total_minutes(current_total);
}

function load_buttons() {
    for(let i = 36; i > -1; i--) {
        const btn = document.createElement("button");
        btn.textContent = i;
        if(i === 0) {
            btn.classList.add("roulette-num-green");
        } else if(i % 2 === 0) {
            btn.classList.add("roulette-num-black");

        } else if (i % 2 === 1) {
            btn.classList.add("roulette-num-red");
        }
        btn.dataset.Number = i;
        roulette_nums.appendChild(btn);
    }

}

function bet_amount_text_change() {
    bet_amount_text.textContent = bet_amount;
}
load_buttons();

// load_game();

animate();