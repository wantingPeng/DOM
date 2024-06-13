
/* version -----------------------1 */
/* const question=Array.from(document.querySelectorAll('.question'))
const answer=Array.from(document.querySelectorAll('.answer'))
console.log(question)

question.forEach((e,index)=>e.addEventListener('click',function(){
  answer[index].style.height=answer[index].style.height==='0px'?'150px':'0px'
}))
 */
/* version -----------------------2 */

const content=Array.from(document.querySelectorAll('.content'))

content.forEach((el)=>el.addEventListener('click',function(){
el.classList.toggle('active')

}))