/**
 * Write a function that prints the numbers from 1 to 100.
 *
 * For multiples of three print "Fizz" instead of the number.
 * For multiples of five print "Buzz" instead of the number.
 * For multiples of both three and five print "FizzBuzz".
 */

function fizzbuzz() {
    for (var i=1; i<=100; i++) {
        var output = '';
        var isMultiple = false;
        if (i%3 === 0) {
            output = output + 'Fizz';
            isMultiple = true;
        }
        if (i%5 === 0) {
            output = output + 'Buzz';
            isMultiple = true;
        }
        if (!isMultiple) {
            output = output + i
        }
        console.log(output);
    }
}
