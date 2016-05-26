"use strict()";

var list      = document.getElementById('todo-items');
var itemInput = document.getElementById('todo-add-new');

var addToDo = function() {
  var text = itemInput.value;
  var item = document.createElement("li");
  var listLength = list.children.length;
  item.innerHTML = text;
  item.id = "too-doo_" + (listLength + 1);
  item.classList.add("todo__item");
  list.appendChild(item);
  itemInput.value = '';

  var toDoItems = list.innerHTML;
  localStorage.setItem('toDoItems', toDoItems);

  toDoHandlers();

  return false;
};

var completeToDo = function(event) {
  var toDo = event.target;
  if (toDo && toDo.matches("li.todo__item")) {
    toDo.classList.toggle("todo__item--complete");
    var toDoItems = list.innerHTML;
    localStorage.setItem('toDoItems', toDoItems);
  }
};

var validateToDo = function(event) {
  event.preventDefault();
  if(!itemInput.value) {
    document.getElementById('error').innerHTML = "Please enter a value!";
  } else {
    addToDo();
  }
};

var clearToDos = function(event) {
  event.preventDefault();
  window.localStorage.clear();
  location.reload();
  return false;
};

document.getElementById('clear-todos').addEventListener('click', clearToDos, false);

document.getElementById('btn-submit').addEventListener('click', validateToDo, false);

itemInput.onkeydown = function(event) {
  if(event.keyCode == 13) {
    validateToDo(event);
    return false;
  }
};

if(localStorage.getItem('toDoItems')) {
  list.innerHTML = localStorage.getItem('toDoItems');
}

var toDoHandlers = function() {
  list.addEventListener('click', completeToDo, false);
};

window.onload = function(){
  toDoHandlers();
};
