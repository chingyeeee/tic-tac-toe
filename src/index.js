import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//component格子
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

//component棋盤
function Board() {
  //格子狀態
  const [state, setState] = useState({
    squares: Array(9).fill(null),
    xIsNext: true,
  });

  //渲染格子
  const renderSquare = function (i) {
    return <Square value={state.squares[i]} onClick={() => handleClick(i)} />;
  };

  //變更格子狀態
  const handleClick = (i) => {
    const squares = state.squares.slice(); //複製原有的state
    if (calcWinner(squares) || squares[i]) return;
    squares[i] = state.xIsNext ? "X" : "O";
    setState({ squares: squares, xIsNext: !state.xIsNext });
  };

  //calcWinner function
  function calcWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calcWinner(state.squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (state.xIsNext ? "X" : "O");
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

//component遊戲
function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
