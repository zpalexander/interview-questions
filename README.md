# Interviewing Web Developers

This repository is a compilation of useful interview questions for web developers.

Click through the link at the bottom of each problem to see the solution. All solutions are implemented in JavaScript.

To practice problems, clear the solution for the problem you want to practice, run `npm run test:watch`, and fill in the function to make the tests for your particular problem pass.

## General Web Questions

#### 1. Internet Protocols

If I type https://google.com into my browser and press enter, what happens?

[See a sample answer](http://stackoverflow.com/a/2092602/2117153)

#### 2. Front-end Performace

How would you go about optimizing the front-end performance of a JavaScript web application?

[See a sample answer](solutions/general-web/frontend-perf.md)

#### 3. Cross-Domain Issues

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

```
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

How would you ensure that the context of func() is always bound to User such that 1 will be returned?


[See the answer](solutions/javascript/scope.js)


## Algorithms

#### 1. Binary Search

What is the complexity of a binary search? Use Big-O notation.

Implement it.

[See the answer](solutions/algorithms/binary-search.js)

#### 2. Linked Lists

Given the following implementation of a Linked List node:

```
function Node(data) {
    this.data = data;
    this.next = null;
}
```

Write code to remove duplicates from an unsorted linked list given the first node in the list.

[See the answer](solutions/algorithms/linked-list.js)

FOLLOW UP: How would you do this without access to a buffer?

#### 3. Binary Tree Inversion

Given the following implementation of a binary tree node:

```
function TreeNode(val) {
    let node = {};
    node.val = val;
    node.left = node.right = null;
    return node;
}
```

Write a function that takes the root element of the tree and inverts the tree.

[See the answer](solutions/algorithms/binary-tree-inversion.js)

#### 4. Breadth First Search

Given a graph represented as an adjacency list and the node to start with, return an array of the graph's nodes in breadth first order

[See the answer](solutions/algorithms/breadth-first-search.js)

#### 5. Depth First Search

Given a graph represented as an adjacency list and the node to start with, return an array of the graph's nodes in depth first order

[See the answer](solutions/algorithms/depth-first-search.js)

#### 6. N Degrees of Separation

Imagine you work on a social network. People in the social network are represented as objects, where each object has the following properties:

```
// Person

getFriends() // returns an array of other Person objects who are direct friends with the person
getId()      // returns a unique string ID representing the person

```

The social network wants to add a new feature inspired by "6 degrees of separation". They want to be able to tell any user how many degrees of separation they are away from someone else in the social network.

For example, A "1" means they're directly connected (that is, A is friends with B), a "2" means there is 1 mutual friend (e.g., A and B are both friends with C). A "-1" means the two friends are not connected.

Write a function that can determine the degrees of separation between two people in the social network.

[See the answer](solutions/algorithms/n-degrees-of-separation.js)

#### 7. Combination Sum

Given an array of distinct integers `candidates` and a target integer `target`, return a list of all unique combinations of `candidates` values where the chosen values sum to `target`.

A candidate can be reused an unlimited number of times in a combination that sums to the `target`, e.g. if candidates is `[2]` and target is 4, `[[2,2]]` is an acceptable answer.

[See the answer](solutions/algorithms/combination-sum.js)

#### 8. Course Schedule

There are a total of `numCourses` you must take to graduate, labeled from 0 to `numCourses - 1`. You are given an array of `prerequisites` where `prerequisites[i] = [a, b]` indicates you must take course b first if you want to take course a.

All the pairs in prerequisites are unique.

For example, the pair [0, 1] means you need to take course 1 first before you can take course 0.

Return true if all courses can be finished. Otherwise return false.

Example 1:

```
Input: numCourses = 2, prerequisites = [[1, 0]]
Output: true

There are a total of 2 courses to take. Its possible to take course 0, then course 1, so it is possible to take all courses.

```

Example 2:

```
Input: numCourses = 2, prerequisites = [[1, 0], [0, 1]]
Output: false

You can't take course 1 without taking course 0, and you can't take course 0 without taking course one, so it is not possible to finish your courses.
```

[See the answer](solutions/algorithms/course-schedule.js)

#### 9. Number of Islands

Given a 2d array where all values are 1's (land) and 0's (water), return the number of islands;

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.

Assume that anything surrounding the 2d array is water.

[See the answer](solutions/algorithms/number-of-islands.js)


## Logic / Brain Teasers

#### 1. Fizzbuzz

Write a function that prints the numbers from 1 to 100.

For multiples of three print "Fizz" instead of the number.

For multiples of five print "Buzz" instead of the number.

For multiples of both three and five print "FizzBuzz".

[See the answer](solutions/logic/fizzbuzz.js)

#### 2. All Unique Characters

Implement an algorithm to determine if a string has all unique characters.

[See the answer](solutions/logic/string-manipulation.js)

#### 3. Palindromes

Write a function to check if a string is a pallindrome.

[See the answer](solutions/logic/pallindrome.js)

#### 4. Array Reverse

Write a function to reverse an array.

Now do it without using any array API methods.

Now do it without a buffer.

[See the answer](solutions/logic/array-reverse.js)

#### 5. Array Flatten

Write a function that flattens a multi-dimensional array of unknown depth and composition into a one-dimensional array.

[See the answer](solutions/logic/array-flatten.js)

#### 6. Pascal's Triangle

Pascal's triangle is a triangular array of the binomial coefficients. This means that in Pascal's triangle, each number is the sum of the two directly above it. Here's an illustration:

![pascal's triangle](http://www.mathsisfun.com/images/pascals-triangle-4.gif)

Write a function that prints row N of Pascal's triangle.

[See the answer](solutions/logic/pascals-triangle.js)

#### 7. Fibonacci

The Fibonacci sequence is a series of numbers where each number in the sequence is the sum of the previous two numbers. For this question, assume that the sequence starts with the number 0. The first ten numbers of the sequence look like this:

`0, 1, 1, 2, 3, 5, 8, 13, 21, 34`

Write two functions to compute the n'th number of the Fibonacci sequence.

The first function should use an iterative method.

The second function should use a recursive method.

[See the answer](solutions/logic/fibonacci.js)

#### 8. Duplicate Characters

Write a function that removes any duplicate characters from a string.

[See the answer](solutions/logic/remove-dupes.js)

#### 9. Greatest Prime Factor

Write a function that finds the greatest prime factor of a number n.

[See the answer](solutions/logic/largest-prime-factor.js)

#### 10. Monitoring Frankenzombie

The evil Professor Boolean, after years of hard work, has finally created his first successful Frankenzombie specimen. In order to understand the creature, the professor has tasked his minions with monitoring it.

Unfortunately, Professor Boolean's minions are a bit disorganized. There may be times when more than one minion is monitoring at once! Thankfully, the minions are at least organized enough to clock their hours.

Write a function that takes a list of minion timesheets `[start, end]` and returns the total number of hours that Frankenzombie was monitored. All values `start` and `end` are greater than zero and no greater than 2^30-1. `end` will always be greater than `start`.

[See the answer](solutions/logic/frankenzombie.js)

#### 11. Sum Pairs

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

Example 2:

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

Example 3:

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

[See the answer](solutions/logic/sum-pairs.js)

#### 14. K Closest Elements

Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

An integer a is closer to x than an integer b if:

    |a - x| < |b - x|, or
    |a - x| == |b - x| and a < b

Example 1:

```
Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]
```

Example 2:

```
Input: arr = [1,2,3,4,5], k = 4, x = -1
Output: [1,2,3,4]
```

[See the answer](solutions/logic/k-closest-elements.js)


## Systems Design

#### 1. REST API Design

Image that you are building Twitter. In particular, you are in charge of designing an API for Twitter's backend. This API will be used by a developer building a 3rd party Twitter client. What actions would you expose and what HTTP method would you use for each?

What are some ways you could scale your Twitter service to accomodate a high user load?

What are some ways you could scale your Twitter service to

[See a sample answer]()

#### 2. URL Shortening

Design a URL shortening service like bit.ly. Touch upon each of the following:
    - The service's database architecture
    - The service's API
    - The service's frontend web app

[See a sample answer]()


## Application Security

#### 1. Cross Site Scripting

What is XSS and what does the acronym stand for? How is the exploit executed and what is its potential impact? How can it be mitigated?

[See a sample answer](solutions/appsec/xss.md)

#### 2. SQL Injection

What is SQL Injection? How is the exploit executed and what is its potential impact? How can it be mitigated?

[See a sample answer](https://www.owasp.org/index.php/SQL_Injection)

#### 3. Cross-site Request Forgery

Imagine that we have an online baking app protected by a login. Once a user has logged in, they're given a session cookie that they must have in order to send HTTP requests to the rest of the app.

For simplicity's sake, assume that the main dashboard page consists of nothing but a form that allows the user to send money to other users.
The app has two fields - a dollar amount field and a username field - and a submit button.
Submitting the form hits the following endpoint of the bank's backend API at `https://www.example.com/transfer?amount=1000&destination=desiredUser`, which gets the current user, queries the database to make sure the user has enough money to send the transaction, and then updates the sender's and `desiredUser` balances in the DB.
    - What security flaw exists in this system?
    - Can you elaborate on how precisely the user would exploit this flaw to steal money from a user?
    - How could this flaw be mitigated?

[See a sample answer](solutions/appsec/csrf.md)
