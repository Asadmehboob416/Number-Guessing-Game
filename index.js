#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Wellcome to Number Guess Game");
const answer = await inquirer.prompt([
    {
        name: "userGuessnumber",
        type: "number",
        message: "Please Guess a Number between [1-6] :- ",
    },
]);
//conditionall statement
if (answer.userGuessnumber === randomNumber) {
    console.log("Congratulatios! You guessed Number.");
}
else {
    console.log("You Guessed Wrong Number");
}
