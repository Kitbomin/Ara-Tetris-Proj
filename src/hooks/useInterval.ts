import { useEffect } from "react";

type DropProps = {
  setCurrentPiece: React.Dispatch<React.SetStateAction<{
    shape: number[][];
    x: number;
    y: number;
    color: string;
  }>>;
  delay?: number; // 낙하 속도 (기본 1000ms)
};

/**
 * 1초마다 currentPiece의 좌표가 y로 -1씩 떨어지게 만들어야함
 * x축의 이동이 일어나더라도 이는 유지되어야함
 * 
 */