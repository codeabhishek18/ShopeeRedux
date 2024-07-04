import { useDispatch } from "react-redux"
import { removeFromWishlist } from "../store/slices/wishlistReducer";
import { addCartItem } from "../store/slices/cartReducer";

export default function WishlistItem({productId, title, rating, price, imageUrl}) 
{
    const dispatch = useDispatch();

    return (
      <div className="product">
        <div className="product-image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="title-container">
          <h3>
            <a href="#">{title}</a>
          </h3>
        </div>
        <div className="cta-container">
          <button onClick={() => {
            dispatch(addCartItem({productId, title, rating, price, imageUrl }))
            dispatch(removeFromWishlist(productId))
          }}>Move to Cart</button>
          <button onClick={() => dispatch(removeFromWishlist(productId))}>Remove</button>
        </div>
      </div>
    )
  }