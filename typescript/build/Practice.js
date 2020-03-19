"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isPrime = function (num) {
    num = Math.abs(num);
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
};
exports.isPrime = isPrime;
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
var cipher = function (str) {
    // Replace letters with next alphabet letter then capitalize every vowel
    var newLetters = [];
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var letter = str_1[_i];
        var code = letter.charCodeAt(0);
        var newCode = code;
        if ((code < 90 && code > 64) || (code < 122 && code > 96)) {
            newCode = code + 1;
        }
        else if (code == 90) {
            newCode = 65;
        }
        else if (code == 122) {
            newCode = 97;
        }
        var raisedLetter = String.fromCharCode(newCode);
        var lowerVowels = ['a', 'e', 'i', 'o', 'u'];
        if (lowerVowels.includes(raisedLetter)) {
            raisedLetter = raisedLetter.toUpperCase();
        }
        newLetters.push(raisedLetter);
    }
    return newLetters.join('');
};
exports.cipher = cipher;
