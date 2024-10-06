//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//event listeners
todoButton.addEventListener('click', addTodo)

//functions
function addTodo(event) {
    //Prevent form from refreshing
    event.preventDefault();
    console.log("added");
    //create todo divs
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create List element
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");

    todoDiv.appendChild(newTodo);

    //Create Complete Button
    const complete = document.createElement("button");
    complete.innerHTML = '<i class="fa-solid fa-check"></i>';
    complete.classList.add("todo-complete");

    todoDiv.appendChild(complete);

    //Create Trash Button
    const trash = document.createElement("button");
    trash.innerHTML = '<i class="fa-solid fa-trash"></i>';
    trash.classList.add("todo-complete");

    todoDiv.appendChild(trash);

    //append to list
    todoList.appendChild(todoDiv);

    //clear the input
    todoInput.value = "";

}
