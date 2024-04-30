// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
let greet = (name) => {
  let s = ` Hello  ${name}`;
  return s;
};
console.log(greet("safa"));

// Q2) Write a simple arrow function that takes two parameters and returns their sum.
let sum = (num1, num2) => {
  return num1 + num2;
};
console.log(sum(1, 2));
// Q3) Write a simple arrow function that squares a number.
let sq = (num1) => {
  return num1 * num1;
};
console.log(sq(6));
