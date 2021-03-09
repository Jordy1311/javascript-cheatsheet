//  Single line comments

/*
    Multi
    line
    comments
*/

/* LOG TO CONSOLE
    console.log('Hello World');
    console.log('123');
    console.log('true');
    var greeting = 'Hello';
    console.log(greeting);
    console.log([1,2,3,4]);
    console.log({a:1, b:2, c:3});
    console.table({a:1, b:2, c:3});

    console.error('This is some error');
    console.clear();
    console.warn('This is a warning');
    console.time('Hello');
        console.log('Hello World');
        console.log('Hello World');
        console.log('Hello World');
        console.log('Hello World');
        console.log('Hello World');
        console.log('Hello World');
    console.timeEnd('Hello');
*/


// VAR, LET, CONST
/* var, let, const
    var name = 'John Doe';
    console.log(name);
    name = 'Steve Smith';
    console.log(name);
*/

/* Init var
    var greeting;
    console.log(greeting);
    greeting = 'Hello';
    console.log(greeting);
*/

// vars can be letters, numbers, _, $
// vars can not start with a number

/* Multi word vars
    var firstName = 'John'; // Camel case

    var first_name = 'Sarah'; // Underscore
    var FirstName = 'Tom'; // Pascal case
    var firstname = 'Grace'; // Not reccomended
*/

/*LET
    let name; 
    name = 'John Doe';
    console.log(name);
    name = 'Steve Smith';
    console.log(name);
*/

/* CONST
    const name = 'John';
    console.log(name);
    // const can not be reassigned
    // eg name = 'Sara';
    // const must have a value, cannot be init as blank as var can
    // eg const greeting;

    // const can be mutated though
    const person = {
        name: 'John',
        age: '32'
    }
        // eg person.name = 'Sarah';
        // eg person.age = '35';
    console.log(person);

    //const can be mutated though
    const numbers = [1,2,3,4,5];
    numbers.push(6);

    console.log(numbers);
*/


/*
// DATA TYPES
//  PRIMITIVE
// String (quation marks)
    const name = 'John Doe';
//  Number (no quotation marks - quotation marks will make this a string)
    const age =45;
// Boolean
    const hasKids = true;
// Null
    const car = null;
// Undefined
    let test;
// Symbol
    const sym = Symbol();


// REFERENCE TYPES - Objects
// Array
    const hobbies = ['movies', 'music'];
// Object literal
    const address = {
    city: 'Boston',
    state: 'MA'
}
// Date
    const today = new Date();
    

console.log(today);
console.log(typeof today);
*/


/*
// TYPE CONVERSION

let val;

// Number to string
val = 5;
val = String(5);
val = String(4+4);
// Bool to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String ([1,2,3,4]);

// toSting()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('Hello');
val = Number([1,2,3]);

val = parseInt('100.30');
val = parseFloat('100.31');

// Output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed());

// Type co-ercion
const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2); // without "Number" it will pass a string


console.log(sum);
console.log(typeof sum);
*/