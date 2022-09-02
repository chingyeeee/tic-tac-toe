import React from "react";
import { Square } from "./Square";

export function Board({
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
