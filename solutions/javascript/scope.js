/* eslint-disable */

/**
 * What will the result of the following be?
 */

const User = {
    count: 1,
    getCount() {
        return this.count;
    },
};

console.log(User.getCount()); // Prints 1

var func = User.getCount;
console.log(func()); // Prints undefined

/**
 * How would you ensure that the context of func() is always
 * bound to User so that 1 will be returned?
 */

var func = User.getCount.bind(User);
console.log(func()); // Prints 1

/* eslint-enable */
