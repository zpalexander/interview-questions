# Interviewing Web Developers

This repository is a compilation of useful interview questions for web developers.

Click through the link at the bottom of each problem to see the solution.

## Internet Protocols

#### 1. General Questions

If I type https://google.com into my browser and press enter, what happens?

[See the answer]()

How do you optimize the front-end performance of a JavaScript web application?

#### Cross-Domain Issues

What is the difference between CORS and JSONP? Under what circummstances would you use each?

[See the answer](http://stackoverflow.com/a/12309651/2117153)


## JavaScript

#### 1. String manipulation

Define a `spacify` function which takes a string as an argument and returns the same string, but with each character separated by a space.

[See the answer](solutions/javascript/spacify.js)

#### 2. Prototypes

Create the same `spacify` function, but add it directly as a method to the `String` object. Talk about this practice as it relates to building real applications.

[See the answer](solutions/javascript/spacify-string.js)

#### 3. Scope

What will the result of the following be?

```javascript
var User = {
    count: 1,
    getCount: function() {
        return this.count;
    }
};
console.log(User.getCount());

var func = User.getCount;
console.log(func());
```

How would you ensure that the context of func() is always bound to Userso that 1 will be returned?


[See the answer](solutions/javascript/scope.js)


## Algorithms

#### Bubble Sort

What is the complexity of the bubble sort algorithm? Use Big-O notation.

Implement it.

[See the answer](solutions/algorithms/bubble-sort.js)


#### Merge Sort

What is the complexity of the merge sort algorithm? Use Big-O notation.

Implement it.

[See the answer](solutions/algorithms/merge-sort.js)

#### Quick Sort

What is the complexity of the quick sort algorithm? Use Big-O notation.

Implement it.

[See the answer](solutions/algorithms/quick-sort.js)


#### Binary Search

What is the complexity of a binary search? Use Big-O notation.

Implement it.

[See the answer](solutions/algorithms/binary-search.js)

## Logic / Brain Teasers

#### 1. Fizzbuzz

Write a function that prints the numbers from 1 to 100.

For multiples of three print "Fizz" instead of the number.

For multiples of five print "Buzz" instead of the number.

For multiples of both three and five print "FizzBuzz".

[See the answer](solutions/logic/fizzbuzz.js)

#### 2. Palindromes

Write a function to check if a string is a pallindrome.

[See the answer](solutions/logic/pallindrome.js)

#### 3. Array Flatten

Write a function that flattens a multi-dimensional array of unknown depth and composition into a one-dimensional array.

[See the answer](solutions/logic/array-flatten.js)

#### 4. Pascal's Triangle

Pascal's triangle is a triangular array of the binomial coefficients. This means that in Pascal's triangle, each number is the sum of the two directly above it. Here's an illustration:



Write a function that prints row N of Pascal's triangle.

[See the answer](solutions/logic/pascals-triangle.js)

#### 5. Fibonacci

The Fibonacci sequence is a series of numbers where each number in the sequence is the sum of the previous two numbers. For this question, assume that the sequence starts with the number 0. The first ten numbers of the sequence look like this:

`0, 1, 1, 2, 3, 5, 8, 13, 21, 34`

Write two functions to compute the n'th number of the Fibonacci sequence.

The first function should use an iterative method.

The second function should use a recursive method.

[See the answer](solutions/logic/fibonacci.js)


#### 6. Duplicate Characters

Write a function that removes any duplicate characters from a string.

[See the answer](solutions/logic/remove-dupes.js)


#### 7. Greatest Prime Factor

Write a function that finds the greatest prime factor of a number n.

[See the answer](solutions/logic/largest-prime-factor.js)

#### 8. Finding Sum Pairs

Write a function that finds all pairs of integers in an integer array that sum to n

[See the answer](solutions/logic/sum-pairs.js)


## Systems Design

#### REST API Design

Image that you are building Twitter. In particular, you are in charge of designing an API for Twitter's backend. This API will be used by a developer building a 3rd party Twitter client. What actions would you expose and what HTTP method would you use for each?

What are some ways you could scale your Twitter service to accomodate a high user load?

What are some ways you could scale your Twitter service to

[See a sample answer]()

#### URL Shortening

Design a URL shortening service like bit.ly. Touch upon each of the following:
    - The service's database architecture
    - The service's API
    - The service's frontend web app

[See a sample answer]()

## Application Security


#### Cross Site Scripting

What is XSS and what does the acronym stand for? How is the exploit accomplished and what is its potential impact? How can it be mitigated?

[See a sample answer](solutions/appsec/xss.md)
