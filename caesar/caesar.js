const caesar = function(string, shift) {
    
    shift = shift % 26;
    let newString = '';
    
    for (i = 0; i < string.length; i++) {
        
        let char = string[i];
        let regexLowerCase = /[a-z]/g;
        let regexUpperCase = /[A-Z]/g;
        let charCode = char.charCodeAt();
        let shiftedCharCode = charCode + shift;

        if (char.match(regexLowerCase)) {
            
            if (shiftedCharCode > 122) {
                shiftedCharCode -= 26;
                newString += String.fromCharCode(shiftedCharCode);
            } else if (shiftedCharCode < 97) {
                shiftedCharCode += 26;
                newString += String.fromCharCode(shiftedCharCode);
            } else {
                newString += String.fromCharCode(shiftedCharCode);
            }

        } else if (char.match(regexUpperCase)) {

            if (shiftedCharCode < 65) {
                shiftedCharCode += 26;
                newString += String.fromCharCode(shiftedCharCode);
            } else if (shiftedCharCode > 90) {
                shiftedCharCode -= 26;
                newString += String.fromCharCode(shiftedCharCode);
            } else {   
                newString += String.fromCharCode(shiftedCharCode);
            }

        } else {

            newString += char;

        }
    }
    return newString;
}

module.exports = caesar