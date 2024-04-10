/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { carInitialState, cartReducer } from "../reducer/cart";

export const CartContext = createContext();

function useCartReducer(){
  const[state,dispatch]  = useReducer(cartReducer,carInitialState)
  const addToCart = (product)=>{
    dispatch({type:"ADD_TO_CART",playload:product})
  }
  const removeFromCart = (product)=>{
    dispatch({type:"REMOVE_FROM_CART",playload:product})
  }
  const clearCart = ()=>{
    dispatch({type:"CLEAR_CART"})
  }
  const decrementCart = (product)=>{
    dispatch({type:"DECREMENT_CART",playload:product})
  }
  return {
    state,
    addToCart,
    removeFromCart,
    clearCart,
    decrementCart
  }
}
export function CartProvider({children}){
    const {state,addToCart,clearCart,decrementCart,removeFromCart} = useCartReducer()
  
  return( 
    <CartContext.Provider value={{
      cart:state,
      addToCart,
      clearCart,
      decrementCart,
      removeFromCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}