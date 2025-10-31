import React, { useState } from 'react'
import Block, { SHAPES } from './Block';

const ROWS = 60;
const COLS = 20;

type Cell = {
  filled: boolean;
  color: string;
}

type BoardProps = {
  currentPiece: {
    shape: number[][];
    x: number;
    y: number;
    color: string;
  }
}



function Board({ currentPiece }: BoardProps) {

  const board: Cell[][] = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => ({
      filled: false,
      color: '#111'
    }))
  );

  currentPiece.shape.forEach((row, rowIdx) => {
    row.forEach((val, colIdx) => {
      if (val) {
        const y = currentPiece.y + rowIdx;
        const x = currentPiece.x + colIdx;
        if (y >= 0 && y < ROWS && x >= 0 && x < COLS) {
          board[y][x] = { filled: true, color: currentPiece.color };
        }
      }
    });
  });

  return (
    <div style={{
      display: 'grid', gridTemplateRows: `repeat(${ROWS}, 1fr)`, 
      gridTemplateColumns: `repeat(${COLS}, 1fr)`, gap: '1px', 
      background: '#222', width: '200px', aspectRatio : `${COLS}/${ROWS}`
    }} className='Board'>

      {
        board.map((row, y) => row.map((cell, x) => (
          <div 
              key={`${x} - ${y}`}
              style={{backgroundColor: cell.filled ? cell.color : '#111', borderRadius: '2px'}} />
        )))
      }        
      <Block/>
    </div>
  )
}

export default Board

