

export function reverseBlockLeft(matrix: number[][]) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const rotated: number[][] = Array.from({length: cols}, () => Array(rows).fill(0));

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      rotated[cols - 1 - x][y] = matrix[y][x];
    }
  }

  return rotated;
};

// export function reverseBlockRight(matrix: number[][]) {
  
// }