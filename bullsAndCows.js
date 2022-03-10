class BullsAndCows{
    constructor(){
        this.secretDigits = this.generateSecretDigits();
        this.hints = {};
        this.attempts = 0;
        this.noLuckMessages = [
            "Sorry, no luck this time",
            ""
        ];
    }

    validateInput(input){
        const isInteger = Number.isInteger(+input);
        const hasValidLengthAndUniqueDigits = (new Set(input)).size === 4;
        return isInteger && hasValidLengthAndUniqueDigits;
    }

    generateSecretDigits(){
        let randomDigits = new Set();
        while(randomDigits.size !== 4){
            randomDigits.add(Math.ceil(Math.random() * 9));
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
        return hint;
    }

    getHints(){
      return `Hint: ${this.hints.bull} ${String.fromCodePoint(0x1F402)} and ${this.hints.cow} ${String.fromCodePoint(0x1F404)}`; 
    }
}

module.exports = BullsAndCows;