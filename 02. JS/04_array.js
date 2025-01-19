let arr = ["Om", "Pushkraj", "Kushagra"];
console.log(arr);
console.log(arr[2]);
console.log(arr.length);
console.log(typeof(arr)); //array is a type of object

// array operations
// push, pop, concat, unshift, shift
// push- add item to last
// pop- removes last item
// concat- concatenates two arrays
// unshift- adds item to start
// shift- deletes first item
// slice - returns a subset of array (does not change the array)
// splice - changes the og array 
arr.push("Pookie");
console.log(arr);

arr.pop();
console.log(arr);

console.log(arr.toString());

let names = ["tom", "peter", "dan"];

let new_array = arr.concat(names);
console.log(new_array);

new_array.unshift("Heyy");
console.log(new_array);

new_array.shift();
console.log(new_array);