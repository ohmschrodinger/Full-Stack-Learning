let a = 5;
let b = 2;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);  

// comparision operators
console.log(a==b);  //equal to
console.log(a!=b);  //not equal to


let m = 1;
let n = "1";
console.log(m==n); // true because type of m and n arent checked here
console.log(m===n); // false becayse type of m and n are checked  here
console.log(m!==n);

// and operator
let condition = m=n && m!==n;
console.log(condition); 