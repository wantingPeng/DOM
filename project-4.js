// 1 每一秒钟 计数一次second count ++ ,然后60秒 变成minute ++ 然后hours++
//监听start stop button ,点击start icon切换成stop,并且开始计时 点击stop icon 切换成start 并且停止计时
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
let pauseid=document.querySelector('#pause')
console.log(pauseid)

playid.addEventListener('click',function(e){
  //interval=window.setInterval(time,1000);
  playid.remove();
  stopStartBtn.innerHTML=`<i class="fa-solid fa-pause" id="pause"></i>`

})
pauseid.addEventListener('click',function(e){
  
  pauseid.remove();
}) 

//
