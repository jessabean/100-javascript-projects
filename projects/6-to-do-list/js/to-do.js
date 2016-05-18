var form      = document.getElementById('todo-form');
var toDoList  = document.getElementById('todo-items');
var newToDo   = document.getElementById('todo-add-new');

var toDoArray = [];

var addToDo = function() {
  var txt = newToDo.value;
  toDoArray.push(txt);

  var items = '<li>' + toDoArray.join('</li><li>') + '</li>';
  toDoList.innerHTML = items;
  newToDo.value = '';
};


document.getElementById('btn-submit').addEventListener(
  'click', 
  function(event){
    event.preventDefault();
    addToDo();
  },
  false
);

newToDo.onkeydown = function(event) {
  if(event.keyCode == 13) {
    event.preventDefault();
    addToDo();
    return false;
  }
};
