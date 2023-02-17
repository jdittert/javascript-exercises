const fibonacci = function(fib) {
    let seq = [1, 1];
    fib = +fib;
    if (fib < 1) return "OOPS";
    for (i = 2; i < +fib; i++) {
        newFib = seq[i - 1] + seq[i - 2];
        seq.push(newFib);
    }
    return seq[fib - 1];
};

// Do not edit below this line
module.exports = fibonacci;
