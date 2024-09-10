const form= document.querySelector(".form");
const username=document.querySelector(".username")
const email= document.querySelector(".email");
const password=document.querySelector(".password");
const cpassowrd=docment.querySelector('.confirm-password');

form.addEventListener('submit',e=>{
  e.preventDefault();
  validateInput();
});

function validateInput(){

const unsernameValue=username.value.trim();
const emailValue=email.value.trim();
const passwordValue=password.value.trim();
const cpassowrd=passowrd.value.trim();


if(unsernameValue==''){
  setError(username,"Username is required")
}
else{
  setSuccess(username);
}



};
function setError(element,message){
  const inputGroup=element.parentElement;
  const errorElement=inputGroup.querySelector('.error');
  message= errorElement.innertext;
  inputGroup.classList.add('error');
  inputGroup.classList.remove('success')
}