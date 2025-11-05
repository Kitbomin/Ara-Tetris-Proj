import React from "react";
import Board from "./components/Board";
import NextPiece from "./components/NextPiece";
import { useTetrisLogic } from "./hooks/useTetrisLogic";
import "./App.css";

function App() {
  const { board, currentPiece, isGameOver, isPaused, setIsPaused } =
    useTetrisLogic();

  return (
    <div className="App">
      <h1 className="title">React Tetris</h1>

      <Board board={board} currentPiece={currentPiece} />

      <div className="controls">
        {isGameOver ? (
          <h3 className="game-over">Game Over</h3>
        ) : (
          <button className="pause-btn" onClick={() => setIsPaused((prev) => !prev)}>
            {isPaused ? "Resume" : "Pause"}
          </button>
        )}
      </div>

      <NextPiece />
    </div>
  );
}

export default App;
