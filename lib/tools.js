const Tool = {
    convertFromRomanNumerals: function(input){
        if(typeof input !== "string"){
            throw new Error("Input must be a string");
        }
        if(input.length === 0){
            return 0;
        }
        const digitValues = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        }
        //given two digits, if the first number is smaller than the second number, subtract it from the first, otherwise, add it
        const digits = input.split("");
        let total = 0;
        for(let i = 0; i < digits.length; i++){
            const value = digitValues[digits[i]];
            if(value === undefined){
                return NaN;
            }
            const nextValue = digitValues[digits[i + 1]];
            if(nextValue !== undefined && nextValue > value){
                total -= value;
            } else {
                total += value;
            }
            console.log(total);
        }
        return total;
    }
}
module.exports = Tool;