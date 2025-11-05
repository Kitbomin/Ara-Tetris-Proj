import { TETRIS_PIECES } from "../constants/tetris_pieces";


export function spawnPiece() {
  const KEYS = Object.keys(TETRIS_PIECES);
  const randomIndex = Math.floor(Math.random() * KEYS.length);
  const key = KEYS[randomIndex];
  const pieceData = TETRIS_PIECES[key as keyof typeof TETRIS_PIECES];

  return {
    shape: pieceData.shape,
    color: pieceData.color,
    x: 4,
    y: 0,
  };
}
