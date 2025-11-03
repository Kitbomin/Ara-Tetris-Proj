import { useEffect, useState } from 'react';
import Board from './components/Board';
import { SHAPES, COLORS } from './components/Block';
import useInput from './hooks/useInput';

function App() {
  const [currentPiece, setCurrentPiece] = useState({
    shape: SHAPES.L,
    x: 4,
    y: 0,
    color: COLORS.L,
  });
  const {pressedKey, keyState} = useInput();

  console.log(pressedKey, keyState);

  return (
    <div className="App">
      <h1>React Tetris</h1>
      <Board currentPiece={currentPiece} />
    </div>
  );
}

export default App;
