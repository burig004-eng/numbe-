input.onButtonPressed(Button.A, function () {
    count += -1
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    count += 1
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
})
let count = 0
basic.forever(function () {
    basic.showNumber(count)
})
