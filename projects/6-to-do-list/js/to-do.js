"use strict()";

var list      = document.getElementById('todo-items');
var itemInput = document.getElementById('todo-add-new');

var addToDo = function() {
  var text        = itemInput.value;
  var item        = document.createElement("li");
  var listLength  = list.children.length;
  var itemCheck   = '<input type="checkbox" id="too-doo-check_' + (listLength + 1) + '" />';
  var itemStatus  = '<span class="todo__status">' + itemCheck + '</span>';
  var itemText    = '<span class="todo__text px1">' + text + '</span>';
  var itemAction  = '<span class="todo__remove"><button type="button" class="btn btn--icon"><i class="icon icon--remove"></i></button></span>';

  item.innerHTML = itemStatus + itemText + itemAction;
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
  var check = event.target;
  var toDo = check.parentElement.parentElement;

  if (toDo && toDo.matches("li")) {
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
  list.addEventListener('change', completeToDo, false);
};

window.onload = function(){
  toDoHandlers();
};
