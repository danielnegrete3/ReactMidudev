export const Square = ({children, isSelected, updateBoard, index})=> {

    const basicStyle = " w-[100px] h-[100px] border-solid border-2 border-[#eee] rounded text-5xl cursor-pointer items-center grid "
  
    const styleClass = isSelected? 
      "text-[#fff] bg-[#09f] ":
      "";
  
    const handleClick = () =>
    {
      updateBoard(index)
    }
  
    return (
      <div onClick={handleClick} className={basicStyle + styleClass}>
        {children}
      </div>
    )
  }