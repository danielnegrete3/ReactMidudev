import { createContext, useReducer, useState } from "react"
import { CartReducer, InitializateCart } from "../reducers/CartReducer"

export const CartContext = createContext()

export function CartProvider({children}){

    const [state,dispatch] = useReducer(CartReducer,InitializateCart)

    const addCart = article => dispatch({
        type : 'AddToCart',
        payload : article
    })

    const popCart = article => dispatch({
        type : 'PopToCart',
        payload : article
    })

    const clearCart = ()=> dispatch({
        type:'ClearCart'
    })

    return(
        <CartContext.Provider
            value={{
                cart:state,
                addCart,
                popCart,
                clearCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}