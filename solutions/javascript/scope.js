/**
 * What will the result of the following be?
 */

var User = {
  count: 1,
  getCount: function() {
    return this.count;
  }
};

console.log(User.getCount());   // Prints 1

var func = User.getCount;
console.log(func());            // Prints undefined

/**
 * How would you ensure that the context of func() is always
 * bound to User so that 1 will be returned?
 */

var func = User.getCount.bind(User);
console.log(func())             // Prints 1
