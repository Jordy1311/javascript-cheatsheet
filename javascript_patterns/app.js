//// MODULE & REVEALING MODULE PATTERN
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