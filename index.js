#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        message: "Guess a Number:",
        name: "userGuessNumber",
        type: "number",
    }
]);
if ((answers.userGuessNumber === randomNumber)) {
    console.log("Congratulations! you guessed a right number ");
}
else {
    console.log("Oops! you guessed a wrong number");
}
