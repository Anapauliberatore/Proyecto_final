import React from 'react'
import Agregarconstrucciones from '../Components/CONSTRUCTORACRUD/Agregarconstrucciones';
import Footer from '../Components/Footer';
import "../css/Agregarconstructora.css"


const Crearconstruccion = () => {
  return (
    <div className="fondo-pag" >
      <div style={{ height: "59px" }}></div>

      <Agregarconstrucciones/>
      <div style={{ height: "59px" }}></div>
      <Footer/>
    </div>
  )
}

export default Crearconstruccion;