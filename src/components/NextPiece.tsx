import React from 'react'



type NextPieceProps = {
  nextPiece: {
    shape: number[][];
    color: string;
}
};

// 0부터 6까지의 난수를 생성해서 --> 다음 조각의 인덱스번호를 가지고 올것


function NextPiece({nextPiece}: NextPieceProps) {

  const {shape, color} = nextPiece;

  
  return (
    <div>NextPiece</div>
  )
}

export default NextPiece