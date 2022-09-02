import React from "react";

export function Status({ winner, next, draw }) {
  const gameStatus = function () {
    if (winner) return `Winner is player ${winner} 🎊`;
    if (draw) return "DRAW!";
    return `Next Player : ${next}`;
  };
  return <div className="status">{gameStatus()}</div>;
}
