const reverseString = function(text) {
    let backwards = "";    
    const letters = text.split("");
    for (i = 1; i <= letters.length; i++) {
        j = letters.length - i;
        backwards += letters[j];
        }
    return backwards;
};

// This was my first answer (it works), but their answer is return text.split("").reverse().join("");

// Do not edit below this line
module.exports = reverseString;
