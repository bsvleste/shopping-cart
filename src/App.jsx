import { useState } from 'react';
import {products as initialProduct} from './mock/products.json'
import { Products } from "./components/Products";
import { Header } from './components/Header';
import { useFilters } from "./hook/useFilters";
import { Cart } from './components/Cart';
import { CartProvider } from './context/cartContex';
function App() {
  const [products] = useState(initialProduct)
  const {filterProducts} = useFilters()
  const filterdProducts = filterProducts(products)  
  return (
    <CartProvider>
      <div className="flex flex-col  justify-center items-center w-full mt-8 mb-8 " >
        <div className='grid-cols-app gap-4'>
          <Header />
          <Cart/>
          <Products products={filterdProducts} />
          {/* <Footer /> */}
          </div>
      </div>
    </CartProvider>
  )
}
export default App