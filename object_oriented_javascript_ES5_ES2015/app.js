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


