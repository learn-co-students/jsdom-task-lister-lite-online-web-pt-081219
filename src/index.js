document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let comment_form = document.getElementById('create-task-form');
  let comment_section = document.getElementById('tasks');


  comment_form.addEventListener('submit', (event)=>{
    let new_comment = document.createElement('li');
    new_comment.innerText= document.getElementById('new-task-description').value;
    comment_section.appendChild(new_comment);
    event.preventDefault();
  })
});
