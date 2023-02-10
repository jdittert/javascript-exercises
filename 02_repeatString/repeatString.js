const repeatString = function(text, reps) {
    let newString = "";
    if (reps < 0) {
        newString = "ERROR";
    } else {
        for (i = 0; i < reps; i++) {
            newString += text;
        }
    }
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
