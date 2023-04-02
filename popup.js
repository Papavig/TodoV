let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

function addTodo() {
  var paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling');
  paragraph.innerText = inputField.value;
  toDoContainer.appendChild(paragraph);
  inputField.value = "";
  paragraph.addEventListener('click', function() {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener('dblclick', function() {
    toDoContainer.removeChild(paragraph);
  });
}

addToDoButton.addEventListener('click', addTodo);
inputField.addEventListener('keydown', function(e) {
  if (e.code === "Enter") {
    addTodo();
  }
});
