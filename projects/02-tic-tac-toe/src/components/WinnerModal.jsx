import { Square } from "./Square";

export function WinnerModal ({winner, resetGame,}){

    if (winner == null) return null;

    var winnerText = winner? 'Gano: ':'Empate: ';

    return (    
        
    
        <section className=' absolute w-[100vw] h-[100vw] top-0 left-0 grid place-items-center opacity-70'>
            <div className='bg-[#111] h-[300px] w-[320px] border-solid border-[#eee] border-2 rounded-xl flex flex-col justify-center items-center gap-[20px]'>
            <h2>
                {winnerText}
            </h2>
            <header className=' m-auto w-fit border-solid border-2 border-[#eee]  rounded-xl flex gap-[15px]'>
                {winner && ( <Square>{winner}</Square>)}
            </header>
            <footer>
                <button onClick={resetGame} className='px-2 py-3 m-6 bg-transparent border-solid border-[#eee] border-2 rounded-md font-bold cursor-pointer hover:bg-[#eee] hover:text-[#222]'>Empezar de nuevo</button>
            </footer>
            </div>
        </section>
            
        
    )
}