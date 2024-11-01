// prompt the user to enter their full name. generate a username for them based on the input, start username with @, followed by their full name and ending with the full name length.
// eg user name = "omdhamame", userbane should be "@omdhamame";

let name = prompt("Enter your name: ");
let username = "@" + name + name.length;
console.log(username);

alert(`Your username is  ${username}.`);

