let openBtn=document.querySelector('#open-button')
let showContainer=document.querySelector('#bigger-container')
let showMiniCon=document.querySelector('.container')
let closeBtn=document.querySelector('#close-button')

openBtn.addEventListener('click',function(){
showContainer.style.display='block';
})
closeBtn.addEventListener('click',function(){
showContainer.style.display='none';})

window.addEventListener('click',function(e){
  if (e.target === showContainer) {
    showContainer.style.display = 'none';
}
  
  console.log(e.target === showContainer)
})

