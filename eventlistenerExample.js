const rebealBtn=document.querySelector('.reveal-btn');
const hiddenContent=document.querySelector('.hidden-content');//?

rebealBtn.addEventListener("click",reveal)

function reveal(){

  if (hiddenContent.classList.contains('reveal-btn')){
    hiddenContent.classList.remove('reveal-btn')
  }else{
    hiddenContent.classList.add('reveal-btn')
}}