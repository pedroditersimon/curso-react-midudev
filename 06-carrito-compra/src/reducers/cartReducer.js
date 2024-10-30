export const CART_ACTIONS = {
    CLEAR: 'CLEAR',
    ADD: 'ADD',
    REMOVE: 'REMOVE'
}

export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || [];
function updateLocalStorageState(state) {
    window.localStorage.setItem('cart', JSON.stringify(state));
}

const UPDATE_STATE_BY_ACTION = {
    [CART_ACTIONS.CLEAR]: () => {
        return [];
    },
    [CART_ACTIONS.ADD]: (state, action) => {
        const product = action.payload;
        const productIndex = state.findIndex(i => i.id === product.id);

        // already in, add quantity
        if (productIndex >= 0) {
            const newCart = structuredClone(state);
            newCart[productIndex].quantity += 1;
            return newCart;
        }

        // add new entry
        return [...state, { ...product, quantity: 1 }];
    },
    [CART_ACTIONS.REMOVE]: (state, action) => {
        const product = action.payload;
        return state.filter(item => item.id !== product.id);
    }
}

export function cartReducer(state, action) {
    const updateState = UPDATE_STATE_BY_ACTION[action.type];
    const result = updateState ? updateState(state, action) : state;
    updateLocalStorageState(result);
    return result;
}