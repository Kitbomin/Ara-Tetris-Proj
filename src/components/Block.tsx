import React from 'react'
import { TETRIS_PIECES } from '../constants/tetris_pieces';





function Block() {
  
  return (
    <div>
      <h3>Block Shapes</h3>
      <pre>{JSON.stringify(TETRIS_PIECES, null, 2)}</pre>
    </div>
  );
}




export default Block