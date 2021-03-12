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


/*
// NUMBERS AND THE MATH OBJECT
    const num1 = 100;
    const num2 = 50;
    let val;

    // Simple math with numbers
    val = num1 + num2;
    val = num1 * num2;
    val = num1 - num2;
    val = num1 / num2;
    val = num1 % num2;

    // Math Object
    val = Math.PI;
    val = Math.E;

    val = Math.round(2.4);
    val = Math.ceil(2.3);
    val = Math.floor(2.8);
    val = Math.sqrt(64);
    val = Math.abs(-3);
    val = Math.pow(8,2);

    val = Math.min(2,33,4,1,55,6,3,-2);
    val = Math.max(2,33,4,1,55,6,3,-2);

    val = Math.random();
    val = Math.random() * 20 + 1; 
    val = Math.floor(Math.random() * 20 +1);

    console.log(val);
 */


/*
// STRING METHODS AND CONCATINATION
    const firstName = 'Williams';
    const lastName = 'Johnson';
    const age = 36;
    const str = 'Hello there my name is Brad'
    const tags = 'web design, web development, programming';

    let val;

    val = firstName + lastName

    // Concatination
    val = firstName + ' ' + lastName

    val = 'Hello, my name is ' + firstName + ' and I am ' + age;

    // Append
    val = 'Brad ';
    val += 'Traversy';

    // Escaping - this can also be achieved using double-quotation marks
    val = 'That\'s awesome, I can\'t wait';

    // Length
    val = firstName.length;

    // concat()
    val = firstName.concat(' ', lastName);

    // Change case
    val = firstName.toUpperCase();
    val = firstName.toLowerCase();

    val = firstName[2];

    // indexOf() - looks for the position of value from either front or end
    val = firstName.indexOf('l');
    val = firstName.lastIndexOf('l');

    // charAt() - looks for what value is at this position
    val = firstName.charAt('2');
    // Get last character or string
    val = firstName.charAt(firstName.length - 1);

    // substring()
    val = firstName.substring(0,4);

    // slice() - Very similar to substring but you can do negatives to take the last letters
    val = firstName.slice(0, 4);
    val = firstName.slice(-3);

    // split() - Splits up string into array at nominated value
    val = str.split(' ');
    val = tags.split(',');

    // replace() - Replaces one value with another
    val = str.replace('Brad', 'Jack');

    // includes() - Checks to see if value is included
    val = str.includes('Hello');
    val = str.includes('foo');

    console.log(val);
 */

