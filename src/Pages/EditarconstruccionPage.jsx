import React from 'react'
import Editarconstruccion from '../Components/CONSTRUCTORACRUD/Editarconstruccion'
import { useParams } from "react-router-dom";
import Footer from '../Components/Footer';

const EditarconstruccionPage = () => {
  const { id } = useParams();
  return (
    <div>
      <div style={{ height: "80px" }}></div>
      
      

        <Editarconstruccion/>

        <Footer/>


    </div>
  )
}

export default EditarconstruccionPage