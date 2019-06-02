/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

JavaScript:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Ruby:

seven(times(five)) # must return 35
four(plus(nine)) # must return 13
eight(minus(three)) # must return 5
six(divided_by(two)) # must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Divison should be integer division, e.g eight(dividedBy(three()))/eight(divided_by(three)) should return 2, not 2.666666...
*/

const zero = (fu) => fu === undefined ? 0 : fu(0);
const one = (fu) => fu === undefined ? 1 : fu(1);
const two = (fu) => fu === undefined ? 2 : fu(2);
const three = (fu) => fu === undefined ? 3 : fu(3);
const four = (fu) => fu === undefined ? 4 : fu(4);
const five = (fu) => fu === undefined ? 5 : fu(5);
const six = (fu) => fu === undefined ? 6 : fu(6);
const seven = (fu) => fu === undefined ? 7 : fu(7);
const eight = (fu) => fu === undefined ? 8 : fu(8);
const nine = (fu) => fu === undefined ? 9 : fu(9);

function plus(a) { 
  return function(b) {
    return b + a;
  };
}
function minus(a) { 
  return function(b) {
    return b - a;
  };
}
function times(a) { 
  return function(b) {
    return b * a;
  };
}
function dividedBy(a) { 
  return function(b) {
    return Math.floor(b / a);
  };
}