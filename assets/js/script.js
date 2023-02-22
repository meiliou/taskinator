// create two DOM elements by finding the item via querySelector and specific ID set in html
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
    // passing through the event argument into the function
    // tells the browser not to refresh the whole page.
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    console.log(taskTypeInput);

    // create a list item
    // then append these details to the previously created variable
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    // once we set data in <div>, we append it to the <li> created before.
    listItemEl.appendChild(taskInfoEl);

    // the append entire <li> to list (parent)
    tasksToDoEl.appendChild(listItemEl);
    console.dir(listItemEl);
    
}

// When the button is clicked (event listener) the the following happens (event handler): 
formEl.addEventListener("submit", createTaskHandler);



