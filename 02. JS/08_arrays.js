let marks = [100,90,80,55,100,69];
let sum =0;
for(let element of marks)
{
    sum = sum + element;
}
sum = sum / marks.length;
console.log("Average marks: ",  sum);

console.log(marks);
console.log(marks[0]);

console.log(typeof(marks)); 
//this will print object

let names = ["om" , "rangu" , "pushkraj" , "mahi"];
for(let i = 0; i< names.length; i++)
{
    console.log(names[i]);
}

// method 2

for(let element of names)
{
    console.log(element);
} 

// array methods
// push()  - adds an element at the end of the array
// pop()  -  removes the last element of the array
// toString() -  converts the array into a string
// concat(): joins  two arrays together
// unshift()  - adds an element at the beginning of the array
// shift()  - removes the first element of the array
// slice()   - returns a subset of the array
// splice()   - adds or removes elements from the array 

let food = ["apple", "guava"];
food.push("Grape");
console.log(food);
food.pop();
console.log(food);
console.log(food.toString());


let arr = [0,1,2,3,4,5,6,7,8,9];
// arr.splice(index_position, delete count, new elements...)
arr.splice(2,2,100,200);
console.log(arr);

// delete element
// arr.splice(index_number,1)