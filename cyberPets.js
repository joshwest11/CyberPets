const { throws } = require("assert");
const { timeStamp } = require("console");

class Characters {
    constructor(name, dob) {
        this._name = name;
        this._dob = dob;
    }
    get name() {
        return this._name;
    }
    get dob() {
        let date = new Date();
        let age = date.getFullyYear() - this._dob;
        return age;
    }
    get hungerLevel() {
        return this._hungerLevel;
    }
    get thirstLevel() {
        return this._thirstLevel;
    }
    get healthLevel() {
        return this._healthLevel;
    }
    get happinessLevel() {
        return this._happinessLevel;
    }
}
class Cat extends Characters {
    constructor(name, dob){
        super (name, dob);
    }
    healthLevel = 75;
    thirstLevel = 75;
    hungerLevel = 50;
    happinessLevel = 50;
    feed() {
        if (this.hungerLevel <= 0) {
            console.log(`${this.name} is very well fed, perhaps consider some exercise?`)
        } else if(this.hungerLevel >= 75) {
            this.hungerLevel -= 5;
            this.thirstLevel += 10;
            this.happinessLevel -= 35;
            this.healthLevel -= 35;
            console.log(`${this.name} is looking very thin! Please take care of your pet! ${this.name}'s hunger levels of ${this.hungerLevel} has reduced their happiness levels to ${this.happinessLevel} and health levels to ${this.healthLevel} `);
        } else if (this.hungerLevel >= 50) {
            this.hungerLevel -= 20;
            this.thirstLevel += 10;
            this.happinessLevel -= 35;
            this.healthLevel -= 35;
            console.log(`${this.name} is still hungry! Perhaps consider feeding a bit more? Hunger levels reduced to ${this.hungerLevel}, thirst levels increased to ${this.thirstLevel} and happiness levels have increased to ${this.happinessLevel}`);
        } else {
            this.hungerLevel -= 25;
            this.thirstLevel += 5;
            this.happinessLevel += 10;
            console.log(`${this.name} is well fed! Perhaps consider some exercise to burn off some of that energy? Hunger levels have reduced to ${this.hungerLevel}, thirst level increased to ${this.thirstLevel} and happiness levels have increased to ${this.happinessLevel}.`)
        }
    }
    drink() {
        if(this.thirstLevel >= 75) {
            this.thirstLevel -= 10;
            this.hungerLevel +=10;
            this.happinessLevel -= 35;
            this.healthLevel -= 35;
            console.log(`${this.name}'s thirst levels are still ${this.thirstLevel}, please always provide a source of water! ${this.name}'s happiness levels have decreased to ${this.happinessLevel} and health levels have decreased to ${this.healthLevel}. ${this.name} drank so much they filled themselves up, missing lunch and increasing hunger levels to ${this.hungerLevel}`);
        } else if (this.thirstLevel >= 50) {
            this.thirstLevel -= 15;
            this.hungerLevel += 5;
            this.happinessLevel += 5;
            console.log(`${this.name} is feeling refreshed, although you should consider making liquids more available! Thirst level reduced to ${this.thirstLevel}, happiness level has increased to ${this.happinessLevel} and hunger levels have increased to ${this.hungerLevel}`);
        } else {
            this.thirstLevel -= 17;
            this.hungerLevel += 5;
            this.happinessLevel += 5;
            console.log(`${this.name} is feeling really refreshed! Thirst levels have reduced to ${this.thirstLevel}, happiness level has increased to ${this.happinessLevel} and hunger level has increased to ${this.hungerLevel}. Perhaps ${this.name} would like to play?`);
        }
    }
    play() {
        if (this.hungerLevel >= 75 || this.thirstLevel >= 75) {
            console.log(`Your pets hunger level is ${this.hungerLevel} and thirst is ${this.thirstLevel} - Your pet is too weak to play!`);
        } else if (this.happinessLevel <= 25) {
            this.happinessLevel += 10;
            this.healthLevel += 10
            this.hungerLevel += 10;
            this.thirstLevel += 5;
            console.log(`${this.name} really enjoyed playing, however is growing quite hungry! Hunger level increased to ${this.hungerLevel}, thirst levels increased to ${this.thirstLevel}. `);
        } else if (this.happinessLevel >= 50) {
            this.happinessLevel += 15;
            this.healthLevel += 10;
            this.hungerLevel += 10;
            this.thirstLevel += 5;
            console.log(`${this.name} had a great time! You're forming a great bond. All of this playing has increased ${this.name}s happiness levels to ${this.happinessLevel} and increased hunger levels to ${this.hungerLevel} as well as thirst levels to ${this.thirstLevel}`);
        } else {
            this.happinessLevel += 15;
            this.healthLevel += 10;
            this.hungerLevel += 10;
            this.thirstLevel += 5;
            console.log(`${this.name} couldn't be happier! You're an amazing owner and ${this.name}'s happiness levels have increased to ${this.happinessLevel} and health levels have increased to ${this.healthLevel}. Hunger levels have increased to ${this.hungerLevel} and thirst levels have increased to ${this.thirstLevel}.`);
        }
    }
    exercise() {
        if (this.hungerLevel >= 75 || this.thirstLevel >= 75) {
            console.log(`${this.name} is too weak to exercise! Please feed/provide water!`);
        } else if (this.hungerLevel >= 50 || this.thirstLevel >= 50) {
            this.healthLevel += 10;
            this.hungerLevel += 5;
            this.thirstLevel += 2;
            this.happinessLevel += 10;
            console.log(`${this.name} had a great time! Your happiness level has increased to ${this.happinessLevel} and grew healthier to ${this.healthLevel} health points!`);
        } else { 
           if (this.hungerLevel <= 25 && this.thirstLevel <= 25 && this.healthLevel >= 50) 
            this.happinessLevel += 25;
            console.log(`${this.name} is growing very attached to you. You're a great owner, ${this.name}s happiness levels have increased to ${this.happinessLevel}`);
        }
    }

}
class Dog extends Characters {
    constructor(name, dob){
        super (name, dob);
    }
    healthLevel = 75;
    thirstLevel = 75;
    hungerLevel = 50;
    happinessLevel = 50;
    feed() {
        if(this.hungerLevel >= 75){
            this.hungerLevel -= 5;
            this.thirstLevel += 10;
            this.happinessLevel -= 45;
            this.healthLevel -= 45;
            console.log(`${this.name} is looking very thin! Please take care of your pet! ${this.name}'s hunger levels of ${this.hungerLevel} has reduced their happiness levels to ${this.happinessLevel} and health levels to ${this.healthLevel} `);
        } else if (this.hungerLevel >= 50) {
            this.hungerLevel -= 20;
            this.thirstLevel += 10;
            this.happinessLevel += 5;
            console.log(`${this.name} is still hungry! Perhaps consider feeding a bit more? Hunger levels reduced to ${this.hungerLevel}, thirst levels increased to ${this.thirstLevel} and happiness levels have increased to ${this.happinessLevel}`);
        } else {
            this.hungerLevel -= 25;
            this.thirstLevel += 5;
            this.happinessLevel += 10;
            console.log(`${this.name} is well fed! Perhaps consider some exercise to burn off some of that energy? Hunger levels have reduced to ${this.hungerLevel}, thirst level increased to ${this.thirstLevel} and happiness levels have increased to ${this.happinessLevel}.`)
        }
    }
    drink() {
        if(this.thirstLevel >= 75) {
            this.thirstLevel -= 10;
            this.hungerLevel +=10;
            this.happinessLevel -= 25;
            this.healthLevel -= 25;
            console.log(`${this.name}'s thirst levels are still ${this.thirstLevel}, please always provide a source of water! ${this.name}'s happiness levels have decreased to ${this.happinessLevel} and health levels have decreased to ${this.healthLevel}. ${this.name} drank so much they filled themselves up, missing lunch and increasing hunger levels to ${this.hungerLevel}`);
        } else if (this.thirstLevel >= 50) {
            this.thirstLevel -= 15;
            this.hungerLevel += 5;
            this.happinessLevel += 5;
            console.log(`${this.name} is feeling refreshed, although you should consider making liquids more available! Thirst level reduced to ${this.thirstLevel}, happiness level has increased to ${this.happinessLevel} and hunger levels have increased to ${this.hungerLevel}`);
        } else {
            this.thirstLevel -= 17;
            this.hungerLevel += 5;
            this.happinessLevel += 5;
            console.log(`${this.name} is feeling really refreshed! Thirst levels have reduced to ${this.thirstLevel}, happiness level has increased to ${this.happinessLevel} and hunger level has increased to ${this.hungerLevel}. Perhaps ${this.name} would like to play?`);
        }
    }
    play() {
        if (this.hungerLevel >= 75 || this.thirstLevel >= 75) {
            console.log(`Your pets hunger level is ${this.hungerLevel} and thirst is ${this.thirstLevel} - Your pet is too weak to play!`);
        } else if (this.happinessLevel <= 25) {
            this.happinessLevel += 15;
            this.healthLevel += 10
            this.hungerLevel += 10;
            this.thirstLevel += 5;
            console.log(`${this.name} really enjoyed playing, however is growing quite hungry! Hunger level increased to ${this.hungerLevel}, thirst levels increased to ${this.thirstLevel}. `);
        } else if (this.happinessLevel >= 50) {
            this.happinessLevel += 20;
            this.healthLevel += 10;
            this.hungerLevel += 10;
            this.thirstLevel += 5;
            console.log(`${this.name} had a great time! You're forming a great bond. All of this playing has increased ${this.name}s happiness levels to ${this.happinessLevel} and increased hunger levels to ${this.hungerLevel} as well as thirst levels to ${this.thirstLevel}`);
        } else {
            this.happinessLevel += 25;
            this.healthLevel += 10;
            this.hungerLevel += 10;
            this.thirstLevel += 5;
            console.log(`${this.name} couldn't be happier! You're an amazing owner and ${this.name}'s happiness levels have increased to ${this.happinessLevel} and health levels have increased to ${this.healthLevel}. Hunger levels have increased to ${this.hungerLevel} and thirst levels have increased to ${this.thirstLevel}.`);
        }
    }
    exercise() {
        if (this.hungerLevel >= 75 || this.thirstLevel >= 75) {
            console.log(`${this.name} is too weak to exercise! Please feed/provide water!`);
        } else if (this.hungerLevel >= 50 || this.thirstLevel >= 50) {
            this.healthLevel += 10;
            this.hungerLevel += 5;
            this.thirstLevel += 2;
            this.happinessLevel += 10;
            console.log(`${this.name} had a great time! Your happiness level has increased to ${this.happinessLevel} and grew healthier to ${this.healthLevel} health points!`);
        } else { 
           if (this.hungerLevel <= 25 && this.thirstLevel <= 25 && this.healthLevel >= 50) 
            this.happinessLevel += 25;
            console.log(`${this.name} is growing very attached to you. You're a great owner, ${this.name}s happiness levels have increased to ${this.happinessLevel}`);
        }
    }

}
class Snake extends Characters {
    constructor(name, dob){
        super (name, dob);
    }
    healthLevel = 75;
    thirstLevel = 75;
    hungerLevel = 50;
    happinessLevel = 50;
    feed() {
        if(this.hungerLevel >= 75){
            this.hungerLevel -= 5;
            this.thirstLevel += 10;
            this.happinessLevel -= 45;
            this.healthLevel -= 45;
            console.log(`${this.name} is looking very thin! Please take care of your pet! ${this.name}'s hunger levels of ${this.hungerLevel} has reduced their happiness levels to ${this.happinessLevel} and health levels to ${this.healthLevel} `);
        } else if (this.hungerLevel >= 50) {
            this.hungerLevel -= 20;
            this.thirstLevel += 10;
            this.happinessLevel += 5;
            console.log(`${this.name} is still hungry! Perhaps consider feeding a bit more? Hunger levels reduced to ${this.hungerLevel}, thirst levels increased to ${this.thirstLevel} and happiness levels have increased to ${this.happinessLevel}`);
        } else {
            this.hungerLevel -= 25;
            this.thirstLevel += 5;
            this.happinessLevel += 10;
            console.log(`${this.name} is well fed! Perhaps consider some exercise to burn off some of that energy? Hunger levels have reduced to ${this.hungerLevel}, thirst level increased to ${this.thirstLevel} and happiness levels have increased to ${this.happinessLevel}.`)
        }
    }
    drink() {
        if(this.thirstLevel >= 75) {
            this.thirstLevel -= 10;
            this.hungerLevel +=10;
            this.happinessLevel -= 45;
            this.healthLevel -= 45;
            console.log(`${this.name}'s thirst levels are still ${this.thirstLevel}, please always provide a source of water! ${this.name}'s happiness levels have decreased to ${this.happinessLevel} and health levels have decreased to ${this.healthLevel}. ${this.name} drank so much they filled themselves up, missing lunch and increasing hunger levels to ${this.hungerLevel}`);
        } else if (this.thirstLevel >= 50) {
            this.thirstLevel -= 15;
            this.hungerLevel += 5;
            this.happinessLevel += 5;
            console.log(`${this.name} is feeling refreshed, although you should consider making liquids more available! Thirst level reduced to ${this.thirstLevel}, happiness level has increased to ${this.happinessLevel} and hunger levels have increased to ${this.hungerLevel}`);
        } else {
            this.thirstLevel -= 17;
            this.hungerLevel += 5;
            this.happinessLevel += 5;
            console.log(`${this.name} is feeling really refreshed! Thirst levels have reduced to ${this.thirstLevel}, happiness level has increased to ${this.happinessLevel} and hunger level has increased to ${this.hungerLevel}. Perhaps ${this.name} would like to play?`);
        }
    }
    play() {
        if (this.hungerLevel >= 75 || this.thirstLevel >= 75) {
            console.log(`Your pets hunger level is ${this.hungerLevel} and thirst is ${this.thirstLevel} - Your pet is too weak to play!`);
        } else if (this.happinessLevel <= 25) {
            this.happinessLevel += 15;
            this.healthLevel += 10
            this.hungerLevel += 10;
            this.thirstLevel += 5;
            console.log(`${this.name} really enjoyed playing, however is growing quite hungry! Hunger level increased to ${this.hungerLevel}, thirst levels increased to ${this.thirstLevel}. `);
        } else if (this.happinessLevel >= 50) {
            this.happinessLevel += 20;
            this.healthLevel += 10;
            this.hungerLevel += 10;
            this.thirstLevel += 5;
            console.log(`${this.name} had a great time! You're forming a great bond. All of this playing has increased ${this.name}s happiness levels to ${this.happinessLevel} and increased hunger levels to ${this.hungerLevel} as well as thirst levels to ${this.thirstLevel}`);
        } else {
            this.happinessLevel += 25;
            this.healthLevel += 10;
            this.hungerLevel += 10;
            this.thirstLevel += 5;
            console.log(`${this.name} couldn't be happier! You're an amazing owner and ${this.name}'s happiness levels have increased to ${this.happinessLevel} and health levels have increased to ${this.healthLevel}. Hunger levels have increased to ${this.hungerLevel} and thirst levels have increased to ${this.thirstLevel}.`);
        }
    }
    exercise() {
        if (this.hungerLevel >= 75 || this.thirstLevel >= 75) {
            console.log(`${this.name} is too weak to exercise! Please feed/provide water!`);
        } else if (this.hungerLevel >= 50 || this.thirstLevel >= 50) {
            this.healthLevel += 10;
            this.hungerLevel += 5;
            this.thirstLevel += 2;
            this.happinessLevel += 10;
            console.log(`${this.name} had a great time! Your happiness level has increased to ${this.happinessLevel} and grew healthier to ${this.healthLevel} health points!`);
        } else { 
           if (this.hungerLevel <= 25 && this.thirstLevel <= 25 && this.healthLevel >= 50) 
            this.happinessLevel += 25;
            console.log(`${this.name} is growing very attached to you. You're a great owner, ${this.name}s happiness levels have increased to ${this.happinessLevel}`);
        }
    }

}


module.exports = {
    Characters,
    Cat,
    Dog,
    Snake,
    
};

// const myCat = new Cat('Adam Lemdani', '10.15.1994');
// const cat2 = new Cat('Elizabeth', '19/09/1979');
// const myDog = new Dog ('Theo', '20/03/2015');
const mySnake = new Snake ('Sydny', '10/10/2021');

// myDog.feed();
// myDog.drink();
// myDog.play();
// console.log(myDog)


// mySnake.play();
// mySnake.feed();
// mySnake.exercise();
// console.log(mySnake);

// cat2.feed(); 
// cat2.drink();
// cat2.play();

// myCat.drink();

// myCat.drink();
// myCat.drink();
// myCat.feed();
// myCat.play();

// console.log(myCat);
// console.log(cat2);

// class Characters {
//     constructor(hp, stamina, items, abilities) {
//         this._hp = hp;
//             takeDamage(amount) {
//                 this._hp -= amount;
//             }
//         this._stamina = stamina;
//         this._items = items;
//         this._abilities = abilities;
//             dealDamage(ability) {

//             }
//     }
    
//     get hp() {
//         return this._hp;
//     }
//     get stamina() {
//         return this._stamina;
//     }
//     get items() {
//         return this._items;
//     }
//     get abilities() {
//         return this._abilities;
//     }
// }