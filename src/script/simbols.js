function verifySimbol(simbol = '') {

    let reverseSimbol = ''

    simbol === 'X' ? reverseSimbol = 'O' : reverseSimbol = 'X'

    return reverseSimbol

}

function verifyAlreadyExistSimbolOnThisSquare(index = 0, board = ['']){
    var Return = false
    board[index] !== '' ? Return = false : Return = true
    return Return
}

module.exports = {

    verifySimbol,
    verifyAlreadyExistSimbolOnThisSquare,

}