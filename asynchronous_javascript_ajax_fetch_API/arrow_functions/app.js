// // just a regular old function
// const sayHello = function() {
//     console.log("Hello!");
// }

// // arrow function version of above
// const sayHello = () => {
//     console.log("Hello!");
// }

// // one line function
// const sayHello = () => console.log("Hello!");

// // one line return
// const sayHello = () => "hello";

// // to return an object as above do this below
// const sayHello = () => ({ msg: "Hello! "});


// // single param doesnt need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// // multiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello("Jordan", "Cooper");


const users = ["Nathan", "John", "WIlliam"];

// // normal function callback
// const nameLengths = users.map(function(name) {
//     return name.length
// });

// arrow function callback
const nameLengths = users.map(name => name.length);

console.log(nameLengths);