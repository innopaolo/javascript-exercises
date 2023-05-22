const repeatString = function(string, num) {
    let text = (num < 0) ? "ERROR" : "";
    for (let i = 0; i < num; i++) {
        text += string;
    }
    return text;
};

// Do not edit below this line
module.exports = repeatString;
