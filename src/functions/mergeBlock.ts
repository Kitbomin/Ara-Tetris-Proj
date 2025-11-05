type Piece = {
  shape: number[][];
  x: number;
  y: number;
  color: string;
};

export function mergeBlock(board: number[][], piece: Piece): number[][] {
  const newBoard = board.map(row => [...row]);

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
          newBoard[boardY][boardX] = 1; // or piece.color
        }
      }
    }
  }

  return newBoard;
}
