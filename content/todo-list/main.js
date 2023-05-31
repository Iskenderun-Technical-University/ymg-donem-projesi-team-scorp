// variables
const todoInput = document.querySelector(".form-input");
const todoForm = document.querySelector(".form");
const searchInput = document.querySelector(".form-input");
const todoOutput = document.querySelector(".output");


//functions
const addTodo = (e) => {
    e.preventDefault();
    const todo = todoInput.ariaValueMax;
    if(todo){
        const id = Date.now();
        addTodoToLocalStorage({id, todo, completed: false});
        const todoItem = document.createElement("div");
        todoItem.className = `item ${id}`;
        todoItem.innerHTML `
                <input type="checkbox" class="check">
                <input type="text" class="text" value=${todo} disabled>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
        `;  
        todoOutput.appendChild(todoItem);
        todoInput.value = "";  
    };
};
/*
const deleteTodo = (e) => {};

const checkedTodo = (e) => {};

const editTodo = (e) => {};

const getTodo = (e) => {};

const searchTodo = (e) => {};
*/

//eventlisteners
todoForm.addEventListener("submit", addTodo);

//stodoOutput.addEventListener("click", deleteTodo);
//stodoOutput.addEventListener("click", checkedTodo);
//stodoOutput.addEventListener("click", editTodo);
//document.addEventListener("DOMContentLoaded", getTodo);
//searchInput.addEventListener("keyup", searchTodo);

//<script src="./content/todo-list/main.js"></script>