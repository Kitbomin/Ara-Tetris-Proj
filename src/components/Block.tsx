import React from 'react'

export const SHAPES = {
  I: [[1, 1, 1, 1]],
  O: [
    [1, 1], 
    [1, 1]
  ],
  LL: [
    [1, 0],
    [1, 0],
    [1, 1]
  ],
  T: [[0, 1, 0], [1, 1, 1]],
  RL: [
    [0, 1],
    [0, 1],
    [1, 1]
  ],
  LS: [
    [0, 1, 1],
    [1, 1, 0]
  ],
  RS: [
    [1, 1, 0],
    [0, 1, 1]
  ]
}



function Block() {
  
  return (
    <div>
      <h3>Block Shapes</h3>
      <pre>{JSON.stringify(SHAPES, null, 2)}</pre>
    </div>
  );
}




export default Block