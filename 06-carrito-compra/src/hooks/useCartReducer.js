import { cartReducer, CART_ACTIONS, cartInitialState } from "../reducers/cartReducer";
import { useReducer } from "react";

export function useCartReducer() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    function clearCart() {
        return dispatch({
            type: CART_ACTIONS.CLEAR
        });
    }

    function addToCart(product) {
        return dispatch({
            type: CART_ACTIONS.ADD,
            payload: product
        });
    }

    function removeFromCart(product) {
        return dispatch({
            type: CART_ACTIONS.REMOVE,
            payload: product
        });
    }

    return { cart: state, addToCart, removeFromCart, clearCart };
}