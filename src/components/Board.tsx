import React from "react";

const ROWS = 40;
const COLS = 10;

type Cell = { filled: boolean; color: string };

type BoardProps = {
  board: Cell[][];
  currentPiece: {
    shape: number[][];
    x: number;
    y: number;
    color: string;
  };
};

function Board({ board, currentPiece }: BoardProps) {
  // 보드 복사본 생성
  const displayBoard = board.map((row) => row.map((cell) => ({ ...cell })));

  // 현재 조각 덧그리기
  currentPiece.shape.forEach((row, rowIdx) => {
    row.forEach((val, colIdx) => {
      if (val) {
        const y = currentPiece.y + rowIdx;
        const x = currentPiece.x + colIdx;
        if (y >= 0 && y < ROWS && x >= 0 && x < COLS) {
          displayBoard[y][x] = { filled: true, color: currentPiece.color };
        }
      }
    });
  });

  return (
    <div
      className="Board"
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        gap: "1px",
        background: "#222",
        width: "200px",
        aspectRatio: `${COLS}/${ROWS}`,
      }}
    >
      {displayBoard.map((row, y) =>
        row.map((cell, x) => (
          <div
            key={`${x}-${y}`}
            style={{
              backgroundColor: cell.filled ? cell.color : "#111",
              borderRadius: "2px",
            }}
          />
        ))
      )}
    </div>
  );
}

export default Board;
