export function checkCollision(board: number[][], piece: number[][], x: number, y: number) {
  for (let row = 0; row < piece.length; row++) {
    for (let col = 0; col < piece[row].length; col++) {
      if (piece[row][col] !== 0) {
        const newY = y + row;
        const newX = x + col;

        if (newY >= board.length || newX < 0 || newX >= board[0].length) return true;
        if (newY >= 0 && board[newY][newX] !== 0) return true;
      }
    }
  }
  return false;
}
