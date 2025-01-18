for (let i = 0; i < 5; i++) {
    console.log(i);
}

let m = 55;
while (m < 60) {
    console.log(m);
    m++;
}


let str = "abcdefgh";
let size = 0;
// for of loop
for (let i of str) {
    console.log(i);
    size++
}

let student = {
    name: "ommm",
    age: 18,
    div: 'B'
};

for (let i in student) {
    console.log(i);
}

// template variables
console.log(`Hello my name is ${student.name}`);

// string methods
str.toUpperCase()
str.toLowerCase()
str.trim() //removes whitespaces
