import { SIZE, TURNS } from "../constants"
import { useState, useEffect } from 'react'
import { Square } from "./Square";

export function Board() {

    const [turn, setTurn] = useState(() => {
        return TURNS[1];
    });

    const [board, setBoard] = useState(Array(SIZE).fill(Array(SIZE).fill(null)));

    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = (event) => {
            const { clientX, clientY } = event
            setPosition({ x: clientX, y: clientY })
        }

        window.addEventListener('pointermove', handleMove)

        return () => {
            window.removeEventListener('pointermove', handleMove)
        }
    }, []);

    const updateBoard = (event) => {
        var i = event.target.id;
        var newBoard = board;
        console.log(newBoard[i])
        // for (var x = SIZE -1; 0<x;x--){
        //     if(newBoard[i][x] == null){
        //         newBoard[i][x] = turn;
        //         break;
        //     }
        // }

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
                                    <Square key={i + '-' + j} color={color}/>
                                )
                            }))
                        )
                    })
                }
            </div>

            <div style={{
                borderRadius: '50%',
                transform: `translate(${position.x}px, ${position.y}px)`
            }}
                className={' w-20 h-20 -left-10 -top-10 absolute' + turn}
            />
        </main>
    )
}