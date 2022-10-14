const addButton = document.querySelector("#add-button")
const todoItem =document.querySelector("#todo-items")
const todoList = document.querySelector("#todo-list")
const clearAllButton = document.querySelector("#clear-button")

let todoItems = []

addButton.addEventListener("click", addTodo)
clearAllButton.addEventListener("click",clearAll)

function addTodo() {
    if(todoItem.value==""){
        alert("Please enter a value")
    }
    else {
        todoItems.push(todoItem.value)
        todoItem.value = ""
        renderTodo()
    }   
}

function removeTodo(index){
    todoItems.splice(index, 1)
    renderTodo()
}

function clearAll(){
    if (confirm("Are you sure?")==true){
        todoItems = []
        removeTodo()
    }
}


function renderTodo() {
    todoList.innerHTML = ""
    for(let i=0;i<todoItems.length;i++){
        todoList.innerHTML += `<div id="items"><span> ${todoItems[i]}</span><button id='clearbutton' onclick= "removeTodo(${i})" >x</button> </div>`
    }
}

