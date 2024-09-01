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
  const usernameValue =username.value.trim();
  const emailValue =email.value.trim();
  const passwordValue =password.value.trim();
  const cpasswordValue =cpassword.value.trim();

  if(usernameValue==''){
    setError(username,'Username is required')
  }
  else{
    setSuccess(username);
  }
  if(emailValue==''){
    setError(email,'username is required')
  }
  else{
    setSuccess(email);
  }
  if(password==''){
    setError(password,"password required")
  }
  else if(password.length<8){
    setError(password,'password is not in the order')
  }
  else{
    setSuccess(password)
  }
  if(cpassword==''){
    setError(cpassword,'conform password is required')
  }
  else if(cpassword!==password){
    setError(cpassword, 'conform passowrd does not match')
  }
  else{
    setSuccess(cpassword)
  }

}     


function setError(element,message){
  const inputGroup= element.parentElement;
  const errorElement=inputGroup.querySelector('.error');
  message=errorElement.innerText;
  inputGroup.classList.add('error');
  inputGroup.classList.remove('success')
}

function setSuccess(element){
  const inputGroup= element.parentElement;
  const errorElement=inputGroup.querySelector('.error');
  errorElement.innerText='';
  
  inputGroup.classList.add('success');
  inputGroup.classList.remove('error')
}