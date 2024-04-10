import { useContext, useMemo } from "react";
import { CartContext } from "../context/cartContex";

export function useSummary(){
  const {cart} = useContext(CartContext)
  const summary =useMemo(()=>{
    return cart.reduce((acc,product)=>{
      acc.total += product.price * product.quantity
      return acc
    },{
      total:0
    })
  },[cart])
  return summary
}