var form      = document.getElementById('todo-form');
var toDoList  = document.getElementById('todo-items');
var newToDo   = document.getElementById('todo-add-new');

var addToDo = function() {
  var txt       = document.createTextNode(newToDo.value);
  var item      = document.createElement("li");
  var count     = toDoList.children.length;

  if(newToDo.value) {
    item.appendChild(txt);
    item.id = "todo-item-" + (count + 1);
    toDoList.appendChild(item);
    newToDo.value = "";
  };
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
