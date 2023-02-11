const leapYears = function(year) {
    if (year % 400 === 0) return true;
    if (year % 4 === 0 && year % 100 !== 0) {        
        return true;
    } else {
        return false;
    }
};

// return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
// Don't forget === will auto return T/F value; that's what they did.

// Do not edit below this line
module.exports = leapYears;
