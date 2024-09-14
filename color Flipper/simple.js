const color =["red","blue",'black','yellow',"rgba(223,454,755)","f3f5f7"];

const btn=document.querySelector(".btn");
const colors = document.querySelector('.color');

btn.addEventListener("click",function(){
  const randomNumber=getRandomNumber();
  document.body.style.backgroundColor=color[randomNumber];
  colors.textContent=color[randomNumber]
});

function getRandomNumber(){
  return Math.floor(Math.random() *color.length);

}