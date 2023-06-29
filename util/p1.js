const util = require('util')

// templete
let myTemplete = `Hi %s, welcome to %s and duretion of this course is %d months`;

let u1 = util.format(myTemplete, "Karthik", "Node js", 1.4)
let u2 = util.format(myTemplete, "Keerthik", "Node js", 1.2)

console.log('user 1 =', u1)
console.log('user 2 =', u2)