import { useId } from 'react';
import { AddToCartIcon, CartIcon, ClearCartIcon, RemoveFromCartIcon } from '../assets/Icons.jsx';
import './Cart.css';
import { useCart } from '../hooks/useCart.jsx';

export function CartItem({ thumbnail, title, price, quantity, addToCart }) {
    return (
        <li>
            <img src={thumbnail} />

            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    );
}

export function Cart() {
    const { cart, addToCart, clearCart } = useCart();
    const cartCheckboxId = useId();

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' />
            <div className='cart'>
                <ul>
                    {cart.map(product =>
                        <CartItem
                            key={product.id}
                            {...product}
                            addToCart={() => addToCart(product)}
                        />)}
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </div>
        </>
    );
}