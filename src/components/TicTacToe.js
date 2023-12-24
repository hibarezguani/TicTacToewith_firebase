import React, { useState, useEffect, useCallback } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [vsComputer, setVsComputer] = useState(false);

  const winningPositions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  const checkWinner = () => {
    for (let i = 0; i < winningPositions.length; i++) {
      const [a, b, c] = winningPositions[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const isBoardFull = () => {
    return board.every(cell => cell !== '');
  };

  useEffect(() => {
    const winnerPlayer = checkWinner();
    if (winnerPlayer) {
      setWinner(winnerPlayer);
      setGameOver(true);
    } else if (isBoardFull()) {
      setWinner('Draw');
      setGameOver(true);
    } else if (vsComputer && currentPlayer === 'O') {
      // If playing against the computer and it's computer's turn ('O')
      const emptyCells = board.reduce((acc, cell, index) => {
        if (cell === '') acc.push(index);
        return acc;
      }, []);
      const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      handleCellClick(randomIndex);
    }
  }, [board, gameOver, currentPlayer, vsComputer]);

  const handleCellClick = useCallback(
    (index) => {
      if (gameOver || board[index]) return;

      const newBoard = [...board];
      newBoard[index] = currentPlayer;

      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    },
    [board, currentPlayer, gameOver]
  );

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setCurrentPlayer('X');
    setWinner(null);
    setGameOver(false);
  };

  const getWinnerMessage = () => {
    if (winner) {
      if (winner === 'Draw') {
        return (
          <p className="text-2xl font-bold">
            It's a Draw!
          </p>
        );
      } else {
        return (
          <p className="text-2xl font-bold">
            Winner is <span className={winner === 'X' ? 'text-blue-500' : 'text-red-500'}>{winner}</span>!
          </p>
        );
      }
    } else {
      return (
        <p className="text-2xl font-bold">
          {currentPlayer === 'X' ? "X's turn" : "O's turn"}
        </p>
      );
    }
  };

  const getCellClassName = (index) => {
    if (winner && winningPositions.some(pos => pos.includes(index))) {
      const isWinningCell = winningPositions.some(pos => pos.includes(index) && pos.every(i => board[i] === board[index]));
      return `w-16 h-16 border border-gray-300 flex items-center justify-center text-4xl focus:outline-none ${
        board[index] === 'X' ? 'text-blue-500' : 'text-red-500'
      } ${isWinningCell ? 'bg-green-200' : ''}`;
    }
    return `w-16 h-16 border border-gray-300 flex items-center justify-center text-4xl focus:outline-none ${
      board[index] === 'X' ? 'text-blue-500' : 'text-red-500'
    }`;
  };


  const renderCell = (index) => {
    return (
      <button
        key={index}
        onClick={() => handleCellClick(index)}
        className={getCellClassName(index)}
        disabled={gameOver || board[index] !== ''}
      >
        {board[index]}
      </button>
    );
  };

  const toggleVsComputer = () => {
    setVsComputer(!vsComputer);
    resetGame();
  };

  const toggleVsHuman = () => {
    setVsComputer(false);
    resetGame();
  };

  const rows = [];
  for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
      const index = i * 3 + j;
      row.push(renderCell(index));
    }
    rows.push(<div key={i} className="flex">{row}</div>);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4">
        <button
          onClick={toggleVsHuman}
          className={`px-4 py-2 mr-4 bg-blue-500 text-white font-semibold rounded-md focus:outline-none ${!vsComputer ? 'bg-gray-600' : ''}`}
        >
          Play against Human
        </button>
        <button
          onClick={toggleVsComputer}
          className={`px-4 py-2 bg-blue-500 text-white font-semibold rounded-md focus:outline-none ${vsComputer ? 'bg-gray-600' : ''}`}
        >
          Play against Computer
        </button>
      </div>
      <div className="flex flex-col items-center">
        {rows}
      </div>
      <div className="mb-4">{getWinnerMessage()}</div>
      <button
        onClick={resetGame}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md focus:outline-none"
      >
        Restart
      </button>
    </div>
  );
};

export default TicTacToe;
