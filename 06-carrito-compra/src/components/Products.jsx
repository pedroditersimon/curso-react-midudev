import { AddToCartIcon, RemoveFromCartIcon } from '../assets/Icons.jsx';
import { useCart } from '../hooks/useCart.jsx';
import './Products.css';

export function Products({ products }) {
    const { cart, addToCart, removeFromCart } = useCart();

    return (
        <main className="products">
            <ul>
                {products.map(product => {
                    const isInCart = cart.some(item => item.id === product.id);

                    return (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <button
                                    style={{
                                        backgroundColor: isInCart && 'red'
                                    }}
                                    onClick={() => {
                                        isInCart
                                            ? removeFromCart(product)
                                            : addToCart(product)
                                    }}>
                                    {isInCart
                                        ? <RemoveFromCartIcon />
                                        : <AddToCartIcon />}
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main >
    );
}