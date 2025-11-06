type Cell = {
  filled: boolean;
  color: string;
}

type Piece = {
  shape: number[][];
  x: number;
  y: number;
  color: string;
};

export function mergeBlock(board: Cell[][], piece: Piece): Cell[][] {
  const newBoard = board.map(row => row.map(cell => ({...cell})));

  for (let row = 0; row < piece.shape.length; row++) {
    for (let col = 0; col < piece.shape[row].length; col++) {
      if (piece.shape[row][col] !== 0) {
        const boardY = piece.y + row;
        const boardX = piece.x + col;

        if (
          boardY >= 0 &&
          boardY < newBoard.length &&
          boardX >= 0 &&
          boardX < newBoard[0].length
        ) {
          newBoard[boardY][boardX] = {
            filled: true, color: piece.color
          }
        }
      }
    }
  }

  return newBoard;
}
