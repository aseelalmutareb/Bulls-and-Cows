class BullsAndCows{
    constructor(){
        this.secretDigits = this.generateSecretDigits();
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
       return guess.split("").reduce((hint, num, index) =>{
           if(this.secretDigits.includes(num)){
             if(this.secretDigits.indexOf(num) === index)
                hint.bull++;
             else
                hint.cow++;
           }
           return hint;
        }, {bull: 0, cow: 0}); 
    }

    getHints(){
      return `Hint`;  
    }
}

module.exports = BullsAndCows;