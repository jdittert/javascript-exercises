const removeFromArray = function(inputs, ...wrongs) {
    wrongs.forEach(remove); 
    
    function remove(value) {
        for (i = inputs.length - 1; i >= 0; i--) {
            if (inputs[i] === value) {
                inputs.splice(i, 1);
            }
        }
    }    
    return inputs;
};

// This works. Their code creates a new array. Loop through inputs and push() anything !== wrongs. Can also filter() with !== wrongs as well.
// Do not edit below this line
module.exports = removeFromArray;
