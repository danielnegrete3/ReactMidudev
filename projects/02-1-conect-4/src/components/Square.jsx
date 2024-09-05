
export function Square({color}){
    var thisColor = color? color:'bg-[#242424]';
    return (
        <div className=" w-28 h-28 bg-clip-border bg-blue-400 flex items-center justify-center ">
            <div className={`absolute  rounded-full w-20 h-20 ${thisColor}`}></div>
        </div>
    )
}