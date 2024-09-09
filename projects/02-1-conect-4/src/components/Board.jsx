import { SIZE, TURNS } from "../constants"
import { useState, useEffect } from 'react'
import { Square } from "./Square";
import { isWinner } from "../logic";
import { WinnerModal } from "./WinnerModal";

export function Board() {

    const [turn, setTurn] = useState(() => {
        return TURNS[1];
    });

    const [board, setBoard] = useState(Array(SIZE).fill(Array(SIZE).fill(null)));

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const [winner, setWinner] = useState(null);

    // useEffect(() => {
    //     const handleMove = (event) => {
    //         const { clientX, clientY } = event
    //         setPosition({ x: clientX, y: clientY })
    //     }

    //     window.addEventListener('pointermove', handleMove)

    //     return () => {
    //         window.removeEventListener('pointermove', handleMove)
    //     }
    // }, []);

    const resetGame = () =>{
        setBoard(Array(SIZE).fill(Array(SIZE).fill(null)))
        setWinner(null)
        setTurn(TURNS[1])
    }

    const updateBoard = (event) => {
        var col = event.target.id;
        var newBoard = board.map(row => [...row]);;
        var row = board.length -1;

        for(row;row>=0;row--){
            if(newBoard[row][col] == null){
                newBoard[row][col] = turn;
                break;
            }
        }

        setBoard(newBoard)

        var newWinner = isWinner(newBoard,parseInt(row),parseInt(col));

        setWinner(newWinner);

        var newTurn = turn == TURNS[1]? TURNS[2]:TURNS[1];

        setTurn(newTurn);
    }

    return (
        <main className="w-full">

            <h1 className=" text-center">Conecta 4</h1>
            {/* Game area */}
            <div className={`h-28 grid gap-3`}
                    style={{
                        gridTemplateColumns: `repeat(${SIZE}, 7rem)`
                    }}
             >
                {
                    board.map((_, index) => {
                        return (
                            <div className="w-28 h-full" onClick={updateBoard} key={'function-' + index} id={index}></div>
                        )
                    })
                }

            </div>
            <div className="flex gap-6">
                {/* board */}
                <div className={ `grid gap-3 justify-center items-center m-auto w-fit` }
                    style={{
                        gridTemplateColumns: `repeat(${SIZE}, 7rem)`
                    }}
                >
                    {
                        board.map((raw, i) => {
                            return (
                                raw.map(((color, j) => {
                                    return (
                                        <Square color={color} key={i + '-' + j}/>
                                    )
                                }))
                            )
                        })
                    }
                </div>

                {/* Turn area */}
                <div>
                    <h2>Turno del jugador</h2>
                    <Square color={turn}/>
                </div>
            </div>

            <WinnerModal winner={winner} resetGame={resetGame} />

            {/* token */}
            {/* <div style={{
                borderRadius: '50%',
                transform: `translate(${position.x}px, ${position.y}px)`
            }}
                className={' w-20 h-20 -left-10 -top-10 absolute' + turn}
            /> */}
        </main>
    )
}