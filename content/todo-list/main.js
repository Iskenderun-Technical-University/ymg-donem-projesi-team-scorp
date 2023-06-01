// variables
const todoInput = document.querySelector(".form-input");
const todoForm = document.querySelector(".form");
const searchInput = document.querySelector(".look-input");
const todoOutput = document.querySelector(".output");


//functions
const addTodo = (e) => {
    e.preventDefault();
    const todo = todoInput.value;
    if(todo){
        const id = Date.now();
        addTodoToLocalStorage({id, todo, completed: false});
        const todoItem = document.createElement("div");
        todoItem.className = `item ${id}`;
        todoItem.innerHTML= 
        `
                <input type="checkbox" class="check">
                <input type="text" class="text" value=${todo} disabled>
                <button class="edit">Düzenle</button>
                <button class="delete">Sil</button>
        `;  
        todoOutput.appendChild(todoItem);
        todoInput.value = "";  
    };
};

const searchTodo = (e) => {
    const searchText = e.target.value.toLowerCase();
    const todoItems = document.querySelectorAll(".item");
    todoItems.forEach(todoItem => {
        const todo = todoItem.querySelector(".text").value.toLowerCase();
        if(todo.indexOf(searchText) !==  -1){
            todoItem.style.display = "grid";
        }   else{
            todoItem.style.display = "none";
        }
    })
};

const editTodo = (e) => {
    if(e.target.className === "edit"){
        const id = e.target.parentElement.classList[1];
        const todoText = e.target.parentElement.querySelector(".text");
        if(todoText.disabled) {
            todoText.disabled = false; 
            e.target.textContent = "Kaydet";
        }
        else{
            todoText.disabled = true;
            e.target.textContent = "Düzenle";
            editTodoInLocalStorage(id,todoText.value);
        }
    }
};

const getTodo = (e) => {
    let tasks = localStorage.getItem("tasks");
    if(tasks) {
        tasks = JSON.parse(tasks);
        tasks.forEach((task) => {
            const todoItem = document.createElement("div");
            todoItem.className = `item ${task.id}`; 
            todoItem.innerHTML = 
            ` 
            <input type="checkbox" class="check" ${task.completed ? "checked" : ""}>
            <input type="text" class="text ${task.completed ? "hit" : ""}" value=${todo} disabled>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button> })}}
            `;
            todoOutput.appendChild(todoItem);
        });
    }
};

const checkedTodo = (e) => {
    if(e.target.className === "check"){
        const id = e.target.parentElement.classList[1];
        const checked = e.target.checked;

        if(checked){
           e.target.nextElementSibling.style.textDecoration = "line-through";
        }
        else{  
           e.target.nextElementSibling.style.textDecoration = "none";
       }
       let tasks = JSON.parse(localStorage.getItem("tasks"));
       tasks = tasks.map(task => {
           if(task.id === parseInt(id)){
               task.completed = checked;
           }
           return task;
       });
       localStorage.setItem("tasks", JSON.stringify(tasks));
   }
};

const deleteTodo = (e) => {
    if(e.target.className === "delete"){
        deleteTodoFromLocalStorage(e.target.parentElement.classList[1]);
        e.target.parentElement.remove();
    }
};

const editTodoInLocalStorage = (id, todo) => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = tasks.map( task => {
         if(task.id === parseInt(id)){
            task.todo = todo;
         }
         return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

const deleteTodoFromLocalStorage = (id) => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks = tasks.filter((task) => task.id !== parseInt(id));
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

const addTodoToLocalStorage = (todo) => {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if(!tasks){
        tasks = [];
    }
    tasks.push(todo);    
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


//eventlisteners
todoOutput.addEventListener("click", checkedTodo);
todoForm.addEventListener("submit", addTodo);
document.addEventListener("DOMContentLoaded", getTodo);
todoOutput.addEventListener("click", deleteTodo);
todoOutput.addEventListener("click", editTodo);
searchInput.addEventListener("keyup", searchTodo);
