
export function Square({color}){

    return (
        <div className=" w-28 h-28 bg-clip-border bg-blue-400 flex items-center justify-center ">
            <div className={`absolute  rounded-full w-20 h-20`}
            style={{
                backgroundColor: color??'#242424'
            }}
            ></div>
        </div>
    )
}