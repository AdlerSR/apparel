var button = document.querySelector('#button');
var input = document.querySelector('#input');
var icon = document.querySelector('#icon');

button.addEventListener('click', function(e){
  e.preventDefault();

  var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

  if(!reg.test(input.value)){
    input.classList.add('error');
    icon.classList.add('icon-error-block')
  }
  else{
    input.classList.remove('error');
    icon.classList.remove('icon-error-block')
  }
  
})