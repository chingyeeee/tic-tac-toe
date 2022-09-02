import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { calcWinner, emptySpaces } from "./helper.js";
// import "reset-css";

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function Status({ winner, next, draw }) {
  const gameStatus = function () {
    if (winner) return `Winner is player ${winner} 🎊`;
    if (draw) return "DRAW!";
    return `Next Player : ${next}`;
  };
  return <div className="status">{gameStatus()}</div>;
}

function Board({
  nextPlayer,
  winner,
  squares,
  setSquares,
  xIsNext,
  setXIsNext,
}) {
  const renderSquare = function (i) {
    return <Square value={squares[i]} onClick={() => handleTurns(i)} />;
  };

  const handleTurns = function (i) {
    const newSquares = [...squares];
    if (newSquares[i] !== null || winner) return;
    newSquares[i] = nextPlayer;
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  return (
    <div>
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

function Restart({ reset }) {
  return (
    <>
      <button className="restart" onClick={() => reset()}>
        Restart
      </button>
    </>
  );
}

function Game() {
  const initialBoard = Array(9).fill(null);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const nextPlayer = xIsNext ? "X" : "O";
  const winner = calcWinner(squares);
  const draw = emptySpaces(squares);

  const reset = function () {
    setSquares(initialBoard);
    setXIsNext(true);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          nextPlayer={nextPlayer}
          winner={winner}
          squares={squares}
          setSquares={setSquares}
          xIsNext={xIsNext}
          setXIsNext={setXIsNext}
        />
      </div>
      <div className="game-status">
        <Status winner={winner} draw={draw} next={nextPlayer} />
        <Restart reset={reset} />
      </div>
    </div>
  );
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
