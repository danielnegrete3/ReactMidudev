import { useCart } from '../hooks/useCart'
import {AddToCartIcon} from './Icons'

export function Article({article}){

    const {addCart} = useCart()

    return(
        <div>
            <h3>{article.title}</h3>
            <img src={article.thumbnail} alt={article.description} />
            <button onClick={()=>addCart(article)}>
                <AddToCartIcon/>
            </button>
            <p>${article.price}</p>
        </div>
    )
}