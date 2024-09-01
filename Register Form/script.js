const form = document.querySelector(".form");
const email = document.querySelector(".email");
const username = document.querySelector(".username");
const password = document.querySelector(".password");
const cpassword = document.querySelector(".cpassword");
const button = document.querySelector(".button")

form.addEventListener('submit',(event)=>{

  event.preventDefault();
  validateInput();
});

function validateInput(){
  const usernameValue =username.ariaValueMax.trim();
  const emailValue =email.ariaValueMax.trim();
  const passwordValue =password.ariaValueMax.trim();
  const cpasswordValue =cpassword.ariaValueMax.trim();
}     