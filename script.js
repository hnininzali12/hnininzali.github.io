const stopWatchTag= document.getElementsByClassName("stopWatch")[0];
const milliscondTag= document.getElementsByClassName("millisecond")[0];
const startButtonTag= document.getElementById("startButton");
const pauseButtonTag= document.getElementById("pauseButton");
const continueButtonTag= document.getElementById("continueButton");
const restartButtonTag = document.getElementById("restartButton");
let milliseconds=0;
let seconds=0;
let minutes=0;
let hours=0;
const startWatch= ()=>{
    milliseconds+=10;
    if(milliseconds===1000){
    milliseconds=0
    seconds +=1;
    
}
if(seconds===60){
    seconds=0;
    minutes+=1;
}
if(minutes===60){
    minutes=0;
    hours+=1;
}

const millisecondText=milliseconds<10? "00"+ milliseconds.toString(): milliseconds;
const secondText= seconds<10? "0" + seconds.toString(): seconds;
const minuteText= minutes<10? "0" + minutes.toString(): minutes;
const hourText= hours<10? "0" + hours.toString(): hours;
stopWatchTag.textContent= hourText+":"+minuteText+":"+secondText;
milliscondTag.textContent= millisecondText;

}

let intervalId;
startButtonTag.addEventListener("click",()=>{
    clearInterval(intervalId);
    intervalId=setInterval(startWatch,10);
   
})
pauseButtonTag.addEventListener("click",()=>{
    clearInterval(intervalId);
})
continueButtonTag.addEventListener("click",()=>{
   clearInterval(intervalId);
   intervalId=setInterval(startWatch,10);
})
restartButtonTag.addEventListener("click",()=>{
    clearInterval(intervalId);
    (seconds=0,minutes=0,hours=0,milliseconds=0);
    intervalId=setInterval(startWatch,10);
 
 })
