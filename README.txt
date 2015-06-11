For use with PIR motion sensor, For this project I used [Parallax PIR motion sensor](http://www.amazon.com/PARALLAX-555-28027-PIR-Sensor-Rev/dp/B00B8867V4).
Connect GND to a GND pin (6), VCC to a 3.3v pin (1) and OUT to GPIO0 (11).

https://www.npmjs.com/package/pi-gpio#installation

When running the script it will map the pins to a folder like:
`/sys/class/gpio/gpio23/value`

To fix this run `sudo echo 23 > /sys/class/gpio/export`

if that does now work we can run `sudo sh -c "echo 23 >/sys/class/gpio/export"` to run the command in its own shell as sudo access
