const WISHLIST_ADD = 'wishlist/add'
const WISHLIST_REMOVE = 'wishlist/remove'

export function addToWishlist({productId, title, rating, price,imageUrl})
{   
    return {
        type: WISHLIST_ADD, 
        payload : {productId, title, rating, price,imageUrl}
    }
}

export function removeFromWishlist(productId)
{
    return {
        type: WISHLIST_REMOVE, 
        payload : {productId}
    }
}

export default function reducer(state = [], action)
{
    switch(action.type)
    {       
        case WISHLIST_ADD : return [...state, action.payload]
    
        case WISHLIST_REMOVE : return state.filter((item) => item.productId !== action.payload.productId)
    
        default : return state;
    }
}