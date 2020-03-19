document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.querySelector('form#create-task-form');
  const submit = form.querySelector('input[type="submit"]');
  const list = document.querySelector('div#list ul#tasks');


  

  submit.addEventListener('click', function(event) {
      event.preventDefault();
      const task = form.querySelector('input#new-task-description').value;
      document.querySelector('ul#tasks').innerHTML += `<li id="${task}">${task} <button id="${task}">X</button></li>`;
  });
  
  function deleteMe(event) {
    let deleteId = list.querySelector(`li#${event.target.id}`);
    list.removeChild(deleteId);
  };
  list.addEventListener('click', deleteMe);

});
