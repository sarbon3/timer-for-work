const relaxTimer = document.querySelector("#relaxTimer");

let timeId;
const timer = 10;
let amountTime = timer*60;

function calculateTime () {
  let minutes = Math.floor(amountTime/60);
  let seconds = amountTime%60;
  if(seconds<10){
    seconds = "0" + seconds;
  }
  relaxTimer.textContent = `${minutes}: ${seconds}`;
  amountTime --;

  if(amountTime <0){
    stop();
    amountTime  = 0;
  }

  function stop(){
    clearInterval(timeId);
  }
}
timeId = setInterval(calculateTime, 1000)
const button = document.querySelector("#myButton");

button.addEventListener("click", function(){
    document.querySelector("#player").play();
    document.querySelector("#myVideo").play();
})