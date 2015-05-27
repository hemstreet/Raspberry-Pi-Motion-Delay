var gpio = require("pi-gpio"),
    currentDuration = 0,
    duration = 25000,
    interval = 5000;


//duration = 600000,

function checkForMotion() {

    gpio.read(11, function(err, value) {

        if(err) throw err;

        if(value === 1) {
            console.log('Motion Detected');
            currentDuration = 0;
            timeReset();
        }
        else
        {
            currentDuration += interval;
        }

        if(currentDuration == duration) {
            timedOut();
        }

    });

}

function timedOut() {
    console.log('Timed out');
    clearInterval(loop);
    console.log('cleared interval');
    loop = setInterval(checkForMotion, interval);
}

function timeReset() {
    console.log('Reset time');
}

var loop = setInterval(checkForMotion, interval);