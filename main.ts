function girar90gradosDerecha () {
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(200)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 20)
    basic.pause(1100)
    maqueen.motorStop(maqueen.Motors.All)
}
function girar180gradosDerecha () {
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 20)
    basic.pause(200)
    maqueen.motorStop(maqueen.Motors.All)
}
function girar90gradosIzquierda () {
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(200)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 20)
    basic.pause(1100)
    maqueen.motorStop(maqueen.Motors.All)
}
let ultimoGiro = 0
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 4) {
        maqueen.motorStop(maqueen.Motors.All)
        girar90gradosIzquierda()
        if (maqueen.Ultrasonic(PingUnit.Centimeters) < 4) {
            maqueen.motorStop(maqueen.Motors.All)
            girar90gradosDerecha()
            if (maqueen.Ultrasonic(PingUnit.Centimeters) < 4) {
                maqueen.motorStop(maqueen.Motors.All)
                girar90gradosDerecha()
                if (maqueen.Ultrasonic(PingUnit.Centimeters) < 4) {
                    maqueen.motorStop(maqueen.Motors.All)
                    girar90gradosDerecha()
                }
            }
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
    }
})
