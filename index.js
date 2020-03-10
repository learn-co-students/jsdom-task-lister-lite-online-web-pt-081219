document.addEventListener("DOMContentLoaded", function(){
    console.log("hello");
    let myForm = document.getElementById("create-task-form");
    myForm.addEventListener("submit", createNewTask);
})

const createNewTask = event => {
    const myTask = document.getElementById("tasks");
    console.log(`${newTask.innerText}`);
    event.preventDefault();
    const newTaskDescription = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value; 
    myTask.appendChild(newTask);
}