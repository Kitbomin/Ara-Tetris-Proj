export function createInitialBoard(rows: number, cols: number) {
  return Array.from({length: rows}, () => Array.from({length: cols}, () => ({
    filled: false, color: '#111'
  })))
}