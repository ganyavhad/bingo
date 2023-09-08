const _ = require('lodash')
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
function generate() {
    return _.chunk(_.shuffle(arr), 5)
}

function verify(ticket, solution) {
    console.log("Solution: ", solution)
}


function getIndex()

const ticket = [
    [9, 21, 8, 4, 7],
    [5, 20, 25, 10, 3],
    [19, 23, 24, 1, 12],
    [22, 18, 17, 2, 15],
    [16, 13, 14, 11, 6]
]

const solution = [
    [9, 5, 19, 22, 16],
    [9, 21, 8, 4, 7],
    [9, 20, 24, 2, 6],
    [16, 13, 14, 11, 6],
    [4, 10, 1, 2, 11]
]

verify(ticket, solution)