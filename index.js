#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random mumber . Done
// 2) user input for guessing number . Done
// 3) compare user input with computer generated number and show the result . Done
const randomNumber = Math.floor(Math.random() * 20 + 1);
const answers = await inquirer.prompt([{
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number between 1-20: ",
    },
]);
// console.log(answers);
if (answers.userGuessNumber === randomNumber) {
    console.log("Congratulations! you guess the right number.");
}
else {
    console.log("You guess the wrong number");
}
