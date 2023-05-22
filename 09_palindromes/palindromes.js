const palindromes = function (string) {
    let noSpaceString = string.replace(/\s|([.,!])/g, "").toLowerCase();
    let reversedString = string.split("").reverse().join("").replace(/\s|([.,!])/g, "").toLowerCase();

    if (noSpaceString == reversedString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
