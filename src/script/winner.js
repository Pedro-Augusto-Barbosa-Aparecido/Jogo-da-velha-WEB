function verifyWinner(board = ['']) {
    if((board[0] === board[1] && board[1] === board[2]) && ((board[0] !== '' && board[1] !== '' && board[1] !== '' && board[2] !== ''))){
        return true
    }
    if((board[3] === board[4] && board[4] === board[5]) && ((board[3] !== '' && board[4] !== '' && board[4] !== '' && board[5] !== ''))){
        return true
    }
    if((board[6] === board[7] && board[7] === board[8]) && ((board[6] !== '' && board[7] !== '' && board[7] !== '' && board[8] !== ''))){
        return true
    }
    if((board[0] === board[3] && board[3] === board[6]) && ((board[0] !== '' && board[3] !== '' && board[3] !== '' && board[6] !== ''))){
        return true
    }
    if((board[1] === board[4] && board[4] === board[7]) && ((board[1] !== '' && board[4] !== '' && board[4] !== '' && board[7] !== ''))){
        return true
    }
    if((board[2] === board[5] && board[5] === board[8]) && ((board[2] !== '' && board[5] !== '' && board[5] !== '' && board[8] !== ''))){
        return true
    }
    if((board[0] === board[4] && board[4] === board[8]) && ((board[0] !== '' && board[4] !== '' && board[4] !== '' && board[8] !== ''))){
        return true
    }
    if((board[2] === board[4] && board[4] === board[6]) && ((board[2] !== '' && board[4] !== '' && board[4] !== '' && board[6] !== ''))){
        return true
    }
}

module.exports = {
    verifyWinner,
}