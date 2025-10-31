import { useState } from 'react';
import './App.css';
import { SHAPES } from './components/Block';
import Board from './components/Board';

function App() {
  const [currentPiece, setCurrentPiece] = useState({
    shape: SHAPES.T,
    x: 3,  // 시작 x좌표
    y: 0,  // 시작 y좌표
    color: '#4ff',
  });

  return (
    <div className="App">
      <h1>React Tetris</h1>
      <Board currentPiece={currentPiece} />
    </div>
  );
}

export default App;
