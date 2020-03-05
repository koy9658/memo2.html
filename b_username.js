const usernameform = document.querySelector(".js_form");
const usernameinput = usernameform.querySelector("input");
const username = document.querySelector(".js_username");
const USER_LS ="currentUser";
const SHOWING_CN = "showing";

function saveName(text){
  localStorage.setItem(USER_LS,text);
}

function handleSubmit(event)
{
  event.preventDefault();
  const currentValue = usernameinput.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  usernameform.classList.add(SHOWING_CN);
  usernameform.addEventListener("submit",handleSubmit);
}

function paintGreeting(text){
  usernameform.classList.remove(SHOWING_CN);
  username.classList.add(SHOWING_CN);
  username.innerText = `안녕하세요 ${text}님`;
}

function loadName()
{
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null){
      askForName();
    }else{
      paintGreeting(currentUser);
    }
}

function init()
{
  loadName();
}

init();
