pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        basic.showArrow(ArrowNames.North)
    }
    basic.clearScreen()
    led.plot(pins.map(
    pins.analogReadPin(AnalogReadWritePin.P1),
    2.5,
    1023,
    4,
    0.7
    ), pins.map(
    pins.analogReadPin(AnalogReadWritePin.P2),
    2.5,
    1023,
    0.5,
    4
    ))
})
