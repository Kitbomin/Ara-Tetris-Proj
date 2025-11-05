import { TETRIS_PIECES } from "../constants/tetris_pieces";

export function nextPieceLogic() {
  const KEYS = Object.keys(TETRIS_PIECES);
  const randomIndex = Math.floor(Math.random() * KEYS.length);
  const key = KEYS[randomIndex] as keyof typeof TETRIS_PIECES;
  const piece = TETRIS_PIECES[key];

  return {
    shape: piece.shape,
    color: piece.color,
    x: 4,
    y: 0,
  };
}
