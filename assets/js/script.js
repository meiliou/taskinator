// create two DOM elements by finding the item via querySelector and specific ID set in html
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
// passing through the event argument into the function
// tells the browser not to refresh the whole page.
    event.preventDefault();

// create a list item that has the look/feel and content as looked up
// then append these details to the previously created variable
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
// end up with html that looks like it has another list item.
}

// When the button is clicked (event listener) the the following happens (event handler): 
formEl.addEventListener("submit", createTaskHandler);



