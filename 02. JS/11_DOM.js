// DOM Means  Document Object Model
// DOM is a programming interface for HTML and XML documents. It defines the logical structure of documents and
// the way a document is accessed and manipulated.
// DOM is a tree-like data structure that represents the structure of an HTML document.
// It consists of nodes, which are objects that represent elements, attributes, and text in the document
// DOM is used to dynamically update the content of a web page, without requiring a full page reload
// DOM is used to create interactive web pages, such as those with dropdown menus, sliders, and
// other dynamic elements.

// refer DOM.html file


document.body.div = "HIIII";

// DOM MANIPULATION

// let hea = document.getElementById("heading");
// console.log(hea);
// console.dir(hea);

// let cont = document.getElementsByClassName("container");
// console.dir(cont);
// cont [0].style.background = "red";


// let para = document.getElementsByClassName("par");
// console.dir(para);

// let paragraph = document.getElementsByTagName("p");
// console.dir(paragraph);

// Query Selector
let first = document.querySelector(".container");  // u can put id / class / tag
// this is to access the first matching element
console.log(first);

let all = document.querySelectorAll("#heading");
// this is to access all the matching elements
console.log(all);


// PROPERTIES
// tagName - returns  the name of the tag
// inner text-  text inside the tag
// inner html-  returns the html content of the element
// text content-   returns the textual content even for hidden elements

let temp = first.tagName;
console.dir(temp);


// <div class ="container"> hello </div>
let lol = document.getElementsByClassName("container");
let lol_tagname = lol.tagName;
console.dir(lol_tagname);



