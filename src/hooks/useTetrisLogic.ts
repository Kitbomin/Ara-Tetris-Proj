import { useCallback, useEffect, useState } from "react";
import { reverseBlockLeft } from "../functions/reverseBlockLeft";
import useInput from "./useInput";
import { nextPieceLogic } from "../functions/nextPieceLogic";
import { useInterval } from "./useInterval";
import { checkCollision } from "../functions/checkCollision";
import { createInitialBoard } from "../functions/createInitialBoard";
import { mergeBlock } from "../functions/mergeBlock";


export const useTetrisLogic = () => {
  const {pressedKey, keyState} = useInput();
  const [board, setBoard] = useState(createInitialBoard(30, 10));
  const [nextPiece, setNextPiece] = useState(() => nextPieceLogic());
  const [currentPiece, setCurrentPiece] = useState(() => nextPieceLogic());
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const moveInX = useCallback((dir: number) => {
    const newX = currentPiece.x + dir;
    if (!checkCollision(board, currentPiece.shape, newX, currentPiece.y)) {
      setCurrentPiece((prev) => ({...prev, x:newX}));
    }
  }, [board, currentPiece]);

  const rotatedBlock = useCallback(()=> {
    const rotated = reverseBlockLeft(currentPiece.shape);
    if (!checkCollision(board, rotated, currentPiece.x, currentPiece.y)) {
      setCurrentPiece((prev) => ({...prev, shape:rotated})); 
    }
  }, [board, currentPiece]);

  const fixBlock = useCallback(() => {
    const merged = mergeBlock(board, currentPiece);
    setBoard(merged);

    const newPiece = nextPiece;
    const next = nextPieceLogic();
    

    setCurrentPiece(newPiece);
    setNextPiece(next);

    if(checkCollision(merged, newPiece.shape, newPiece.x, newPiece.y)) {
      setIsGameOver(true);
    }
  }, [board, currentPiece, nextPiece]);

  const changeBlock = useCallback(() => {
    setCurrentPiece(nextPiece);
    const newNext = nextPieceLogic();
    setNextPiece(newNext);
  }, [nextPiece])

  useInterval({
    board,
    currentPiece,
    setCurrentPiece,
    delay: 800,
    isPaused: isPaused || isGameOver
  });
  
  useEffect(() => {
    if (isGameOver) return;

    if(keyState.left) moveInX(-1);
    if(keyState.right) moveInX(+1);
    if(keyState.up) rotatedBlock();
    if(keyState.down) {
      const nextY = currentPiece.y + 1;
      if(!checkCollision(board, currentPiece.shape, currentPiece.x, nextY)) {
        setCurrentPiece((prev) => ({...prev, y:nextY}))
      } else {
        fixBlock();
        changeBlock();
      }
    }
    if (keyState.space) {
      // 하드드롭 (끝까지 즉시 낙하)
      let dropY = currentPiece.y;
      while (!checkCollision(board, currentPiece.shape, currentPiece.x, dropY + 1)) {
        dropY++;
      }
      setCurrentPiece((prev) => ({ ...prev, y: dropY }));
      fixBlock();
      changeBlock();
    }
  }, [keyState, moveInX, rotatedBlock, board, currentPiece, fixBlock, changeBlock,isGameOver])

  return {
    board,
    currentPiece,
    nextPiece,
    isGameOver,
    isPaused,
    setIsPaused,
  };
}