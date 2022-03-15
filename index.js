const prompt = require('prompt-sync')({ sigint: true });
const colors = require('colors');
const BullsAndCows = require("./bullsAndCows");


const game = new BullsAndCows();

console.log(`\n

██████╗ ██╗   ██╗██╗     ██╗     ███████╗     █████╗ ███╗   ██╗██████╗      ██████╗ ██████╗ ██╗    ██╗███████╗
██╔══██╗██║   ██║██║     ██║     ██╔════╝    ██╔══██╗████╗  ██║██╔══██╗    ██╔════╝██╔═══██╗██║    ██║██╔════╝
██████╔╝██║   ██║██║     ██║     ███████╗    ███████║██╔██╗ ██║██║  ██║    ██║     ██║   ██║██║ █╗ ██║███████╗
██╔══██╗██║   ██║██║     ██║     ╚════██║    ██╔══██║██║╚██╗██║██║  ██║    ██║     ██║   ██║██║███╗██║╚════██║
██████╔╝╚██████╔╝███████╗███████╗███████║    ██║  ██║██║ ╚████║██████╔╝    ╚██████╗╚██████╔╝╚███╔███╔╝███████║
╚═════╝  ╚═════╝ ╚══════╝╚══════╝╚══════╝    ╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝      ╚═════╝ ╚═════╝  ╚══╝╚══╝ ╚══════╝
                                                                                                              
 \n`.brightRed);

// Getting user's name & showing a welcome message
let user = prompt('What\'s your name? (Don\'t feel like sharing? Just press enter to skip) ') || "Stranger";
console.log(`\nWelcome to the Bulls & Cows game, ${user}!\n`.bold.brightRed);

// Showing game rules
console.log(`Game Rules:`.bold.underline);
console.log(`The number to be guessed must be a 4 digit number, consisting only of unique digits from 0 - 9.`);
console.log(`After each guess, you'll get a no-luck message if no matching digits at all or a hint of how many bulls and cows there were:\n
- Bulls for matching digits in correct positions.\n
- Cows for matching digits in wrong positions.\n`);
console.log(`Difficulty level:`.bold.underline);

// Getting level choice
let level = prompt(`Choose 'easy' (no limit) / 'hard' (limited to 7 attempts): `);
while(level.toLowerCase() !== "easy" && level.toLowerCase() !== "hard"){
    level = prompt(`Choose 'easy' (no limit) / 'hard' (limited to 7 attempts): `);
    }

console.log("\n---------------------------------------------------------------\n".brightRed);

// Running the game
const runGame = function(){
    guess = prompt('Enter your 4 digits guess: ');
    let isValid = game.validateInput(guess);
    while(!isValid){
    guess = prompt('Re-enter a valid guess: ');
    isValid = game.validateInput(guess);
    }
    game.compare(guess);
    console.log(`\n${user}, ${game.getHints()}\n`.bold.inverse);
}

runGame();

let noLimit = true;

while(game.hints.bull !== 4 && noLimit){
    if(level === "hard" && game.attempts === 7)
        noLimit = false;
    else
        runGame(); 
}

if(game.hints.bull === 4)
console.log(`Congrats ${user}!! After ${game.attempts} attempts you successfully guessed the right number!`.bold.brightRed);
else
console.log(`Sorry ${user}, you've lost. The number was ${game.secretDigits}. Better luck next time!`.bold.brightRed);





