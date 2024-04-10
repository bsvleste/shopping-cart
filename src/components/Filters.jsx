import {  useId } from "react"
import { useFilters } from "../hook/useFilters";

// eslint-disable-next-line react/prop-types
export function Filters(){
  const {filters, setFilters}= useFilters()
  const minPriceFilteredId = useId();
  const categoryFilteredId = useId();
  function handleChangeMinPrice(event){
    
    setFilters(prevState=>({
      ...prevState,
      minPrice:event.target.value
    }))
  }
  function handleChangeCategory(event){
    setFilters(prevState=>({
      ...prevState,
      category:event.target.value
    }))
  }
  return(
    <section className="w-full">
        <div className="relative mb-8">
        <label htmlFor={minPriceFilteredId}>Preço</label>
        <input 
          id={minPriceFilteredId}
          onChange={handleChangeMinPrice} 
          type="range" 
          value={filters.minPrice} min="0" 
          max="2000" 
          className="w-full h-2 bg-gray-200 rounded-lg accent-slate-200 cursor-pointer dark:bg-gray-700" />
        <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min ($0)</span>
        <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/2 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">${filters.minPrice}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max ($2000)</span>
      </div>
 
      <form className="mx-auto mb-4">
        <label htmlFor={categoryFilteredId} className="block mb-2 text-sm font-mediumtext-white">Categorias</label>
        <select onChange={handleChangeCategory} id={categoryFilteredId} className="bg-black border border-slate-300 text-slate-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option value="all">Todos</option>
          <option value="laptops">Notebooks</option>
          <option value="smartphones">Celulares</option>
        </select>
      </form>       
    </section>
    )
}