document.addEventListener("DOMContentLoaded", () => {
  let submit = document.querySelector("#create-task-form > input[type=submit]:nth-child(3)");
  let ul = document.querySelector("#tasks");
  // let newLi = document.createElement("li");
  let inputValue
  function newLi() {
    return document.createElement("li");
    }

  function addTodo() {
    let newTodo =  ul.appendChild(newLi())
    newTodo.innerText = `${inputValue}`
  };
  
  submit.addEventListener("click", function(e) {
    inputValue = document.querySelector("#new-task-description").value;
    addTodo();
    e.target.reset();
    e.preventDefault();
    renderApp();
}, false);
});



// document.querySelector("#id-checkbox").addEventListener("click", function(event) {
//   document.getElementById("output-box").innerHTML += "Sorry! <code>preventDefault()</code> won't let you check this!<br>";
//   event.preventDefault();
// }, false);
