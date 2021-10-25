input.onButtonPressed(Button.A, function () {
    pocetTresu = 0
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    pocetTresu += 1
    if (pocetTresu == 3) {
        tvary = randint(1, 3)
        if (tvary == 1) {
            basic.showIcon(IconNames.SmallSquare)
        } else {
            if (tvary == 2) {
                basic.showIcon(IconNames.Scissors)
            } else {
                basic.showIcon(IconNames.Square)
            }
        }
    }
})
let tvary = 0
let pocetTresu = 0
basic.showString("KNP")
pocetTresu = 0
basic.forever(function () {
	
})
