basic.forever(function () {
    if (input.compassHeading() < 23) {
        basic.showArrow(ArrowNames.North)
    } else if (input.compassHeading() < 68) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (input.compassHeading() < 113) {
        basic.showArrow(ArrowNames.West)
    } else if (input.compassHeading() < 158) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (input.compassHeading() < 203) {
        basic.showArrow(ArrowNames.South)
    } else if (input.compassHeading() < 248) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (input.compassHeading() < 293) {
        basic.showArrow(ArrowNames.East)
    } else if (input.compassHeading() < 338) {
        basic.showArrow(ArrowNames.NorthEast)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
