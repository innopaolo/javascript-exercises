const reverseString = function(string) {
    let stringToArray = string.split("");
    let arrayReversed = "";
    for (let i = stringToArray.length - 1; i >= 0; i--) {
        arrayReversed += stringToArray[i];
    }
    return arrayReversed; 
};

// Do not edit below this line
module.exports = reverseString;

