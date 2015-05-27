https://www.npmjs.com/package/pi-gpio#installation

When running the script it will map the pins to a folder like:
`/sys/class/gpio/gpio23/value`

To fix this run `sudo echo 23 > /sys/class/gpio/export`

