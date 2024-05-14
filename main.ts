let strip: neopixel.Strip = null
let ir_waarde = 0
let vooruit = 94
let achteruit = 95
let links = 93
let rechts = 92
let stop = 8
basic.forever(function () {
    if (ir_waarde == vooruit) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (ir_waarde == links) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (ir_waarde == achteruit) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (ir_waarde == rechts) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (ir_waarde == stop) {
        basic.clearScreen()
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
basic.forever(function () {
    ir_waarde = IR.IR_read()
})
