const sumAll = function(num1, num2) {
    let result = 0;
    if (typeof num1 != 'number' || 
        typeof num2 != 'number' ||
        Math.sign(num1) == -1 || 
        Math.sign(num2) == -1) { 
            return "ERROR"; 
    } else if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            result += i;
        }
    } else {
        for (let i = num1; i >= num2; i--) {
            result += i;
        }
    }
    return result;
}

module.exports = sumAll
