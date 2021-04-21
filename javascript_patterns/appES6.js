// OBSERVER PATTERN ES6
// allows one to subscribe and unsubscribe to certain events or functionality
// can be used to notify the DOM to update certain elements
class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`)
    }

    unsubscribe(fn) {
         // filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
         this.observers = this.observers.filter(function(item) {
            if(item !== fn) {
                return item;
            }
        });
        console.log(`You are now unsubscribed from ${fn.name}`)
    }

    fire() {
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