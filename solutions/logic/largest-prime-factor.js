/**
 * Write a function that finds the greatest prime factor of a number n.
 */

function greatestPrimeFactor(n) {
    var i = 2;
    while (i<=n) {
        if (n%i == 0) {
            n = n/i;
        }
        else {
            i++;
        }
    }
    return i;
}
