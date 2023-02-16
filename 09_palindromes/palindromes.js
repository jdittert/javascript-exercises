const palindromes = function (words) {
    let lowerString = words.toLowerCase();
    const forString = lowerString.split("");
    const forLetters = forString.filter(checkLetter);
    function checkLetter(a) {
        if (a >= "a" && a <= "z") {
            return true;
        };
    }
    const temp = [...forLetters];
    const backLetters = forLetters.reverse();
    return temp.join("") === backLetters.join("");
};

// Do not edit below this line
module.exports = palindromes;
