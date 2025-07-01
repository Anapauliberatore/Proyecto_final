
import React from 'react'
import Editarcliente from '../Components/CONSTRUCTORACRUD/Editarcliente'
import { useParams } from "react-router-dom";
import Footer from '../Components/Footer';

const EditarclientePage = () => {
    const { id } = useParams();

  return (
    <div>EditarclientePage
      <div style={{ height: "80px" }}></div>


        <Editarcliente/>

        <div style={{ height: "80px" }}></div>

        <Footer/>
    </div>
  )
}

export default EditarclientePage