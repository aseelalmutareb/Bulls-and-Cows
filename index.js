const prompt = require('prompt-sync')({ sigint: true });
const BullsAndCows = require("./bullsAndCows");


const game = new BullsAndCows();
let guess = prompt('Enter your 4 digits guess: ');

while(!game.validateInput(guess)){
    guess = prompt('Re-enter a valid guess: ');
    game.validateInput(guess);
}

    console.log(game.compare(guess), game.secretDigits);



    

console.log(String.fromCodePoint(0x1F404, 0x1F402));

