import { IS_DEVELOPMENT } from "../config/config"
import { useFilters } from "../hook/useFilters"

// eslint-disable-next-line react/prop-types
export function Footer(){
  const {filters} = useFilters()
  return(
    <footer className="fixed left-4 bottom-0 text-left px-2 py-6 bg-zinc-700 rounded-3xl  ">
      <h4 className="text-md text-zinc-400"><span className="text-lg text-blue-500">@BSVC☕DE</span> *-
      Prova Tecnica de React * -
      </h4>
      <h5 className="text-md text-zinc-400">Shopping cart usando useContext & useReducer</h5>
      <span>Filtros</span>
      {
        IS_DEVELOPMENT && <p>{JSON.stringify(filters,null,2)}</p>
      }
    
    </footer>
  )
}