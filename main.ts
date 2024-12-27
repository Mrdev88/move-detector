ml.onStart(ml.event.FrontAndBack, function () {
    basic.showIcon(IconNames.No)
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
})
ml.onStart(ml.event.LeftToRight, function () {
    basic.showIcon(IconNames.Square)
    music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.UntilDone)
})
ml.onStart(ml.event.UpAndDown, function () {
    basic.showIcon(IconNames.Yes)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
})
