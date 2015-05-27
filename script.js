var gpio = require("pi-gpio"),
    duration = 600000,
    toggleLights = null,
    hasTimedOut = false;

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