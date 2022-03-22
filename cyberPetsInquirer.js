const inquirer = require("inquirer");

// let { Characters,  Dog, Snake, Cat } = require("./cyberPets")
let { Dog, Snake, Cat } = require("./cyberPets")
 
let choices
let pet

const start = async () => {
    let answers = await inquirer.prompt([ {
        type: "list",
        name: "type",
        message: "What's your favorite animal?",
        choices: ["Cat", "Dog", "Snake"],
    },
    {
        type:"input",
        name: "name",
        message: "What is your pets name?"
    },

])
console.log(choices)

    if(start.type === "Cat") {
    pet = new Cat(answers.name, 2021)
    choices = "Cat"
}  else if (start.type === "Dog") {
    pet = new Dog(answers.name, 2021)
} else {
    pet = new Snake(answers.name, 2021)
}
loopingQs()
}
 let catQs = [
     {
         type: "rawlist",
         name: "action",
         message: `What would you like to do?`,
         choices: ["Feed", "Drink", "Play", "Exercise"],
     },
 ]
 let dogQs = [
     {
         type: "rawlist",
         name: "action",
         message: `What would you like to do?`,
         choices: ["Feed", "Drink", "Play", "Exercise"],
     },
 ]
 let snakeQs = [
     {
         type: "rawlist",
         name: "action",
         message: `What would you like to do?`,
         choices: ["Feed", "Drink", "Play", "Exercise"],
     }
 ]

 let inquiererQs

 const loopingQs = async () => {
     if (choices === "Cat") {
         inquiererQs = catQs
     } else if (choices === "Dog") {
         inquiererQs = dogQs
     } else {
         inquiererQs = snakeQs
     }
     let answers = await inquirer.prompt(inquiererQs)
     
     
     console.log(choices)

     if (answers.action === "Feed") {
         pet.feed()
     } else if (answers.action === "Drink") {
         pet.drink()
     } else if (answers.action === "Play") {
         pet.play()
     } else if (answers.action === "Exercise") {
         pet.exercise()
     }
     loopingQs()
 }
 start()


// } else if (start.action === "Feed") {
//     pet.feed()
// } else if (start.action === "Drink") {
//     pet.drink()
// } else if (start.action === "Play") {
//     pet.play()
// } else if (start.action === "Exercise") {
//     pet.exercise()
// }
