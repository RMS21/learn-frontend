// declare a variable

/*
multiline 
comment
*/

// declare
let foo;

// initialization
console.log("foo", foo);

// integer
foo = 1;
const bar = 2;

// boolean
let status = true; // false

// string
let firstName = "ehsan";

// array
let arr = [1, 2, 3];

// object
let person = {
  name: "ehsan",
  family: "family",
};

console.log("foo", foo);
console.log("bar", bar);

// date
const date = new Date();
console.log(date);

// type conversion

const fooString = foo + "";
console.log(typeof fooString);

const stringNumber = "124";
const numberFromString = parseInt(stringNumber);

// check type of variable
console.log(typeof firstName);
console.log(typeof foo);

console.log(typeof numberFromString);

const num1 = 1;
const num2 = 23;
console.log(num1 + num2);
