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

// arithmetic & assignment
const num1 = 1;
const num2 = 23;

console.log(num1 + num2);
console.log(num1 * num2);

let counter = 1;
// counter = counter + 1;
// counter += 1;
counter++;

console.log("counter", counter);

// console.log(counter / "adfb");

// comparison operators
const ehsanAge = 10;
const rasoulAge = 5;
const resultAge = ehsanAge < rasoulAge;

console.log(resultAge);

const ehsanName = "Ahsan";
const rasoulName = "B";
const resultName = ehsanName < rasoulName;

console.log("resultName", ehsanName.charCodeAt(0));

let text1 = "20";
let text2 = "5";
let result = parseInt(text1) < parseInt(text2);
console.log(result);

const ehsanWithAge = ehsanName + " " + ehsanAge;
console.log("ehsanWithAge", ehsanWithAge);

console.log("logical operator", ehsanAge > rasoulAge || ehsanName > rasoulName);

const numPrim = 2;
const numObj = new Number(2);

console.log(numPrim, numObj);
console.log(typeof numPrim, typeof numObj);

// Array object:
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

const x = "string";
x = 1;

// typescript
