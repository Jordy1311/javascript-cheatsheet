/* EXAMINING THE DOCUMENT OBJECT
  let val;

  val = document;
  val = document.all;
  val = document.all[2];
  val = document.all.length;
  val = document.head;
  val = document.body;
  val = document.doctype;
  val = document.domain;
  val = document.URL;
  val = document.characterSet;
  val = document.contentType;

  val = document.forms;
  val = document.forms[0];
  val = document.forms[0].id;
  val = document.forms[0].method;
  val = document.forms[0].action;

  val = document.links;
  val = document.links[0];
  val = document.links[0].id;
  val = document.links[0].className;
  val = document.links[0].classList[0];

  val = document.images;

  val = document.scripts;
  val = document.scripts[2].getAttribute('src');

  let scripts = document.scripts;

  let scriptsArr = Array.from(scripts);

  scriptsArr.forEach(function(script) {
    console.log(script.getAttribute('src'));
  });

  console.log(val);
*/

/* DOM SELECTORS FOR SINGLE ELEMENTS
  // document.getElementById()
  //   console.log(document.getElementById('task-title'));

  // // Get things from the element
  //   console.log(document.getElementById('task-title').id);
  //   console.log(document.getElementById('task-title').className);

  // const taskTitle = document.getElementById('task-title');
  
  // // Change styling
  //   taskTitle.style.background = '#333';
  //   taskTitle.style.color = '#fff';
  //   taskTitle.style.padding = '5px';
  //   // taskTitle.style.display = 'none';

  // // Change content
  //   taskTitle.textContent = 'Task List';
  //   taskTitle.innerText = 'My Tasks';
  //   taskTitle.innerHTML = '<span style="color:red">Task List</span>'; // Insert HTML

  // document.querySelector()

    console.log(document.querySelector('#task-title'));
    console.log(document.querySelector('.card-title'));
    console.log(document.querySelector('h5')); // Will only select first element as specified

    // Will only make changes to first element as specified
      document.querySelector('li').style.color = 'red';
      document.querySelector('ul li').style.color = 'blue';

    // To select last use css sudo classes
    document.querySelector('li:last-child').style.color = 'red';
    document.querySelector('li:nth-child(3)').style.color = 'yellow';
    document.querySelector('li:nth-child(4)').textContent = 'Hello World';
    document.querySelector('li:nth-child(odd)').style.background = '#ccc'; // will only select first "odd"
    document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';  // will only select first "even"
*/


/* DOM SELECTORS FOR MULTIPLE ELEMENTS
  // document.getElementsByClassName  
    // const items = document.getElementsByClassName('collection-item');
    // console.log(items);

    // console.log(items[0]);
    // items[0].style.color = 'red';
    // items[3].textContent = 'Hello World';

    // const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
    // console.log(listItems); // Produces same as above but if class name was outside of querySelector then it will not show

  // document.getElementsByTagName
    //   let lis = document.getElementsByTagName('li');
    //   console.log(lis);

    //   console.log(lis[0]);
    //   lis[0].style.color = 'red';
    //   lis[3].textContent = 'Hello World';

    // // Convert HTML Collection into Array
    // lis = Array.from(lis);

    // lis.reverse();

    // lis.forEach(function(li, index){
    //   console.log(li.className);
    //   li.textContent = `${index}: Hello`;
    // });

    // console.log(lis);

  // document.querySelectorAll
    const items = document.querySelectorAll('ul.collection li.collection-item');

    items.forEach(function(item, index){
      item.textContent = `${index}: Hello`;
    });

    const liOdd = document.querySelectorAll('li:nth-child(odd)');
    const liEven = document.querySelectorAll('li:nth-child(even)');

    liOdd.forEach(function(li, index){
      li.style.background = '#ccc';
    });

    for(let i = 0; i < liEven.length; i++){
      liEven[i].style.background = 'f4f4f4';
    }

    console.log(items);
*/


/* TRAVERSING THE DOM
  let val;

  const list = document.querySelector('ul.collection');
  const listItem = document.querySelector('li.collection-item:first-child');

  val = listItem;
  val = list;

  // Get child nodes (Nodelist) - includes line-breaks at "text" items
    val = list.childNodes;
    val = list.childNodes[0];
    val = list.childNodes[0].nodeName;
    val = list.childNodes[1].nodeType;

    // 1 - Element
    // 2 - Attribute (deprecated)
    // 3 - Text node
    // 8 - Comment
    // 9 - Document itself
    // 10 - Doctype

  // Get children element nodes (HTML collection) - doesnt include line-breaks at "text" items
    val = list.children;
    val = list.children[1]; // Can select
    list.children[1].textContent  = 'Hello';

  // Children of children
    val = list.children[3].children;
    val = list.children[3].children[0].id = 'test-link';
    val = list.children[3].children[0];

  // First child
    val = list.firstChild; // Like childNodes - will give you line-breaks as "text" items
    val = list.firstElementChild; // You can instead use this is you only want elements

  // Last child
    val = list.lastChild; // As above for firstChild and firstElementChild
    val = list.lastElementChild; 

  // Count child elements
    val = list.childElementCount;


  // Get parent node
    val = listItem.parentNode;
    val = listItem.parentElement; // In most cases Element will be the same as Node
    val = listItem.parentElement.parentElement; // Parent of parent

  
  // Get next sibling
    val = listItem.nextSibling; // Like nodes, will include line-breaks as "text" items
    val = listItem.nextElementSibling;
    val = listItem.nextElementSibling.nextElementSibling;

  // Get previous sibling
    val = listItem.previousSibling; // Like nodes, will include line-breaks as "text" items
    val = listItem.previousElementSibling;
  
  // You can link together to move around

  console.log(val);
*/


/* CREATING ELEMENTS
  // Create Element
    const li = document.createElement('li');

  // Add class
    li.className = 'collection-item';

  // Add id
    li.id = 'new-item';

  // Add attribute
    li.setAttribute('title', 'New Item');

  
  // Create text node and append
    li.appendChild(document.createTextNode('List Item - Created with Javascript'));

  // Create new link element
    const link = document.createElement('a');
    // Add classes
      link.className = 'delete-item secondary-content';
    // Add icon html within a tag
      link.innerHTML = '<i class="fa fa-remove"></i>'
    // Append link into li
      li.appendChild(link);

  // Append li as child to ul
    document.querySelector('ul.collection').appendChild(li);

  console.log(li);
*/


/* REMOVING & REPLACING ELEMENTS
  // REPLACE ELEMENT
    // Create Element
      const newHeading = document.createElement('h2');
    // Add id
      newHeading.id = 'task-title';
    // New text node
      newHeading.appendChild(document.createTextNode('Task List - Created in Javascript'));

    // Get old heading to be replaced
      const oldHeading = document.getElementById('task-title');
    // Get parent 
      const cardAction = document.querySelector('.card-action');

    // Replace oldHeading with newHeading
      cardAction.replaceChild(newHeading, oldHeading);

      // console.log(newHeading)
  
  
  // REMOVE ELEMENT
    const lis = document.querySelectorAll('li');
    const list = document.querySelector('ul');

    // Remove list item
      lis[0].remove();

    // Remove child element
      list.removeChild(lis[3]);

  // CLASSES & ATTR
    const firstLi = document.querySelector('li:first-child');
    const link = firstLi.children[0];

    let val;

    // Classes
      val = link.className; // Shows classes
      val = link.classList; // DOM token list of classes
      val = link.classList[0];
      link.classList.add('test'); // Add class
      val = link;
      link.classList.remove('test'); // Remove class
      val = link;
    
    // Attributes
      val = link.getAttribute('href'); // Returns attribute - href
      val = link.setAttribute('href', 'http://google.com'); // Changes attribute - href
      val = link.hasAttribute('href'); // Tests for attribute (true/false)

      link.setAttribute('title', 'Google'); // Add attribute - title
      val = link.hasAttribute('title');
      link.removeAttribute('title'); // Remove attribute - title
      val = link.hasAttribute('title');

    console.log(val);
    console.log(link);
*/


/* EVENT LISTENERS & THE EVENT OBJECT
  // Event listener with anon. function
    // document.querySelector('.clear-tasks').addEventListener('click',
    // function(e){
    //   console.log('"Clear Tasks" has been clicked!')

    //   e.preventDefault(); // This can be replaced with "#" but if you need an address for the link you will need to prevent default action
    //   });

  // Event listener with named function
    document.querySelector('.clear-tasks').addEventListener('click', onClick); // Different events: click/mouseover

    function onClick(e) {
      // console.log('"Clear Tasks" has been clicked using onClick();');
      e.preventDefault();
      let val;

      val = e;

      // Event target element
        val = e.target; // This gives the target element of onClick()
        val = e.target.id; // Can get id of the target
        val = e.target.className; 
        val = e.target.classList; // Provides the above in a DOM Token List

        // e.target.innerText = 'Hello'; // Changes the inner text of e.target (event's target when onClick()
      
      // Event type
        val = e.type;

      // Event timestamp
        val = e.timeStamp;

      // Event Coords reletive to the window (where in the window)
        val = e.clientY;
        val = e.clientX;

      // Event Coords reletive to the element (where in the element)
        val = e.offsetY;
        val = e.offsetX;

    console.log(val);
    };
*/


/* MOUSE EVENTS
  const clearBtn = document.querySelector('.clear-tasks');
  const card = document.querySelector('.card');
  const heading = document.querySelector('h5');

  // Click
    // clearBtn.addEventListener('click', runEvent);
  // Doubleclick
    // clearBtn.addEventListener('dblclick', runEvent);

  // Mousedown - clicking and holding
    // clearBtn.addEventListener('mousedown', runEvent);
  // Mouseup - runs as click is released
    // clearBtn.addEventListener('mouseup', runEvent);

  // Mouseenter - entering main element - can be used in other situations other than buttons??
    // card.addEventListener('mouseenter', runEvent);
  // Mouseleave - leaving main element
    // card.addEventListener('mouseleave', runEvent);
  // Mouseover - mouse over specifically that element and none other
    // card.addEventListener('mouseover', runEvent);
  // Mouseout - mouse leaving specified element even if on another element
    // card.addEventListener('mouseout', runEvent);

  // Mousemove - px count movements within element
    card.addEventListener('mousemove', runEvent);
  
  // Event handler
    function runEvent(e) {
      console.log(`EVENT TYPE: ${e.type}`);

      heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

      document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
    }
*/