import { useId } from "react"
import { AddToCartIcon, ClearCartIcon, CartIcon, RemoveFromCartIcon} from "./Icons"
import './Cart.css'
import { useCart } from "../hooks/useCart"

export function Cart(){
    const cartCheckboxId = useId()

    const {cart, addCart, popCart, clearCart} = useCart()

    return(
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />
            <aside className="cart">
                <ul>
                    {
                        cart.map(article => {
                            return(
                                <li key={article.id}>
                                    <h3>{article.title}</h3>
                                    <img src={article.thumbnail} alt={article.description} />
                                    <footer>
                                        <small>
                                            Qty: {article.quantity}
                                        </small>
                                        <div className="items-cart">
                                            <button onClick={()=>addCart(article)}><AddToCartIcon/></button>
                                            <button onClick={()=>popCart(article)}><RemoveFromCartIcon/></button>
                                        </div>
                                    </footer>
                                    <p>${article.price}</p>
                                </li>
                            )
                        })
                    }
                </ul>

                <div>
                    <h3>Vaciar carrito</h3>
                    <button onClick={clearCart}>
                        <ClearCartIcon/>
                    </button>
                </div>
            </aside>
        </>
    )
}