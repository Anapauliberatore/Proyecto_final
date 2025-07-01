import React from 'react'
import Verconstruccion from '../Components/CONSTRUCTORACRUD/Verconstruccion'
import { useParams } from "react-router-dom";
import Footer from '../Components/Footer';

const VerconstruccionPage = () => {
  const { id } = useParams();
  

  return (
    <div>
      <div style={{ height: "80px" }}></div>

        <Verconstruccion/>

        <Footer/>
    </div>
  )
}

export default VerconstruccionPage;