import { useEffect, useRef } from "react";
import { checkCollision } from "../functions/checkCollision";

type Piece = {
  shape: number[][];
  x: number;
  y: number;
  color: string;
};

type UseIntervalProps = {
  board: number[][];
  currentPiece: Piece;
  setCurrentPiece: React.Dispatch<React.SetStateAction<Piece>>;
  delay?: number;
  isPaused?: boolean;
};

export const useInterval = ({
  board,
  currentPiece,
  setCurrentPiece,
  delay = 1000,
  isPaused = false,
}: UseIntervalProps) => {
  const savedCallback = useRef<() => void>(() => {});

  useEffect(() => {
    savedCallback.current = () => {
      const nextY = currentPiece.y + 1;
      const isColliding = checkCollision(board, currentPiece.shape, currentPiece.x, nextY);

      if (!isColliding) {
        setCurrentPiece((prev) => ({
          ...prev,
          y: prev.y + 1,
        }));
      }
    };
  }, [board, currentPiece.x, currentPiece.y, currentPiece.shape, setCurrentPiece]);

  useEffect(() => {
    if (isPaused || !delay) return;

    const tick = () => savedCallback.current && savedCallback.current();
    const id = setInterval(tick, delay);

    return () => clearInterval(id);
  }, [delay, isPaused]);
};
