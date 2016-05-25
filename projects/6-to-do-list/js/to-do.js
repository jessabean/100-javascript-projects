var form      = document.getElementById('todo-form');
var toDoList  = document.getElementById('todo-items');
var newToDo   = document.getElementById('todo-add-new');
var toDos     = document.querySelectorAll('li.todo__item');

var addToDo = function() {
  var txt = newToDo.value;
  var item = document.createElement("li");
  item.innerHTML = txt;
  item.classList.add("todo__item");
  toDoList.appendChild(item);
  newToDo.value = '';

  var contents = toDoList.innerHTML;
  localStorage.setItem('contents', contents);

  toDoHandlers();

  return false;
};

var completeToDo = function() {
  this.classList.toggle("todo__item--complete");
  contents = toDoList.innerHTML;
  localStorage.setItem('contents', contents);
};


document.getElementById('btn-submit').addEventListener(
  'click',
  function(event){
    event.preventDefault();
    if(!newToDo.value) {
      document.getElementById('error').innerHTML = "Please enter a value!";
    } else {
      addToDo();
    }
  },
  false
);

newToDo.onkeydown = function(event) {
  if(event.keyCode == 13) {
    event.preventDefault();

    if(!newToDo.value) {
      document.getElementById('error').innerHTML = "Please enter a value!";
    } else {
      addToDo();
    }

    return false;
  }
};

if(localStorage.getItem('contents')) {
  toDoList.innerHTML = localStorage.getItem('contents');
}

var toDoHandlers = function() {
  var toDos = document.querySelectorAll('li.todo__item');

  for(var i = 0; i < toDos.length; i++) {
    toDos[i].addEventListener('click', completeToDo, false);
  }
};

window.onload = function(){
  toDoHandlers();
}
