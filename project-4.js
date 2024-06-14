// 1 每一秒钟 计数一次second count ++ ,然后60秒 变成minute ++ 然后hours++

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


let displayTimer=document.querySelector("#timer");

//window.setInterval(time,10);
