basic.forever(function () {
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    music.playMelody("- - - - - - - - ", 120)
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.ForeverInBackground)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
