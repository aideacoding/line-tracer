let left_light = 0
let right_light = 0
basic.forever(function () {
    left_light = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    right_light = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    basic.showNumber(left_light)
    if (left_light == 0 && right_light == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 30)
    } else if (left_light == 0 && right_light == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    } else if (left_light == 1 && right_light == 0) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    } else if (left_light == 1 && right_light == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 30)
    }
})
