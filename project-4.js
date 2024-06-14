// 1 每一秒钟 计数一次second count ++ ,然后60秒 变成minute ++ 然后hours++

let second=0;
let minute=0;
let hours=0;
function time(){
  second++//?
 
  if (second>=60){  minute++;second=0}
 if (minute>=60){hours++; minute=0}
displayTimer.innerText=hours+':'+minute+':'+second;

}
let displayTimer=document.querySelector("#timer");
console.log(displayTimer);
 console.log(displayTimer.innerText=hours+':'+minute+':'+second);
//window.setInterval(time,1000);
