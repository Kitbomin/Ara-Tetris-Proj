import React, { useState } from 'react'
import Block, { SHAPES } from './Block';

const ROWS = 60;
const COLS = 20;

type Cell = {
  filled: boolean;
  color: string;
}


export const [currentPiece, setCurrentPiece] = useState({
    shape: SHAPES.T,
    x: 3,  // 시작 x좌표
    y: 0,  // 시작 y좌표
    color: '#4ff',
  });

function Board() {

  const board: Cell[][] = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => ({
      filled: false,
      color: '#111'
    }))
  );


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
              style={{backgroundColor: cell.color, borderRadius: '2px'}} />
        )))
      }        
      <Block/>
    </div>
  )
}

export default Board

