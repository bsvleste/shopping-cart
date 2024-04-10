/* eslint-disable react/prop-types */
import { useId } from 'react';
import { ShoppingCart,CircleMinus,CirclePlus,Trash2    } from 'lucide-react';
import { useCart } from '../hook/useCart';
import { useSummary } from '../hook/useSummary';


function CartItem({title,thumbnail,price,quantity,addToCart,decrementCart}){
  return (
      <div className='flex w-[460px] mb-4'>
          <li className='border-b-2 border-b-slate-200 pb-4'>
            <img className='aspect-video w-1/3' src={thumbnail} alt="iphone" />
            <strong>{title}</strong> - ${price * quantity}
          </li>
          <footer className='flex gap-2 justify-center items-center'>
            <button  className='px-4 py-2 bg-zinc-800 rounded-md hover:bg-zinc-700' onClick={decrementCart} ><CircleMinus /> </button>
            <small>Qty:{quantity}</small>
            <button onClick={addToCart}  className='px-4 py-2 bg-zinc-800 rounded-md hover:bg-zinc-700'><CirclePlus /></button>
          </footer>
          
      </div>
  )
    
}

export function Cart(){
  const {clearCart,decrementCart,addToCart,cart} = useCart()
  const summary = useSummary();
  const cartCheckBoxId = useId()
  return(
    <>
      <label htmlFor={cartCheckBoxId} 
        className={` cartButton hover:scale-150 flex items-center bg-blue-500 cursor-pointer rounded-full h-8 justify-center p-1 fixed right-2 top-2 transition-all w-8 z-50`}>
          
       <ShoppingCart />
      </label>
      <input type="checkbox" id={cartCheckBoxId} hidden  />
      <aside className=' bg-black p-14 fixed top-0 right-0 hiddenCart h-full overflow-auto'>
        <ul className=''>
          {
            cart.map(product=>(
              <CartItem key={product.id} 
              {...product} 
              addToCart={()=>addToCart(product)}
              decrementCart={()=>decrementCart(product)} />
            ))
          }
        </ul>
        <h2>Total  a pagar R$ ${summary.total} </h2>
        {
          cart.length > 0 && <button onClick={clearCart} className='px-4 py-2 bg-zinc-800 rounded-md hover:bg-zinc-700 '><Trash2 /></button>
        }
      </aside>
    </>
  )
}