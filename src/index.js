document.addEventListener('DOMContentLoaded', () => {
	// your code here
	function list(arg) {
		const list = document.createElement('li');
		const parent = document.querySelector('ul');
		list.innerText = arg; // add text within li tag
		parent.appendChild(list); //add li inside of ul
		const button = document.createElement('button');
		list.appendChild(button); // add button inside of li
		button.innerText = 'X';
		button.addEventListener('click', function(e) {
			// add event listener in list() because then it knows which button it is
			parent.removeChild(list);
		});
	}
	// list('owl');
	const form = document.querySelector('#create-task-form');
	form.addEventListener('submit', function(e) {
		e.preventDefault();
		const input = document.querySelector('#new-task-description');
		list(input.value);
	});
});
