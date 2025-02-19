import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { FilterProvider } from './context/filtersContext'

ReactDOM.createRoot(document.getElementById('root')).render(
    <FilterProvider>
      <App />
    </FilterProvider>
  
)
