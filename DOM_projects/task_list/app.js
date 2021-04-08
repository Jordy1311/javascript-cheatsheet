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
    // DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear tasks event
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

// Get tasks from local storage
function getTasks() {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        // Create li element
        const li = document.createElement('li');
        // Add class to li
        li.className = 'collection-item';
        // Create text node & append to li
        li.appendChild(document.createTextNode(task));
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
    });
}

// Add task function
function addTask(e) {
    if(taskInput.value === '') {
        alert('No task added!');
    } else {
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

    // Store in local storage
    storeTaskInLocalStorage(taskInput.value);

    // Clear input
    taskInput.value = '';
    }
    e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove task function
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Are you sure??')) {
            e.target.parentElement.parentElement.remove();

            // Remove from local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        } else {
            alert("Don't be sorry, be careful 😊");
        }
    }
}

// Remove from local storage
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index) {
        if(taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear task function
function clearTasks () {
    if(confirm('Are you sure??')) {
            // Slower (slightly)
            // taskList.innerHTML = '';

            // Faster version of above
            while(taskList.firstChild) {
                taskList.removeChild(taskList.firstChild);
            }

            // https://jsperf.com/innerhtml-vs-removechild

            // Clear from local storage
            clearTasksFromLocalStorage();
    }
}

// Clear tasks from local storage
function clearTasksFromLocalStorage() {
    localStorage.clear();
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