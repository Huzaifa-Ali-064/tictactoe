import React, { useState } from "react";
import "./App.css";

function TicTacToe() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [arr, setArr] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  function checkWinner(updatedArr) {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        updatedArr[a] &&
        updatedArr[a] === updatedArr[b] &&
        updatedArr[a] === updatedArr[c]
      ) {
        setWinner(currentPlayer);
        return;
      }
    }

    if (!updatedArr.includes(null)) {
      setWinner("Draw");
    }
  }

  function handleClick(index) {
    if (arr[index] !== null || winner) return;

    const newArr = arr.slice();
    newArr[index] = currentPlayer;
    setArr(newArr);
    checkWinner(newArr);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  function renderSquare(index) {
    return (
      <div className="column" onClick={() => handleClick(index)}>
        {arr[index]}
      </div>
    );
  }

  return (
    <>
      <div className="grid">
        <h2>TicTacToe</h2>
        {winner ? (
          <h3 id="yes">Winner is {winner}</h3>
        ) : (
          <h3>Current Player: {currentPlayer}</h3>
        )}
        <div className="row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
