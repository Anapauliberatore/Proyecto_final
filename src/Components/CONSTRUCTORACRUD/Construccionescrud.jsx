import React from 'react'
import "../../App.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { URL_CONSTRUCCIONES } from "../../Constants/endpoints";

import { AGREGARCONSTRUCCIONPAGE , VERCONSTRUCCIONPAGE, EDITARCONSTRUCCIONPAGE } from '../../Routers/router';


import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaEye, FaEdit, FaTimes } from 'react-icons/fa';

const Construccionescrud = () => {
  const [datos, setDatos] = useState([]);

  const getDatos = async () => {
    try {
      const response = await axios.get(URL_CONSTRUCCIONES);
      setDatos(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener los construcciones:", error);
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    getDatos();
  }, []);

  const eliminar = async (id) => {
    try {
      await axios.delete(`${URL_CONSTRUCCIONES}/${id}`);
      getDatos();

    } catch (error) { console.error("error al eliminar construcciones", error) };
  }

  return (
    <div><h1 className="titulo-construcciones">Construcciones</h1>
      
      <table className="tabla-construcciones">
          <thead>
            <tr>
              <td>ID</td>
              <td>Ubicación</td>
              <td>Cliente</td>
              <td>Arquitecto</td>
            </tr>
          </thead>
          <tbody>
            {datos.map((construccione) => (
            <tr key={construccione.id}>
              <td>{construccione.id}</td>
              <td>{construccione.ubicacion}</td>
              {/*
              <td>{construccione.mestrosC}</td>
              <td>{construccione.precio}</td>
              <td>{construccione.precio_mano_obra}</td>*/}

              
              <td>{construccione.cliente}</td>
              <td>{construccione.arquitecto}</td>
              <td className="grupo-de-botones">

                <Link to={`/verconstruccionpage/${construccione.id}`} className="botone-ver" >
                <FaEye/>
                </Link>

                <Link to={`/editarconstruccionpage/${construccione.id}`} className="botone-editar">
                <FaEdit/>
                </Link>              
                <button
                  onClick={() => {
                    if (window.confirm("¿Seguro que querés eliminar?")) {
                      eliminar(construccione.id);
                    }
                  }}
                  className="botone-eliminar"
                >
                <FaTimes/>
                </button>

                

              </td>

            </tr>
            ))}
          </tbody>

      </table>
      <button onClick={() => navigate(AGREGARCONSTRUCCIONPAGE)} className="botone-agregar">  Agregar construcciones</button>
    </div>
  )
};

export default Construccionescrud;