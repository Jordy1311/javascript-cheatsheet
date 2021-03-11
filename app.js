//  Single line comments

/*
    Multi
    line
    comments
*/

/* Log to console
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
// TEMPLATE LITERALS
    const name = 'John';
    const age = 31;
    const job = 'Web Developer';
    const city = 'Miami';
    let html;

    // Without template strings (es5)
    html = '<ul><li>Name: ' + name + ' </li><li>Age: ' + age + ' </li><li>Job: ' + job + ' </li><li>City: ' + city + ' </li></ul>';

    html = '<ul>' +
            '<li>Name: ' + name + ' </li>' +
            '<li>Age: ' + age + ' </li>' +
            '<li>Job: ' + job + ' </li>' +
            '<li>City: ' + city + ' </li>'+
            '</ul>';

    function hello(){
        return 'hello';
    }

    // With template strings (es6)
    html = `
        <ul>
            <li>Name: ${name}</li>
            <li>Age: ${age}</li>
            <li>Job: ${job}</li>
            <li>City: ${city}</li>
            <li>${2 + 2}</li>
            <li>${hello()}</li>
            <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
        </ul>
    `;

    document.body.innerHTML = html;
*/


/*
// ARRAYS AND ARRAY METHODS
    // Create some arrays
    const numbers = [43,56,33,23,44,36,5];
    const numbers2 = new Array(22,45,33,76,54);
    const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
    const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

    let val;

    // Get array length
    val = numbers.length;
    // Check if is array
    val = Array.isArray(numbers); //'Numbers' const is array, put a string in this field, would show false
    // Get a single value
    val = numbers[3];
    val = numbers[0];
    // Insert into array
    numbers[2] = 100;
    // Find index of value
    val = numbers.indexOf(36);

    // // MUTATING ARRAYS
    // // Add on to end
    // numbers.push(250);
    // // Add on to front
    // numbers.unshift(120);
    // // Take of from end
    // numbers.pop();
    // // Take of from front
    // numbers.shift();
    // // Splice values
    // numbers.splice(1,3);
    // // Reverse array
    // numbers.reverse();

    // Concatenate array
    val = numbers.concat(numbers2);

    // // Sorting arrays
    // val = fruit.sort();
    // val = numbers.sort();

    // // Use the "compare function" to sort numbers
    // val = numbers.sort(function(x, y){return x-y;});

    // // Reverse sort using "compare function" for numbers
    // val = numbers.sort(function(x, y){return y-x;});

    // Find - in example you can also use <
    function over50(num){
        return num > 50;
    }

    val = numbers.find(over50)



    console.log(numbers);
    console.log(val);
*/
