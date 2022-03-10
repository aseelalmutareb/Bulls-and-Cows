const prompt = require('prompt-sync')({ sigint: true });
const BullsAndCows = require("./bullsAndCows");


const game = new BullsAndCows();
let guess = "";


const runGame = function(){
    guess = prompt('Enter your 4 digits guess: ');
    let isValid = game.validateInput(guess);
    while(!isValid){
    guess = prompt('Re-enter a valid guess: ');
    isValid = game.validateInput(guess);
    }
    game.compare(guess);
    console.log(game.getHints());
    console.log(game.secretDigits);
}

runGame();


while(game.hints.bull !== 4){
runGame(); }

console.log("Congrats!! Your guess is correct!");





