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


export function popBlock (board: Cell[][]): {newBoard: Cell[][]; linesCleared: number} {
  const newBoard = board.map(row => row.map(cell => ({...cell})));

  const filledRows = newBoard.filter((row) => !row.every((cell) => cell.filled))

  const linesCleared = newBoard.length - filledRows.length;

  const emptyRow = Array.from({length: board[0].length}, () => ({
    filled: false,
    color: '#111'
  }));

  const newRows = Array.from({length: linesCleared}, () => [...emptyRow]);

  return { newBoard: [...newRows, ...filledRows], linesCleared};
}