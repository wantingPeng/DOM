
//add event listener at <button id="add-task"> 
//when click>>create  <div id task> <button id check-box>check box and  <button> bin at end first get element task-container,, then append all in it
//mean while <div class task> take value form Enter Task

//add event listener at 

const addTask=document.querySelector('#add-task')
const taskContainer=document.querySelector('#task-container')
const inputTask=document.querySelector('#input-task')
/* addTask.addEventListener('click', function(){
const tastContainer=document.createElement('div')
tastContainer.classList.add('tastContainer'); */
function plusBtnClick(){

  if (inputTask.value==''){
    alert('Please Enter a Task')
    addTask.removeEventListener('click', plusBtnClick)
  }else if (inputTask.value!==''){
    const task=document.createElement('div')
    task.innerText=`${inputTask.value}`
    task.setAttribute('id','task')
    taskContainer.append(task)
  
    const checkBox=document.createElement('button')
    checkBox.setAttribute('id','check-box')
    checkBox.innerHTML='<i class="fa-solid fa-check"></i>';
    console.log(checkBox.id)
    taskContainer.append(checkBox)
    console.log(checkBox)
  
    const bin=document.createElement('button')
    bin.innerHTML='<i class="fa-solid fa-trash-can"></i>';
    bin.setAttribute('id',"bin" )
    taskContainer.append(bin)
  
  }
  
}
addTask.addEventListener('click', plusBtnClick)


