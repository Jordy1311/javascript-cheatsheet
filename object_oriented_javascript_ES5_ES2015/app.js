/*
// CONSTRUCTORS & THE THIS KEYWORD
// Most important things in object oriented is the "Constructor" and "This" keywords
// ES6 classes can acomplish the same things as these under ES5 but they are syntatic sugar (convenience) - it is good to know how they work under-the-hood :)

// OBJECT LITERALS - this can be good if you want to deal with 1 object
  // const brad = {
  //   name: 'Brad',
  //   age: 30
  // }

  // console.log(brad)

// CONSTRUCTOR - can be used to create multiple instances of a similar object
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

// STRINGS
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


// OTHER EXAMPLES
  const num1 = 5
  const num2 = new Number(5)

  const bool1 = true
  const bool2 = new Boolean(true)

  const getSum1 = function(x, y) {
    return x + y
  }
  const getSum2 = new Function('x', 'y', 'return x + y')

    console.log(getSum2(1,3))

  // OBJECT AND ARRAY EXAMPLE - no difference with output as already objects, just longer syntax
  const john1 = {name: 'John'}
  const john2 = new Object({name: 'John'})

  const arr1 = [1,2,3,4]
  const arr2 = new Array(5,6,7,8)

  // REGULAR EXPRESSIONS - will be confusing if you have not covered REs yet
  const re1 = /\w+/ // this RE is looking for a word character that occures 1 or more times
  const re2 = new RegExp ('\\w+') // when using RE like this you need to escape the backslash

  console.log(re2)
  */


/*
// PROTOTYPES EXPLAINED
//// Languages like PHP use classes instead of this
// Each object in Javascript has a prototype and a prototype is an object itself
// All objects inherit their properties and methods from their prototype

// If you are dealing with object literals, for example, your inheriting from a prototype called object.prototype
// If you are dealing with objects that were made using a constructor, eg Person from previous, your inheriting from Person.prototype 

// There is a thing called a prototype chain

// PERSON CONSTRUCTOR
  function Person(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.birthday = new Date(dob)
    // this.calculateAge = function(){
    //   const diff = Date.now() - this.birthday.getTime()
    //   const ageDate = new Date(diff)
    //   return Math.abs(ageDate.getUTCFullYear() - 1970)
    // }
  }
  
  const jordan = new Person('Jordan', 'Cooper', '11/13/1995')
  const mary = new Person('Mary', 'Johnson', '09/01/1996')

  console.log(mary)

  // within the mary object there is the firstName, lastName, birthday but also __proto__ and within that another __proto__ which represents the object prototype

  // looking at the Person constructor it is clear that each person needs to have their own firstName, lastName and dob so these should be actual properties of the Person. calculateAge will be the same for every person - there is no difference between jordan and mary's calculateAge function. So this is something that we should put into the prototype not directly into the object
  
  // DECLEARING CALCULATE AGE AS A PROTOTYPE METHOD
  Person.prototype.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime()
    const ageDate = new Date(diff)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  console.log(jordan)

  // now calculateAge() is located within the Person.prototype and can still be called as before

  console.log(jordan.calculateAge()) // successfully calls calculateAge()

  // NEW PROTORYPE METHOD - Get full name
  Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
  }

  console.log(mary.getFullName())
  // "We're not flooding our constructor with functions"

  // NEW PROTOTYPE METHOD - Gets married (that manipulates data)
  Person.prototype.getsMarried = function(newLastName) {
    this.lastName = newLastName
  }

  mary.getsMarried('Smith')
  console.log(mary.getFullName())
  // we were getting Mary Johnson now using this new prototype method we have changed the full name to Mary Smith

  // OBJECT PROTOTYPE
  // hasOwnPropety
  console.log(mary.hasOwnProperty('firstName')) // shows true
  console.log(mary.hasOwnProperty('getFullName')) // shows false
*/


/*
// PROTOTYPAL INHERITANCE
// What if you want to have one object or one object type inherit from another
// PERSON CONSTRUCTOR
function Person(firstName, lastName) {
  this.firstName = firstName
  this.lastName = lastName
}

// Create Person.prototype method - Greeting
Person.prototype.greeting  = function() {
  return `Hello ${this.firstName} ${this.lastName}`
}

// Create new Person
const person1 = new Person('John', 'Doe')

// console.log(person1.greeting()) // Shows greeting() as expected

// CUSTOMER CONSTRUCTOR
//// call() is a function that allows us to call another function from somewhere within the current context. First parameter is going to be "this" and then properties in the constructor that we will be inheriting
  function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName)
    this.phone = phone
    this.membership = membership
  }

// Inherit the Person.prototype methods
Customer.prototype = Object.create(Person.prototype)

// Make Customer.prototype return "Customer"
Customer.prototype.constructor = Customer

// Create customer
const customer1 = new Customer('Tom', 'Smith', '027-123-1234', 'Standard')

console.log(customer1)
// If "Make customer.protorype return Customer()" - above, line is commented out __proto__ will be "Person", 
// otherwise __proto__ will be "Customer"

console.log(customer1.greeting()) 
//// If "Inherit the Person prototype methods" - above, line is commented out this function will throw errror,
// otherwise it will work as for Person, see below:

// Tom was not created under Person and is actually a Customer and even though greeting() is part of the Person.prototype we were able to call greeting() because of the link created through Object.create(Person.prototype)

// You should also be able to overwrite Person.prototypes if, for example, you wanted a seperate greeting for Customers
Customer.prototype.greeting = function() {
  return `Hello ${this.firstName} ${this.lastName}, welcome to our company!`
}

console.log(customer1.greeting()) // Shows the new greeting directly above
console.log(person1.greeting()) // Shows as the original Person.greeting()

// Now, any function added to the Person will be accessable to the Customer and that is how we can do inheritance
*/

