// Duck's Pattern -> Action Types, Action Creators, Action Reducers in a single file

// Action Types
const ADD_ITEM = 'cart/add'
const REMOVE_ITEM = 'cart/remove'
const UPDATE_INC_ITEM = 'cart/increase'
const UPDATE_DEC_ITEM = 'cart/decrease'

// Action Creators
export function addCartItem({productId, title, rating, price, imageUrl })
{
    return {
        type: ADD_ITEM, 
        payload : {productId, title, rating, price, imageUrl}
    }
}

export function removeCartItem(productId, qty)
{
    return {
        type: REMOVE_ITEM, 
        payload : {productId, qty}
    }
}

export function increaseQty(productId)
{
    return {
        type: UPDATE_INC_ITEM, 
        payload : {productId}
    }
}

export function decreaseQty(productId)
{
    return {
        type: UPDATE_DEC_ITEM, 
        payload : {productId}
    }
}

// Action Reducers
export default function reducer(state = [], action)
{
    switch(action.type)
    {
        case ADD_ITEM : 
        const isCartItem = state.find((item) => item.productId === action.payload.productId) 
        if(isCartItem)
            return state.map((cartItem) =>
            {
                if(cartItem.productId === action.payload.productId)
                    return {...cartItem, qty: cartItem.qty+1};
                return cartItem
            })
        return [...state, {...action.payload, qty:1}]
        
        case REMOVE_ITEM : return state.filter(product => product.productId !== action.payload.productId)
        
        case UPDATE_INC_ITEM : 
            return state.map((item) => 
            {
                if(item.productId === action.payload.productId)
                    return {...item, qty: item.qty + 1}
                return item;
            })
        
        case UPDATE_DEC_ITEM :
            return state.map((item) =>
            {
                if(item.productId === action.payload.productId)
                    return {...item, qty : item.qty - 1}
                return item;
            }).filter((item) => item.qty > 0)
        
        default : return state;
    }
}
