var form      = document.getElementById('todo-form');
var toDoList  = document.getElementById('todo-items');
var newToDo   = document.getElementById('todo-add-new');

var toDoArray = [];

var addToDo = function() {
  var txt = newToDo.value;
  toDoArray.push(txt);

  var items = '<li class="todo__item">' + toDoArray.join('</li><li class="todo__item">') + '</li>';
  toDoList.innerHTML = items;
  newToDo.value = '';

  var toDos = document.querySelectorAll('li.todo__item');

  var completeToDo = function() {
    this.classList.toggle("todo__item--complete");
  };

  for(var i = 0; i < toDos.length; i++) {
    toDos[i].addEventListener('click', completeToDo, false);
  }
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
      document.getElementById('error').innerHTML("Please enter a value!");
    } else {
      addToDo();
    }

    return false;
  }
};
