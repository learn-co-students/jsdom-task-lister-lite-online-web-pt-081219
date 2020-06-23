document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  // let description = document.getElementByTagName('input').placeholder;
  const tasks = document.getElementById('tasks');


  form.addEventListener('submit', function() {
    let listItem = document.createElement("li");
    let button = document.createElement("button")
    button.innerHTML = "X";
    listItem.innerHTML = document.getElementById('new-task-description').value;
    tasks.append(listItem);
    listItem.append(" ", button);
    form.reset();
    event.preventDefault();

    button.addEventListener('click', () => {
      tasks.removeChild(listItem);
    });
  });



});


// add li with description of each task under id task 
