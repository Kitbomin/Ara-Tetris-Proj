import './App.css'
import Board from './components/Board';


function App() {

  return (
    <div className="App">
      <h1>React Tetris</h1>
      <Board currentPiece={currentPiece} />
    </div>
  );
}

export default App;