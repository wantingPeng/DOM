// 1 每一秒钟 计数一次second count ++ ,然后60秒 变成minute ++ 然后hours++
//监听start stop button ,点击start icon切换成stop,并且开始计时 点击stop icon 切换成start 并且停止计时
// reset: listen click  tome display =00:00:00
let displayTimer=document.querySelector("#timer");
let stopStartBtn=document.querySelector('#startStopBtn')


let second=0;
let minute=0;
let hours=0;
function time(){
 second++
  if (second>=60){  minute++;second=0}
 if (minute>=60){hours++; minute=0}

second<10?showSecond='0'+second.toString():showSecond=second;
 minute<10?showMinute='0'+minute.toString():showMinute=minute;
  hours<10?showHours='0'+hours.toString():showHours=hours;

displayTimer.innerText=showHours+':'+showMinute+':'+showSecond;
}
let playid=document.querySelector('#play')
let reset=document.querySelector('#reset')

//The event object has a target property which contains information about the element 
//that actually received the event.
stopStartBtn.addEventListener('click',function(e){
if(e.target.getAttribute("id")=="play")
  {  interval=window.setInterval(time,1000);
    stopStartBtn.innerHTML=`<i class="fa-solid fa-pause" id="pause"></i>`;
    //const element=document.getElementById('pause');
    //console.log(element.id)
    
  }
else{
  stopStartBtn.innerHTML=`<i class="fa-solid fa-play" id="play"></i>`;
  clearInterval(interval);
}

})
reset.addEventListener('click',function(){
  displayTimer.innerText="00:00:00";
})

