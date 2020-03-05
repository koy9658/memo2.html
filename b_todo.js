const todoform = document.querySelector(".js_todoform");
const todoinput = todoform.querySelector("input");
const todolist = document.querySelector(".js_todolist");
const todo_ls = 'todos';
let todoArr = [];


function deletetodo(event){
  const btn = event.target;
  const li = btn.parentNode;
  todolist.removeChild(li);
  const cleantodo = todoArr.filter(function(todo){
    return todo.id !== parseInt(li.id);
  });
  todoArr = cleantodo
  savelist();
}

function savelist(){
  localStorage.setItem(todo_ls,JSON.stringify(todoArr));
}

function painttodo(text){
  const li=document.createElement("li");
  const delbtn = document.createElement("button");
  const span = document.createElement("span");
  const newid = todoArr.length+1;
  delbtn.innerText = "x";
  delbtn.addEventListener("click",deletetodo);
  span.innerText = text;
  li.appendChild(delbtn);
  li.appendChild(span);
  todolist.appendChild(li);

  li.id = newid;
  const todoobj = {
    text:text,
    id:newid
  };
  todoArr.push(todoobj);
  savelist();
}

function handlesubmit(event)
{
  event.preventDefault();
  const currentvalue = todoinput.value;
  painttodo(currentvalue);
  todoinput.value="";
}

function loadtodo(){
  const loadedtodo = localStorage.getItem(todo_ls);
  if (loadedtodo !== null){
    const parsedtodos = JSON.parse(loadedtodo);
    parsedtodos.forEach(function(todo){
      painttodo(todo.text);
    });
  }
}

function init(){
  loadtodo();
  todoform.addEventListener("submit",handlesubmit);
}
init();
