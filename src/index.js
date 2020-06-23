document.addEventListener("DOMContentLoaded", () => {
  
  const taskForm = document.getElementById('create-task-form');
  const input = document.getElementById('new-task-description');
  const taskList = document.getElementById('tasks');
  

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let li = document.createElement('li');
    let doneButton = document.createElement('Button');

    li.innerText = input.value 
    doneButton.innerText = "DONE"
    doneButton.onclick = function removeTask() {
      li.remove();
    }

    taskList.appendChild(li);
    li.appendChild(doneButton);

    input.value = " "
  });

});
