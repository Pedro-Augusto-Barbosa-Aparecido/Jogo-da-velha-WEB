import './App.css';
import React, { useState } from 'react';
import {
  
  verifyAlreadyExistSimbolOnThisSquare,
  verifySimbol,

} from '../script/simbols';

import {

  verifyWinner

} from '../script/winner'

import { 
  
  cleanBoard, 

} from '../script/randomFunctions'

function App() {

  const [player, setPlayer] = useState('X')
  const [board, setBoard] = useState(['','','','','','','','','',''])
  const [winner, setWinner] = useState("")
  const [countWinner, setCountWinner] = useState([0,0])

  function play(player = '', index = 0){

      if(verifyAlreadyExistSimbolOnThisSquare(index, board)){

        var lastSimbolOfPlayer = player
  
        board[index] = player
    
        setPlayer(...verifySimbol(player))
    
        setBoard([...board])        

        if(verifyWinner(board)){
          
          setWinner(...lastSimbolOfPlayer)
  
          alert("O jogador " + (winner === "") ? lastSimbolOfPlayer : winner + " ganhou!")

          setBoard([...cleanBoard(board)])

          if(lastSimbolOfPlayer === 'X'){
            countWinner[0] = countWinner[0] + 1
            setCountWinner([...countWinner])
          }

          if(lastSimbolOfPlayer === 'O'){
            countWinner[1] = countWinner[1] + 1
            setCountWinner([...countWinner])
          }
          
          return
    
        }

        return
  
      }

      return
    
  }

  return (
    <div className="center">
      <div className="mainCanvas">

        <div>  
          <div className="subCanvas" onClick = {()=>{play(player, 0)}}>
            <p className="textCanvas">
              {board[0]}
            </p>
          </div>
          <div className="subCanvas" onClick = {()=>{play(player, 1)}}>
            <p className="textCanvas">
              {board[1]}
            </p>
          </div>
          <div className="subCanvas" onClick = {()=>{play(player, 2)}} OnCli>
            <p className="textCanvas">
              {board[2]}
            </p>
          </div>
        </div>

        <div>  
          <div className="subCanvas" onClick = {()=>{play(player, 3)}}>
            <p className="textCanvas">
              {board[3]}
            </p>
          </div>
          <div className="subCanvas" onClick = {()=>{play(player, 4)}}>
            <p className="textCanvas">
              {board[4]}
            </p>
          </div>
          <div className="subCanvas" onClick = {()=>{play(player, 5)}}>
            <p className="textCanvas">
              {board[5]}
            </p>
          </div>
        </div>

        <div>  
          <div className="subCanvas" onClick = {()=>{play(player, 6)}}>
            <p className="textCanvas">
              {board[6]}
            </p>
          </div>
          <div className="subCanvas" onClick = {()=>{play(player, 7)}}>
            <p className="textCanvas">
              {board[7]}
            </p>
          </div>
          <div className="subCanvas" onClick = {()=>{play(player, 8)}}>
            <p className="textCanvas">
              {board[8]}
            </p>
          </div>
        </div>

      </div>

      <div className="MenuConfig">
        <div className="pontuation">
          <p className="textPontuation">Quantidades de vezes que o "X" ganhou: {countWinner[0]}</p>
          <p className="textPontuation">Quantidades de vezes que o "O" ganhou: {countWinner[1]}</p>
        </div>

        <button className="btnMenu" title="Resetar Game" onClick={() => {setBoard([...cleanBoard(board)])}}>
          Resetar Game
        </button>
      </div>

    </div>
  );
}

export default App;
