const sumAll = function(x, y) {
    if (!Number.isInteger(x) || !Number.isInteger(y)) {
        return "ERROR";
    }

    if (x < 0 || y < 0) {
        return "ERROR";
    }
    
    let total = 0;
    let smallerNum = x < y ? x : y; 
    let biggerNum = x < y ? y : x; 
    for (let i = smallerNum; i <= biggerNum; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
