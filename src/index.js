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
  

  // list.addEventListener('click', (delete) {
  //     if delete.target.nodeName === 'BUTTON'){
  //         const deleteMe = delete.querySelector('li').id
  //         list.removeChild(list.querySelector(`li#${deleteMe}`));
  //     }
  // });


});
