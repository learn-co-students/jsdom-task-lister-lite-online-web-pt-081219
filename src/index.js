// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });

document.getElementById("submit").addEventListener("click", function(e) {
  e.preventDefault();
  let li = document.createElement("li");
  li.innerText = document.getElementById("new-task-description").value;
  console.log(document.getElementById("new-task-description").value);
  let ul = document.getElementById("tasks");
  ul.appendChild(li);
  //ul.appendChild(li);
});