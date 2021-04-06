// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear tasks event
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

// Add task function
function addTask(e) {
    if(taskInput.value === '') {
        alert('No task added!');
    }

    // Create li element
    const li = document.createElement('li');
    // Add class to li
    li.className = 'collection-item';
    // Create text node & append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class to link
    link.className = 'delete-item secondary-content';
    // Add icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';

    e.preventDefault();
}

// Remove task function
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure??')) {
            e.target.parentElement.parentElement.remove();
        } else {
            alert("Don't be sorry, be careful 😊")
        }
    }
}

// Clear task function
function clearTasks () {
    // Slower (slightly)
    // taskList.innerHTML = '';

    // Faster version of above
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    // https://jsperf.com/innerhtml-vs-removechild
}

// Filter tasks event
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    // Note below: querySelectorAll produces a NodeList which we can use a forEach loop on
    document.querySelectorAll('.collection-item').forEach(function(task) {
         const item = task.firstChild.textContent;
         if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
         } else {
             task.style.display = 'none';
         }
    });
}