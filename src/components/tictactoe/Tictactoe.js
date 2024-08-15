import React, { useState } from 'react';
import "./Tictactoe.css";

function Tictactoe() {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setXTurn] = useState(true);

  const checkWinner = () => {
    const WinnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let logic  of WinnerLogic) {
      const [a, b, c] = logic;
      if (state[a] === state[b] && state[b] === state[c] && state[a] !== null) {
        return true;
      }
    }
    return false;
  }

  const handleClick = (index) => {
    console.log(index);
    const copystate = [...state];
    if (isXturn) {
      copystate[index] = "O";
      setXTurn(false);
    } else {
      copystate[index] = "X";
      setXTurn(true);
    }
    setState(copystate);
  }

  const ResetMe = () => {
    setState(Array(9).fill(null));
    setXTurn(true);
  }

  const isWinner = checkWinner();

  return (
    <div>
      <div className='main'>
        <h1 className='title'>Tic-Tac-Toe Game In <span>React</span></h1>
        <br></br>
        {isWinner ? (<><h1>{isXturn ? "X" : "O"} won the game</h1></>) : (
          <div className='board'>
            <div className='row1'>
              <div className='boxes' value={state[0]} onClick={() => handleClick(0)}>{state[0]}</div>
              <div className='boxes' value={state[1]} onClick={() => handleClick(1)}>{state[1]}</div>
              <div className='boxes' value={state[2]} onClick={() => handleClick(2)}>{state[2]}</div>
            </div>
            <div className='row2'>
              <div className='boxes' value={state[3]} onClick={() => handleClick(3)}>{state[3]}</div>
              <div className='boxes' value={state[4]} onClick={() => handleClick(4)}>{state[4]}</div>
              <div className='boxes' value={state[5]} onClick={() => handleClick(5)}>{state[5]}</div>
            </div>
            <div className='row3'>
              <div className='boxes' value={state[6]} onClick={() => handleClick(6)}>{state[6]}</div>
              <div className='boxes' value={state[7]} onClick={() => handleClick(7)}>{state[7]}</div>
              <div className='boxes' value={state[8]} onClick={() => handleClick(8)}>{state[8]}</div>
            </div>
          </div>
        )}
        <button className='reset' onClick={() => ResetMe()}>Reset</button>
      </div>
    </div>
  );
}

export default Tictactoe;