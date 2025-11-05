import React, { useMemo } from "react";
import { nextPieceLogic } from "../functions/nextPieceLogic";

function NextPiece() {
  const nextPiece = useMemo(() => nextPieceLogic(), []);

  return (
    <div className="next-piece">
      <h3>Next Piece</h3>
      <div
        style={{
          display: "inline-grid",
          gridTemplateRows: `repeat(${nextPiece.shape.length}, 1fr)`,
          gridTemplateColumns: `repeat(${nextPiece.shape[0].length}, 1fr)`,
          gap: "2px",
          background: "#222",
          padding: "5px",
        }}
      >
        {nextPiece.shape.map((row, y) =>
          row.map((cell, x) => (
            <div
              key={`${x}-${y}`}
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: cell ? nextPiece.color : "#111",
              }}
            ></div>
          ))
        )}
      </div>
    </div>
  );
}

export default NextPiece;
