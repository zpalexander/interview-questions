/**
 * Write a function that computes the nth number of Fibonacci
 */

// Iterative
export function fibonacciIterative(n) {
    let last = 0;
    let current = 1;
    let temp;
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    for (let i = 2; i <= n; i++) {
        temp = current;
        current = current + last;
        last = temp;
    }
    return current;
}

// Recursive
export function fibonacciRecursive(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}
