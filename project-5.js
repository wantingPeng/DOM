
//add event listener at <button id="add-task"> 
//when click>>create  <div id task> <button id check-box>check box and  <button> bin at end first get element task-container,, then append all in it
//mean while <div class task> take value form Enter Task

// if there are no input then alert() and every time click, keep poping alert()
//till people type in , append the above 3 elements in container

//add event listener at check box when click it then style.textDecoration = "line-through"
//add event listener at bin when click it then remove the <div id="task-container"></div>

const addTask=document.querySelector('#add-task')
const taskContainer=document.querySelector('#task-container')
const inputTask=document.querySelector('#input-task')
const container=document.querySelector('.container')
/* addTask.addEventListener('click', function(){
const tastContainer=document.createElement('div')
tastContainer.classList.add('tastContainer'); */
function plusBtnClick(){

  if (inputTask.value==''){
    alert('Please Enter a Task')
   
  }else{
    const taskContainer=document.createElement('div')
    taskContainer.setAttribute("id", 'task-container')
    container.append(taskContainer)

    const task=document.createElement('div')
    task.innerText=`${inputTask.value}`
    task.setAttribute('id','task')
    taskContainer.append(task)
  
    const checkBox=document.createElement('button')
    checkBox.setAttribute('id','check-box')
    checkBox.innerHTML='<i class="fa-solid fa-check"></i>';
    taskContainer.append(checkBox)
    
  
    const bin=document.createElement('button')
    bin.innerHTML='<i class="fa-solid fa-trash-can"></i>';
    bin.setAttribute('id',"bin" )
    taskContainer.append(bin)

    checkBox.addEventListener('click',handleCheckBox)
    bin.addEventListener('click',function(){
      taskContainer.remove()
    })
  }
  }

addTask.addEventListener('click', plusBtnClick)

function handleCheckBox(){
  task.style.textDecoration = "line-through";
}




