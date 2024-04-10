import { useContext } from "react"
import { CartContext } from "../context/cartContex"

export const useCart = ()=>{
  const context = useContext(CartContext)
  if(context === undefined){
    throw new Error("usecart must be used a within a CartProvider")
  }
  return context
}