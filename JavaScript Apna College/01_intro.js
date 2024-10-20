console.log("Hey there!");


// only letter digits underscore and $ is allowed for declaring a variable
age = 18;
name = "Ohm Schrodinger";
x = null;
y = undefined;


true_or_false =true;
console.log("Age is:",age);
console.log("Name is:",name);
console.log(x);
console.log(y);
console.log(true_or_false);


// var - variable can be re-declared and updated. | global scope variable
// let - variable cannot be re-declared but can be updated | block scope variable
// const - variable cannot be re-reclared nor cab be updated | a block scope variable

var Name = "Ommmm";
// generally we dont use var


let fullName = "OMMM";

console.log(fullName);
fullName = "Omerito";
console.log(fullName);


const PI = 3.14;

console.log(PI);


let a;
console.log(a);
// output will be "undefined" 

// const Z;
// this will give an error
// you need to initialise a const value