import { useState } from "react";

export function TwitterFollowCard({ userName, name}){
    const [isFollowing, setIsFollowing] = useState(false); 
    const folow = isFollowing? 'Siguiendo':'Seguir';
    const buttonClass = isFollowing? 
        "cursor-pointer ml-[16px] border-0 rounded-[999px] px-[6px] py-[16px] font-bold hover:bg-red-500 ":
        "cursor-pointer ml-[16px] border-0 rounded-[999px] px-[6px] py-[16px] font-bold hover:bg-[#09f]";

    const handleClick = () =>
    {
        setIsFollowing(!isFollowing);
    }

    return(
        <article className=" flex items-center justify-between text-[.8rem] text-gray-100">
            <header className=" flex items-center gap-[4px]">
                <img 
                    className="  w-[48px] h-[48px] rounded-full"
                    src={`https://unavatar.io/${userName}`}
                    alt={`Avatar de ${name}`} />
                <div className=" flex flex-col">
                    <strong className="">{name}</strong>
                    <span className=" opacity-60">{`@${userName}`}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClass} onClick={handleClick} >
                    {folow}
                    <span className=" text-rose-400 bg-transparent ">
                        Dejar de seguir
                    </span>
                </button>
            </aside>
        </article>
    )
}