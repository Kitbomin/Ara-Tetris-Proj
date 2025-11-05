import React from "react";
import { TETRIS_PIECES } from "../constants/tetris_pieces";

function Block() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Tetris Pieces</h2>

      <div style={styles.grid}>
        {Object.entries(TETRIS_PIECES).map(([key, piece]) => (
          <div key={key} style={styles.card}>
            <div
              style={{
                display: "inline-grid",
                gridTemplateRows: `repeat(${piece.shape.length}, 20px)`,
                gridTemplateColumns: `repeat(${piece.shape[0].length}, 20px)`,
                gap: "2px",
                background: "#111",
                padding: "6px",
                borderRadius: "8px",
              }}
            >
              {piece.shape.map((row, y) =>
                row.map((cell, x) => (
                  <div
                    key={`${key}-${x}-${y}`}
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: cell ? piece.color : "#222",
                      borderRadius: "4px",
                    }}
                  />
                ))
              )}
            </div>
            <p style={styles.label}>{key}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    textAlign: "center" as const,
    backgroundColor: "#1a1a1a",
    color: "#eee",
    minHeight: "100vh",
  },
  title: {
    marginBottom: "20px",
    fontSize: "1.5rem",
    color: "#0ff",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
    gap: "24px",
    justifyItems: "center",
  },
  card: {
    background: "#222",
    borderRadius: "12px",
    padding: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.4)",
  },
  label: {
    marginTop: "8px",
    fontWeight: "bold",
    fontSize: "0.9rem",
    color: "#ccc",
  },
};

export default Block;
