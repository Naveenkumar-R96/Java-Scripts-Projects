let count =0;

const value=document.querySelector("#value");
const btns=document.querySelectorAll(".btn");

btns.forEach(function(btn){
  btn.addEventListener("click",function(event){
    changes = event.currentTarget.classList;
    
    if(changes.contains("decrease")){
      count--;
    }
    else if(changes.contains("increase")){
      count++;
    }
    else{
      count=0;
    }
    value.textContent=count;
  })
})