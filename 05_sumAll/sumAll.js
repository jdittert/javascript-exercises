const sumAll = function(int1, int2) {
    let finalSum = 0;
    
    if (typeof int1 === "number" && typeof int2 === "number") {
        x = int1;
        y = int2;
    
        if (x >=0 && y >=0) {
            for (i = Math.min(x, y); i <= Math.max(x, y); i++) {
                finalSum += i;
            }
        } else {
            finalSum = "ERROR";
        }
    } else {
        finalSum = "ERROR";
    }  
    
    return finalSum
};

// Do not edit below this line
module.exports = sumAll;
