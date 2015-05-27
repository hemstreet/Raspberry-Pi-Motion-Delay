var gpio = require("pi-gpio"),
    delay = 600000,
    toggleLights = null;

gpio.read(11, function(err, value) {
    if(err) throw err;
    console.log(value); // The current state of the pin
});

function myFunction() {
    toggleLights = setTimeout(function(){ alert("Hello"); }, 3000);
}

function myStopFunction() {
    clearTimeout(toggleLights);
}

//toggleLights = setTimeout("javascript function", delay);