import { useEffect, useState } from 'react';
import Board from './components/Board';
import { SHAPES, COLORS } from './components/Block';
import useInput from './hooks/useInput';
import { useInterval } from './hooks/useInterval';

function App() {
  const [currentPiece, setCurrentPiece] = useState({
    shape: SHAPES.L,
    x: 4,
    y: 0,
    color: COLORS.L,
  });

  const [nextPiece, setNextPiece] = useState({
    shape: SHAPES.J,
    x: 6,
    y: 0,
    color: COLORS.J
  });

  const [delay, setDelay] = useState(1000);
  useInterval({setCurrentPiece, delay})

  
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
