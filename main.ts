let hand = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("yes")
})
input.onGesture(Gesture.ScreenDown, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(330, 250)
    music.playTone(330, 500)
    music.playTone(330, 500)
    music.playTone(262, 250)
    music.playTone(330, 500)
    music.playTone(392, 1000)
    music.playTone(196, 1000)
    music.playTone(262, 750)
    music.playTone(196, 750)
    music.playTone(165, 750)
    music.playTone(220, 500)
    music.playTone(247, 500)
    music.playTone(233, 250)
    music.playTone(220, 500)
    music.playTone(196, 250)
    music.playTone(330, 500)
    music.playTone(392, 250)
    music.playTone(440, 500)
    music.playTone(349, 250)
    music.playTone(392, 500)
    music.playTone(330, 500)
    music.playTone(262, 250)
    music.playTone(294, 250)
    music.playTone(247, 500)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("no")
})
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hand == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onScreenDown(function () {
music.playTone(Note.G, 500)
music.playTone(Note.C, 500)
})