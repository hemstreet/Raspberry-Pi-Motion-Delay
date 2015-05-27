var gpio = require("pi-gpio"),
    duration = 5000,
    toggleLights = null;

//duration = 600000,
checkForMotion();

function checkForMotion() {

    var checks = function callFn() {

        gpio.read(11, function(err, value) {

            if(err) throw err;

            if(value === 1) {
                console.log('Motion Detected');
                timeReset(toggleLights, checks);
                return;
            }

            console.log(value);

        });

        setTimeout(checks, 1000);
    };

    toggleLights = setTimeout(function(){
        timedOut(checks);
    }, duration);

    setTimeout(checks, 1000);

}

function timedOut(checks) {

    console.log('Timed out');
    clearTimeout(checks);
    checkForMotion();
}

function timeReset(toggleLights) {
    console.log('Reset time');
    clearTimeout(toggleLights);
    checkForMotion();
}