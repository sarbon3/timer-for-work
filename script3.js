const btnStart = document.querySelector("#startWorking");
const btnStop = document.querySelector("#stopWorking");
const btnReset = document.querySelector("#reset");

const parCountdownWork = document.querySelector("#startWorkingTime");


let timerId;
const timer = 45;
let amountTime = timer*60;

function calculateTime(){
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;
    parCountdownWork.textContent = `${minutes}:${seconds}`;
    amountTime--;
    if(amountTime<0){
        stopTimer()
        amountTime = 0;
    }
}
function stopTimer(){
    clearInterval(timerId);
}

btnStart.addEventListener("click", () => {
    clearInterval(timerId);
    timerId = setInterval(calculateTime,1000);
})

btnStop.addEventListener("click", () => {
    clearInterval(timerId);
})

btnReset.addEventListener("click", () =>{
    clearInterval(timerId);
    location.reload();
})