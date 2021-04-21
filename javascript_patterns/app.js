//// MODULE & REVEALING MODULE PATTERN
// is broken up code into modules that have private methods/functions and then subsequently have parts that are revealed
/* basic structure
    (function() {
        // Declear private vars & functions

        return {
            // Declear public vars & functions

        }
    })();
*/

/*
// STANDARD MODULE PATTERN
const UICtrl = (function() {
    let text = 'Hello world'

    const changeText = function() {
        const element = document.querySelector('h1');
        // within this function you can still access the things that are in this private section (eg: element.textContent = text;)
        element.textContent = text;
    }

    return {
        // what we return will be made accessable from outside of this function
        callChangeText: function() {
            changeText();
            console.log(text);
        }
    }
})();

// you can do this because this function was returned
// UICtrl.callChangeText();

// you cannot do this because it is private to the UI module
// UICtrl.changeText();
// console.log(UICtrl.text); // will return undefined
*/

/*
// REVEALING MODULE PATTERN
const ItemCtrl = (function() {
    let data = [];

    function add(item) {
        data.push(item);
        console.log('Item added...')
    }

    function get(id) {
        return data.find(item => {
            return item.id === id;
        })
    }
    // at this point these two functions are private to the module

    return {
        add: add,
        get: get
    }
    // this return is making the two functions public/available outside of the module. If any were not included they would not be able to be called outside of this module
    // this pattern, as opposed to the standard pattern, is making functions available via an object literal
    // looks cleaner
})();

// accessing both of these as has been made available above
ItemCtrl.add({id: 1, name: 'John'});
console.log(ItemCtrl.get(1));
*/


/*
////  SINGLETON PATTERN
// you cant have more than 1 unique instance from this pattern
// a singleton object is an immediate anon. function and it can only return one instance of an object at a time - repeated calls to the constructor will return the same instance -  like the module patter it has a private functions
// one user object created at a time - prevent two users being made at once
// often frowned upon because they give a global point of access rather than embrasing encapsulation
// hard to debug

const Singleton = (function() {
    let instance;

    function createInstance() {
        const object = new Object({name: 'John'});
        return object;
    }

    return {
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA);
console.log(instanceB);
console.log(instanceA === instanceB);
// you can have more than one instance from the Singleton but they will be the same as above
*/


/*
// FACTORY PATTERN
// way of creating an interface that creates objects but let subclasses define which classes to instantiate
// member - paid member (different types but still have the same methods)

function MemberFactory() {
    this.createMember = function(name, type) {
        let member;

        if(type === 'simple') {
            member = new SimpleMembership(name);
        } else if(type === 'standard') {
            member = new StandardMembership(name);
        } else if(type === 'super') {
            member = new SuperMembership(name);
        }

        member.type = type;

        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        }

        return member;
    }
}

const SimpleMembership = function(name) {
    this.name = name;
    this.cost = '$5';
}

const StandardMembership = function(name) {
    this.name = name;
    this.cost = '$15';
}

const SuperMembership = function(name) {
    this.name = name;
    this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Chris Jackson', 'super'));
members.push(factory.createMember('Janice Williams', 'simple'));
members.push(factory.createMember('Tom Smith', 'standard'));

// console.log(members)
members.forEach(function(member) {
    member.define();
});
*/