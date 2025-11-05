export function createInitialBoard(rows: number, cols: number) {
  return Array.from({length: rows}, () => Array(cols).fill(0))
}