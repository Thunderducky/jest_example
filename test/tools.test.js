const Tools = require("../lib/tools.js")
describe("Tools", () => {
    describe("convertFromRomanNumerals", () => {
        // Positive
        it("should translate a valid roman numeral into a regular number - 4", () => {
            // Arrange
            // Act
            const result = Tools.convertFromRomanNumerals("IV");
            // Assert
            expect(result).toEqual(4);
        })
        it("should translate a valid roman numeral into a regular number - 60" , () => {
            // Arrange
            // Act
            const result = Tools.convertFromRomanNumerals("LX");
            // Assert
            expect(result).toEqual(60);
        })
        it("should translate a valid roman numeral into a regular number - 99", () => {
            // Arrange
            // Act
            const result = Tools.convertFromRomanNumerals("XCIX");
            // Assert
            expect(result).toEqual(99);
        })
        // Negative
        it("should return zero if given an empty string", () => {
            // Arrange
            // Act
            const result = Tools.convertFromRomanNumerals("");
            // Assert
            expect(result).toEqual(0);
        })
        it("should return NaN if the input is not a valid roman numeral", () => {
            // Arrange
            // Act
            const result = Tools.convertFromRomanNumerals("QWE");
            // Assert
            expect(result).toBeNaN();
        })
        // Exceptions
        it("should throw an error if it receives something that's not a string", () => {
            const cb = () => Tools.convertFromRomanNumerals(123);
            const err = new Error("Input must be a string");
            expect(cb).toThrowError(err);
        })
    })
    
})