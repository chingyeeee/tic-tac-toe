import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { calcWinner, emptySpaces } from "./helper.js";
import { Status } from "./components/Status";
import { Board } from "./components/Board";
import { Restart } from "./components/Restart";
// import "reset-css";

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
