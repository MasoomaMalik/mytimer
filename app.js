

//  TIMER variables
var hrs;
var mins;
var secs;
var dispHrs = document.getElementById("hrs");
var dispMins = document.getElementById("mins");;
var dispSecs = document.getElementById("secs");;
var interval;
var startBtn = document.getElementById('startBtn')
var stopBtn = document.getElementById('stopBtn')
var resetBtn = document.getElementById('resetBtn')


stopBtn.disabled = true;
resetBtn.disabled = true;
startBtn.disabled = true;
// inputs initially not visible

// setTimer btn
function showInputfields() {
    var a = document.getElementById('hrField')
    a.className += " showInputfields"

    var a = document.getElementById('minField')
    a.className += " showInputfields"

    var a = document.getElementById('secField')
    a.className += " showInputfields"

    var a = document.getElementById('doneBtn')
    a.className += " showInputfields"

}

// tick done btn
function hideInputfields() {
    var a = document.getElementById('hrField')
    a.className = "form-control form-control-sm"

    var a = document.getElementById('minField')
    a.className = "form-control form-control-sm"

    var a = document.getElementById('secField')
    a.className = "form-control form-control-sm"

    var a = document.getElementById('doneBtn')
    a.className = "done"

    startBtn.disabled = false;

}


// HRs min secs valuee extract
function setTime() {
    hrs = +(document.getElementById('hrField').value)
    mins = +(document.getElementById('minField').value)
    secs = +(document.getElementById("secField").value)
    console.log(hrs, mins, secs)

    if (secs > 60 || mins > 60) {
        alert("invalid seconds or minutes")
        document.getElementById('hrField').value = 0;
        document.getElementById('minField').value = 0;
        document.getElementById("secField").value = 0;
      hrs=0;mins=0;secs=0;
    }
    if (secs == "") {
        secs = 0;
    }
    else if (mins == "") {
        mins = 0;
    }

    else if (hrs == "") {
        hrs = 0;
    }

    hideInputfields();
    dispHrs.innerHTML = hrs;
    dispMins.innerHTML = mins;
    dispSecs.innerHTML = secs;


}

// start btn
var totalsecs;
function start() {

    totalsecs = (hrs * 3600) + (mins * 60) + secs;

    i = totalsecs;

    if(mins==0 && secs==0 && hrs==0){
        alert("Enter the time duration to start timer")

         return;
    }

    stopBtn.disabled = false;
    resetBtn.disabled = false;
    startBtn.disabled = true;


    interval = setInterval(function () {


        dispSecs.innerHTML = secs;
        dispMins.innerHTML = mins;
        dispHrs.innerHTML = hrs;
        ind = 2 / i;
        
        var c = document.getElementById("canvas");
        var c1 = c.getContext("2d");
        c1.clearRect(0, 0, canvas.width, canvas.height)

        c1.beginPath();
        c1.arc(150, 75, 30, 0, totalsecs * ind * Math.PI);

        // Fill with gradient
        c1.strokeStyle = "white";
        c1.lineWidth = 8;
        c1.stroke();
        if (hrs == 0 && mins == 0 && secs ==0) {

            clearInterval(interval);
            
            c1.font = "3rem Forte";

            c1.fillStyle = "White";
            c1.textAlign = "center";
            c1.fillText("Time Up", canvas.width / 2, canvas.height / 2);


            stopBtn.disabled = true;
            resetBtn.disabled = true;
            startBtn.disabled = false;
           
           

        }

        if (secs > 0) {

            secs--; totalsecs--;

            

        }


        else if (secs == 0 && mins > 0) {

            mins--; secs = 60;
          
        }
        else if (mins == 0 && hrs > 0) {
            hrs--;
            mins = 60;
            
        }
        
        console.log(secs)

    }, 1000)

}

function stop() {

    stopBtn.disabled = true;
    resetBtn.disabled = false;
    startBtn.disabled = false;
    clearInterval(interval);


}

function reset() {
    dispHrs.innerHTML = 00;
    dispMins.innerHTML = 0;
    dispSecs.innerHTML = 0;
    clearInterval(interval)
    resetBtn.disabled = true;
    startBtn.disabled = false;
}




