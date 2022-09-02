import React from "react";

export function Restart({ reset }) {
  return (
    <>
      <button className="restart" onClick={() => reset()}>
        Restart
      </button>
    </>
  );
}
