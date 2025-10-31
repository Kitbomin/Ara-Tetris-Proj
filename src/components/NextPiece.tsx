import React from 'react'



type NextPieceProps = {
  nextPiece: {
    shape: number[][];
    color: string;
}
};

function NextPiece({nextPiece}: NextPieceProps) {

  const {shape, color} = nextPiece;

  
  return (
    <div>NextPiece</div>
  )
}

export default NextPiece