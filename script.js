var gpio = require("pi-gpio"),
    delay = 600000,
    toggleLights = null;

checkForMotion();

function checkForMotion() {

    function callFn() {

        gpio.read(11, function(err, value) {
            if(err) throw err;
            console.log(value); // The current state of the pin
        });

        setTimeout(callFn, 1000);
    }
    setTimeout(callFn, 1000);


}

function myFunction() {
    toggleLights = setTimeout(function(){ alert("Hello"); }, 3000);
}

function myStopFunction() {
    clearTimeout(toggleLights);
}

//toggleLights = setTimeout("javascript function", delay);