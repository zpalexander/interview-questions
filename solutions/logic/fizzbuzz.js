/**
 * Write a function that prints the numbers from 1 to 100.
 *
 * For multiples of three print "Fizz" instead of the number.
 * For multiples of five print "Buzz" instead of the number.
 * For multiples of both three and five print "FizzBuzz".
 */

export default function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0) {
      output = `${output}Fizz`;
    }
    if (i % 5 === 0) {
      output = `${output}Buzz`;
    }
    if (output === '') {
      output = i;
    }
    console.log(output);
  }
}
