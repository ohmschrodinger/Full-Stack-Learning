let Name = "Ohm";
let Name_Length = Name.length;
console.log(Name_Length);
console.log(Name[0]);
console.log(Name[1]);
console.log(Name[2]);
console.log(Name[3]); //this will print undefined


// template literals in javascript
// a wat to have embeded expressions in strings
// use of ` `  ....located on top left of keyboard
let sentence = `This is a template literal`;
console.log(sentence);
console.log(typeof(sentence));

let cost = 1000;
let value = 999;
// template literals with variables
console.log("the value is",cost);
console.log(`The cost is ${cost} and value is ${value}`);

// string methods in js

let greet = "heyy , how are you?";
greet.toUpperCase(); //this dosent mean the string wil be upercased...this function has to be used in console.log function
console.log(greet);
console.log(greet.toUpperCase());
console.log(greet.toLowerCase());
console.log(greet.trim());
// trim () removes the leading and trailing spaces from the string

// or
let greet_uppercase = greet.toUpperCase();
console.log(greet_uppercase);


let abc = "0123456789";
let def = "oolala";
console.log(abc.slice(2,6)); //starting index, end index -1
let m = def.concat(abc);
console.log(m); 

