const fibonacci = function(num) {
    if (num < 0) return "OOPS";

    let fib1 = 0;
    let fib2 = 1;
    for (let i = 0; i < num; i++) {
        let temp = fib2;
        fib2 = fib1 + fib2;
        fib1 = temp; 
    }
    return fib1;
};

// Do not edit below this line
module.exports = fibonacci;
