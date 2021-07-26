input.onButtonPressed(Button.A, function () {
    Ears = true
})
input.onButtonPressed(Button.AB, function () {
    Ears = false
    Tail = false
})
input.onButtonPressed(Button.B, function () {
    Tail = true
})
let Ears = false
let Tail = false
Tail = false
Ears = false
basic.forever(function () {
    if (Ears == true) {
        pins.servoWritePin(AnalogPin.P0, 70)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P0, 110)
        basic.pause(500)
    }
    if (Tail == true) {
        pins.servoWritePin(AnalogPin.P14, 70)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P14, 110)
        basic.pause(500)
    }
})
