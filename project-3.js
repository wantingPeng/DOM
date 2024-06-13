const question=Array.from(document.querySelectorAll('.question'))
const answer=Array.from(document.querySelectorAll('.answer'))
console.log(question)

question.forEach((e,index)=>e.addEventListener('click',function(){
  answer[index].style.height=answer[index].style.height==='0px'?'150px':'0px'
}))
