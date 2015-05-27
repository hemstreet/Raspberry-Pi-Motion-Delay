var gpio = require("pi-gpio"),
    duration = 5000,
    toggleLights = null,
    hasTimedOut = false,
    lightsAreOn = false;

//duration = 600000,

function checkForMotion() {

    gpio.read(11, function(err, value) {

        if(err) throw err;

        if(value === 1) {

            if(hasTimedOut) {
                isBack();
            }

            console.log('Motion Detected');
            clearTime();
            toggleLights = setTimeout(timedOut, duration);
        }

        console.log(value);

    });

    setTimeout(checkForMotion, 1000);

}

function isBack() {
    console.log('back');
}

function clearTime() {
    hasTimedOut = false;
    clearTimeout(toggleLights);
}

function timedOut() {

    hasTimedOut = true;
    console.log('Timed out');
}

checkForMotion(); // Kick off the script