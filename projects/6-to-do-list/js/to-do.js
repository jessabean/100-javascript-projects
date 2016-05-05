var form      = document.getElementById('todo-form');
var toDoList  = document.getElementById('todo-items');
var newToDo   = document.getElementById('todo-add-new');

var addToDo = function() {
  var txt       = document.createTextNode(newToDo.value);
  var item      = document.createElement("li");
  
  item.appendChild(txt);
  toDoList.appendChild(item);
  newToDo.value = "";
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
  };
};
