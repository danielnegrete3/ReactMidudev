import { Children, useState } from 'react'
import confetti from "canvas-confetti"
import { Square } from './components/Square.jsx';
import { TURNS } from './constants.js';
import { checkWinner } from './logic/board.js';
import { WinnerModal } from './components/WinnerModal.jsx';

function App() {

  const [board, setBoard] = useState(
    () => {
      const boardFromStorage = window.localStorage.getItem('board');
      return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null);
    }
  );
  const [turn, setTurn] = useState(
    () => {
      const turnFormStorage = window.localStorage.getItem('turn');
      return turnFormStorage ? JSON.parse(turnFormStorage) : TURNS.X;
    }
  );
  const [winner, setWinner] = useState(null);



  const updateBoard = (index) => {

    // si ya hay algo 
    if (board[index] || winner) return;

    // actualizar el tablero
    var newBord = [...board];
    newBord[index] = turn;

    var win = checkWinner(newBord, index)
    if (win != null) {
      // newBord = Array(9).fill(null);
      if (win) {
        confetti()
      }
      setWinner(win);
      // console.log('gano');
    }

    setBoard(newBord);

    // cambiar turno
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // guardar partida 
    window.localStorage.setItem('board', JSON.stringify(newBord));
    window.localStorage.setItem('turn', JSON.stringify(newTurn));
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
  }

  return (
    <main className=' text-center mx-[40px] w-fit text-[#eee]'>
      <h1 className=' mb-4'>Tic tac toe</h1>
      <button onClick={resetGame} className='  px-2 py-3 m-6 bg-transparent border-solid border-[#eee] border-2 rounded-md font-bold cursor-pointer hover:bg-[#eee] hover:text-[#222] '>
        Reset del juego
      </button>
      <section className=' grid grid-cols-3 gap-3'>
        {
          board.map(
            (_, index) => {
              return (
                <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {_}
                </Square>
              )
            }
          )
        }
      </section>

      <section className=' flex justify-center mx-auto gap-x-5 mt-6 w-fit relative rounded-[10px] '>
        <Square isSelected={turn == TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn == TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
