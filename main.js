var statusGo = 0; //0:stop 1:running
var time = 0;

function startProcess(){
    statusGo = 1;
    document.getElementById("startButton").disabled = true;
    timer();
}
function stopProcess(){
    statusGo = 0;
    document.getElementById("startButton").disabled = false;
}
function resetProcess(){
    statusGo = 0;
    time = 0;
    document.getElementById('timer').innerHTML = '00:00:00';
    document.getElementById("startButton").disabled = false;
}
function timer(){
    if(statusGo == 1){
        setTimeout(function(){
            time++;
            var min = Math.floor(time/100/60);
            var sec = Math.floor(time/100);
            var mSec = time % 100;

            if(min < 10) {
                min = "0" + min;
            }
            if(sec >= 60) {
                sec = sec % 60;
            }
            if(sec < 10) {
                sec = "0" + sec;
            }

            document.getElementById('timer').innerHTML = min + ":" + sec + ":" + mSec;
            timer();
        }, 10);
    }
}
