/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { ShoppingBasket,Trash2 } from 'lucide-react'
import { useCart } from '../hook/useCart'
export function Products({ products }) {
  const {addToCart,cart,removeFromCart} = useCart()
  const checkedProductInCart = product=>{
    return  cart.some(item =>item.id === product.id)
  }
  return (
    <main>
      <ul className='grid grid-cols-app gap-4'>
        {products.slice(0,10).map(product => {
           const isProductInCart = checkedProductInCart(product) 
          return (
          <li className='flex justify-center items-center flex-col p-4 bg-neutral-950' key={product.id}>
            <img className='rounded w-full aspect-[16/9] block object-cover ' src={product.thumbnail} alt={product.title} />
            <div className='mt-4'>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div className='mt-2'>
              <button  onClick={()=>{isProductInCart ? removeFromCart(product) :addToCart(product)}} className='mb-8 px-4 py-2 rounded-md bg-zinc-800 hover:bg-zinc-700 transition-all'>
                {
                  isProductInCart ? <Trash2/> :<ShoppingBasket />}
              </button>
            </div>
          </li>
        )})}
      </ul>
    </main>
  )
}