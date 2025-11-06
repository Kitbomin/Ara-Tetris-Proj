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

export function checkCollision(board: Cell[][], shape: number[][], x: number, y: number) {
  for (let row = 0; row < shape.length; row++) {
    for (let col = 0; col < shape[row].length; col++) {
      if (shape[row][col] !== 0) {
        const newY = y + row;
        const newX = x + col;

        if (newY >= board.length || newX < 0 || newX >= board[0].length) return true;
        if (newY >= 0 && board[newY][newX].filled) return true;
      }
    }
  }
  return false;
}
