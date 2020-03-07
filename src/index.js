document.addEventListener("DOMContentLoaded", () => {
  let formElement = document.querySelector('#create-task-form');
  let inputElement = document.querySelector('#new-task-description');
  let ulElement = document.querySelector('#list ul')

  formElement.addEventListener('submit', function(e){
    e.preventDefault();
    let value = inputElement.value;

    let liElement = document.createElement('li');

    let deleteElement = document.createElement('button');
    deleteElement.innerText = 'X';
    deleteElement.addEventListener('click', function(e){
      e.target.parentNode.remove();
    })

    liElement.innerHTML = value;
    liElement.append(deleteElement);
    ulElement.append(liElement);
  });

});
