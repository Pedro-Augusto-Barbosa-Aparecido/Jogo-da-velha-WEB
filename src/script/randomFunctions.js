function decreamentNumber(number = 0){
    return number - 1
}

function cleanBoard(board = ['']){
    for(var i = 0; i < board.length; i++){
        board[i] = ''
    }

    return board
}

module.exports = {

    decreamentNumber,
    cleanBoard,
    
}