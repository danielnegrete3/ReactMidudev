import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function useCart(){
    const context = useContext(CartContext)
    
    if(context === undefined){
        throw new Error("useCart can't be used in this part of the program")
    }

    return context
}