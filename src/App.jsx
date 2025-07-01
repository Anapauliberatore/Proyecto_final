import {BrowserRouter, Routes, Route} from "react-router-dom"
import { HOME,EDITARCLIENTE,EDITARCONSTRUCCION }   from "./Routers/router"
import Editarcliente from "./Components/CONSTRUCTORACRUD/Editarcliente"
import Editarconstruccion from "./Components/CONSTRUCTORACRUD/Editarconstruccion"
import Home from './Pages/Home'


function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path= {EDITARCLIENTE} element= {<Editarcliente/>} />
      <Route path= {EDITARCONSTRUCCION} element= {<Editarconstruccion/>} />
      <Route path= {HOME} element= {<Home/>} />
      












    </Routes>
     
    </BrowserRouter>
  )
}

export default App
