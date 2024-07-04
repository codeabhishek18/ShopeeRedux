import React from 'react'
import { useSelector } from 'react-redux'
import WishlistItem from '../components/WishlistItem'

export default function Wishlist() 
{
  const wishlist = useSelector((state) => state.wishlist)
  return (
    <div className="products-container">
      {wishlist.map(({ productId, title, rating, price, imageUrl}) => (
        <WishlistItem
          key={productId}
          productId={productId}
          title={title}
          rating={rating}
          price={price}
          imageUrl={imageUrl}
        />
      ))}
    </div>
  )
}