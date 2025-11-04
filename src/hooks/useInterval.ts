import type React from "react"
import { useEffect, useRef } from "react";

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
  mergePieceToBoard: (piece: Piece) => void;
  spawnNewPiece: () => void;
  delay?: number;
  isPaused?:boolean;
}


export const useInterval = ({
  board,
  currentPiece,
  mergePieceToBoard,
  spawnNewPiece,
  setCurrentPiece,
  delay = 1000,
  isPaused = false
}: UseIntervalProps) => {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = () => {
      const nextY = currentPiece.y + 1;
      
      const isColliding = checkCollision(board, currentPiece.shape, currentPiece.x, nextY);

      if (isColliding) {
        mergePieceToBoard(currentPiece);
        spawnNewPiece();
      } else {
        setCurrentPiece(prev => ({
        ...prev, y:prev.y+1
      }));
      }
    };
  }, [board, currentPiece, setCurrentPiece, mergePieceToBoard, spawnNewPiece]);

  useEffect(() => {
    if(isPaused || delay === null) return;

    const tick = () => savedCallback.current && savedCallback.current();
    const id = setInterval(tick, delay);

    return () => clearInterval(id);
  }, [delay, isPaused]);
}

/**
 * 1초마다 currentPiece의 좌표가 y로 -1씩 떨어지게 만들어야함
 * x축의 이동이 일어나더라도 이는 유지되어야함
 * 
 */