const findTheOldest = function(array) {
    
    return array.reduce((accumulator, currentValue) => {
        // Shortened variables for comparison 
        let accumAge = (accumulator.yearOfDeath || new Date().getFullYear()) - accumulator.yearOfBirth;
        let currentAge = (currentValue.yearOfDeath || new Date().getFullYear()) - currentValue.yearOfBirth; 

        if (currentAge > accumAge) {
            return currentValue;
        } else {
            return accumulator;
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
