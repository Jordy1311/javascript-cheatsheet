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

/* LET
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

/*
    Multi
    line
    comments
*/