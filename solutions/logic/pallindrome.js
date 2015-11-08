/**
 * Write a function to check if a string is a pallindrome
 */

function isPallindrome(input) {
    if (input.length == 0 || input.length == 1) {
        return true;
    }
    var reverseString = input.split('').reverse().join('');
    if (reverseString === input) {
        return true;
    }
    return false;
}
