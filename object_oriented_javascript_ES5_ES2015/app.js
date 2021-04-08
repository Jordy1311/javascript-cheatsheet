/*
// CONSTRUCTORS & THE THIS KEYWORD
// Most important things in object oriented is the "Constructor" and "This" keywords
// ES6 classes can acomplish the same things as these under ES5 but they are syntatic sugar (convenience) - it is good to know how they work under-the-hood :)

// Object literals - this can be good if you want to deal with 1 object
  // const brad = {
  //   name: 'Brad',
  //   age: 30
  // }

  // console.log(brad)

// Constructor - can be used to create multiple instances of a similar object
// eg: Person constructor //// - contstructor name should start with capital
  function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob)
    this.calculateAge = function(){
      const diff = Date.now() - this.birthday.getTime()
      const ageDate = new Date(diff)
      return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
  }

  //// - when "this." is in the global scope is pertains to the window object. if called on in above function it will provide all instances of objects that were created using that function?? (try: console.log(this) inside and outside Person())

// From this function you can instantiate a new object by calling  "new Person" and inputting values 
  //// - age has been commented out in above for section using dob
  // const jordan = new Person('Jordan', 25)
    // console.log(jordan)
    // console.log(jordan.age)
  // const john = new Person('John', 50)
    // console.log(john)
    // console.log(john.name)

  const jordan = new Person('Jordan', '11/13/1995') // American format??
  console.log(jordan.calculateAge())
*/


/*
// BUILT IN CONSTRUCTORS
// There are other core objects that have constructors but these are not advisable to use
// Primative data types can be created as objects using constructors
// There is not many reasons to do this and reasons not to
// Slower code, issues using === comparing value and type

// Strings
  const name1 = 'Jeff'
  const name2 = new String('Jeff');

  // console.log(name1) // gives you the value
  // console.log(name2) // gives you an object with value inside
    // You can add properties to name2 but there isnt many reasons to do this

    console.log(typeof name1) // returns string
    console.log(typeof name2) // returns object

  // Issues arrise when
  if(name1 === 'Jeff'){
    console.log("name1 === 'Jeff'")
  } else {
    console.log("name1 !== 'Jeff'")
  }

  if(name2 === 'Jeff'){
    console.log("name2 === 'Jeff'")
  } else {
    console.log("name2 !== 'Jeff'")
  }
  // if the name2's if statement checked name2 against == rather than === it would be a true statement


// Other examples
  const num1 = 5
  const num2 = new Number(5)

  const bool1 = true
  const bool2 = new Boolean(true)

  const getSum1 = function(x, y) {
    return x + y
  }
  const getSum2 = new Function('x', 'y', 'return x + y')

    console.log(getSum2(1,3))

  // Object and Array example - no difference with output as already objects, just longer syntax
  const john1 = {name: 'John'}
  const john2 = new Object({name: 'John'})

  const arr1 = [1,2,3,4]
  const arr2 = new Array(5,6,7,8)

  // Regular Expressions - will be confusing if you have not covered REs yet
  const re1 = /\w+/ // this RE is looking for a word character that occures 1 or more times
  const re2 = new RegExp ('\\w+') // when using RE like this you need to escape the backslash

  console.log(re2)
  */