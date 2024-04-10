/* eslint-disable react/prop-types */
import {  ShoppingCart } from "lucide-react"
import { Filters } from "./Filters"
export function Header(){
  return (
    <>
    <div className="flex gap-4">
       <h1 className="font-sans font-bold text-3xl">React shop </h1> <ShoppingCart size={32}  />
    </div>
    <Filters  />
    </>
  )
}