basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    DFRobotMaqueenPlus.mototRun(Motors.M1, Dir.CW, 200)
    DFRobotMaqueenPlus.mototRun(Motors.M2, Dir.CCW, 50)
    basic.pause(5000)
    basic.showIcon(IconNames.Happy)
    DFRobotMaqueenPlus.mototStop(Motors.ALL)
})
