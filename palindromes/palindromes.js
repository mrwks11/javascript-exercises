const palindromes = function(string) {
    
    let processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
    let reversedString = processedString.split("").reverse().join("");

    return processedString === reversedString;

}

module.exports = palindromes
