"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var flip = function (input) {
    // Reverses string
    var outputArray = [];
    for (var i = input.length - 1; i >= 0; i--) {
        outputArray.push(input[i]);
    }
    return outputArray.join('');
};
exports.flip = flip;
var factorial = function (num) {
    // Returns the factorial between 1 to 18
    if (num == 0)
        return 1;
    return num * factorial(num - 1);
};
exports.factorial = factorial;
