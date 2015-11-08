/**
 * Write a function that computes the nth number of Fibonacci
 */

// Iterative
function fibonacciIterative(n) {
    var last = 0;
    var current = 1;
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    for (var i=2; i<=n; i++) {
        var temp = current;
        current = current + last;
        last = temp;
    }
    return current;
}

// Recursive
function fibonacciRecursive(n) {
    if (n === 0) {
      return 0;
    }
    if (n === 1) {
      return 1;
    }
    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
}
