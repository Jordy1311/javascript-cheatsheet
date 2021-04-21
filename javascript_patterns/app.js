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


/*
// OBSERVER PATTERN
// allows one to subscribe and unsubscribe to certain events or functionality
// can be used to notify the DOM to update certain elements
function EventObserver() {
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`)
    },
    unsubscribe: function(fn) {
        // filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
        this.observers = this.observers.filter(function(item) {
            if(item !== fn) {
                return item;
            }
        });
        console.log(`You are now unsubscribed from ${fn.name}`)
    },
    fire: function() {
        this.observers.forEach(function(item) {
            item.call();
        });
    }
}

const click = new EventObserver();

// event listeners
document.querySelector('.sub-ms').addEventListener('click', 
    function() {
        click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', 
    function() {
        click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', 
    function() {
        click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', 
    function() {
        click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', 
    function() {
        click.fire();
});

document.querySelector('.clear-console').addEventListener('click', function() {
    console.clear();
    console.log(`by you :)`);
})

// click handler
const getCurMilliseconds = function() {
    console.log(`Current milliseconds: ${new Date().getMilliseconds()}`)
}

const getCurSeconds = function() {
    console.log(`Current seconds: ${new Date().getSeconds()}`)
}
*/


/*
// MEDIATOR PATTERN
// another behavoural pattern
// is an interface to interacte with what are called collegues which are mediated objects
// best example is a chat room

// in this example the chatroom is the mediator and the users are the collegues
const User = function(name) {
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function (message, to) {
        this.chatroom.send(message, this, to);
    },
    receive: function(message, from) {
        console.log(`${from.name} to ${this.name}: ${message}`)
    }
}

const Chatroom = function() {
    let users = {}; // list of users

    return {
        register: function(user) {
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to) {
            if(to) {
                // single user message
                to.receive(message, from)
            } else {
                // mass message
                for(key in users) {
                    if(users[key] !== from) {
                        users[key].receive(message, from);
                    }
                }
            }
        }
    }
}

const john = new User('John');
const james = new User('James');
const joe = new User('Joe');

const chatroom = new Chatroom();

chatroom.register(john);
chatroom.register(james);
chatroom.register(joe);

john.send('Hello James', james);
james.send('Ohh! Hi John!', john);
joe.send('Can I get in on this?')
*/


/*
// STATE PATTERN
// another behavoural pattern
// redux like
// we will have a state which we can change throughout the script
// if you want to do or change certain things in certain states you can do that with this

const PageState = function() {
    let currentState = new homeState(this);

    this.init = function() {
        this.change(new homeState);
    }

    this.change = function(state) {
        currentState = state;
    }
};

// home state
const homeState = function(page) {
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = `
        <div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4">
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
        </div>
    `;
};

// about state
const aboutState = function(page) {
    document.querySelector('#heading').textContent = 'about us';
    document.querySelector('#content').innerHTML = `
        <p>this is some information about us. we are very interesting and you should stick around</p>
    `;
};

// contact state
const contactState = function(page) {
    document.querySelector('#heading').textContent = 'contact us';
    document.querySelector('#content').innerHTML = `
        <form>
            <div class="form-group">
                <label>name</label>
                <input type="text" class="form-control">
            </div>
            <div class="form-group">
                <label>email address</label>
                <input type="email" class="form-control">
            </div>
            <button type="submit" class="btn btn-outline-primary">submit</button>
        </form>
    `;
};

// instantiate pageState
const page = new PageState();

// init first state
page.init();

// UI vars
const home = document.getElementById('home'),
    about = document.getElementById('about'),
    contact = document.getElementById('contact');

// home event listener
home.addEventListener('click', (e) => {
    page.change(new homeState);
    e.preventDefault();
});

// about event listener
about.addEventListener('click', (e) => {
    page.change(new aboutState);
    e.preventDefault();
});

// contact event listener
contact.addEventListener('click', (e) => {
    page.change(new contactState);
    e.preventDefault();
});

// not really an practical example
// usually you would have an edit/list state
*/