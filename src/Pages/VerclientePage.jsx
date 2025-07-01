import React from 'react'
import Vercliente from '../Components/CONSTRUCTORACRUD/Vercliente'
import { useParams } from "react-router-dom";
import Footer from '../Components/Footer';

const VerclientePage = () => {
  const { id } = useParams();
  
  return (
    <div>
      
      <div style={{ height: "80px" }}></div>
      VerclientePage

        <Vercliente/>

        <Footer/>
    </div>
  )
}

export default VerclientePage