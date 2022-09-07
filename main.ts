IR.IR_callbackUser(function (message) {
    if (message == 18) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
    } else if (message == 30) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
basic.forever(function () {
    basic.showNumber(IR.IR_read())
})
