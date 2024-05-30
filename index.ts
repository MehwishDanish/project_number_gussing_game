
import inquirer from "inquirer";
console.log("wellcom to codewithmehwish -cli number guessing game");

const randomNumber = Math.floor(Math.random()-3+1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type:"number",
        message:"Enter your guess number(Number Limit from 1 to 5):",
        
       },
]);
if(answer.userGuessedNumber === randomNumber){
    console.log("congratution ! you guess a correct number.");

}
else{
    console.log("sorry, you guess a wrong number");

}