import React from 'react'


export const COLORS = {
  I: '#00f0f0',
  O: '#f0f000',
  T: '#a000f0',
  L: '#f0a000',
  J: '#0000f0',
  S: '#00f000',
  Z: '#f00000',
};
export const SHAPES = {
  I: [[1, 1, 1, 1]],
  O: [
    [1, 1], 
    [1, 1]
  ],
  L: [
    [1, 0],
    [1, 0],
    [1, 1]
  ],
  T: [[0, 1, 0], [1, 1, 1]],
  J: [
    [0, 1],
    [0, 1],
    [1, 1]
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0]
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1]
  ]
}

type blockShape = {
  block: number[][],
  color: string;
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