class BullsAndCows{
    constructor(){
        this.secretDigits = this.generateSecretDigits();
        this.hints = {};
        this.attempts = 0;
        this.noLuckMessages = [
            "sorry, no luck this time :( ",
            "BINGO!\nJust kidding - WRONG!",
            "you might as well give up now!",
            "you really aren't very good at this, are you?"
        ];
    }

    validateInput(input){
        const isInteger = Number.isInteger(+input);
        const hadValidLength = input.length === 4;
        const hasUniqueDigits = (new Set(input)).size === 4;

        return isInteger && hadValidLength && hasUniqueDigits;
    }

    generateSecretDigits(){
        let randomDigits = new Set();
        while(randomDigits.size !== 4){
            randomDigits.add(Math.floor(Math.random() * 10));
        }

        return Array.from(randomDigits).join('');
    }

    compare(guess){
       let hint = guess.split("").reduce((hint, num, index) =>{
           if(this.secretDigits.includes(num)){
             if(this.secretDigits.indexOf(num) === index)
                hint.bull++;
             else
                hint.cow++;
           }
           return hint;
        }, {bull: 0, cow: 0}); 

        this.hints = {...hint};
        this.attempts++;
        return hint;
    }

    getHints(){
        if(this.hints.bull === 0 && this.hints.cow === 0){
            let randomIndex = Math.floor(Math.random() * this.noLuckMessages.length);
            return this.noLuckMessages[randomIndex];
          }else
            return `here's a hint: ${this.hints.bull} ${String.fromCodePoint(0x1F402)} and ${this.hints.cow} ${String.fromCodePoint(0x1F404)}`; 
    }
}

module.exports = BullsAndCows;