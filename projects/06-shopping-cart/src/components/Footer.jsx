import { useContext } from 'react'
import './Footer.css'
import { FiltersContext } from '../contexts/FiltersContext'
import { CartContext } from '../contexts/CartContext'
import { useCart } from '../hooks/useCart'

export function Footer({}){
    const {cart} = useCart()
    return(
        <footer className='footer'>
            {JSON.stringify(cart)}
        </footer>
    )
}