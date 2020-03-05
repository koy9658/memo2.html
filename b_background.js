const body = document.querySelector("body");
const img_num = 3;


function paintimage(img_num){
  const image = new Image();
  image.src = `1.jpg`;
  image.classList.add("backgroundimg");
  body.prepend(image);
}

function genRandom()
{
  const number = Math.floor(Math.random()*img_num);
  return number;
}

function init(){
  const randomNumber = genRandom();
  paintimage(randomNumber);
}
init();
