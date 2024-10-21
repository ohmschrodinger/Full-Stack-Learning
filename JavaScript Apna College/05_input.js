// alert("Hello");
// prompt("Enter lalala");

// let x = prompt("Enter a number: ");
// if(x>5)
// {
//     console.log("yesss");
// }
// else
// {
//     console.log("no");
// }

// for(let i = 1; i <= 5; i++)
// {
//     console.log("Hello Om");
// }

let i = '1';
console.log(typeof (i));
console.log(i);
i++;
console.log(typeof (i));
console.log(i);
// while(i<5)
// {
//     console.log(i);
//     i++;
// }

let name = "Ohm Schrodinger";
for (let i of name) {
    console.log(i);
    // this will print letter by letter
}

for (let i in name) {
    console.log(i);
    // this will print index of each letter;
}

let length_name = 0;
for (length_name in name) {
    length_name;
}

console.log(length_name);


let student = {
    name: "Ohm Schrodinger",
    age: 20,
    gender: "male",
    "is married": false
}

for (let i in student) {
    console.log(i);  // this will print keys of object
    console.log(student[i]);   // this will print value of each property ie Ohm Schrodinger, 20, male
}

