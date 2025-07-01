import React, { useState, useEffect } from 'react';
import "../../App.css";
import axios from 'axios';
import { URL_CONSTRUCCIONES } from "../../Constants/endpoints";
import { TABLACONSTRUCCIONES } from '../../Routers/router';
import { useNavigate, useParams } from 'react-router-dom';
import "../../CSS/VerConstruccion.css";

const Verconstruccion = () => {
  const { id } = useParams();
  const [datos, setDatos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getDatos = async () => {
      try {
        const response = await axios.get(URL_CONSTRUCCIONES);
        setDatos(response.data);
      } catch (error) {
        console.error("Error al obtener las construcciones:", error);
      }
    };
    getDatos();
  }, []);

  const construccion = datos.find(c => String(c.id) === id) || {};

  return (
    <div>
      <h1 className="titulo-ver-construcciones">Información de Construcción</h1>

      <table className="tabla-ver-construcciones">
        <thead>
          <tr>
            <th>Id</th>
            <th>Ubicación</th>
            <th>Metros cuadrados</th>
            <th>Precio</th>
            <th>Precio mano de obra</th>
            <th>Cliente</th>
            <th>Arquitecto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{construccion.id}</td>
            <td>{construccion.ubicacion}</td>
            <td>{construccion.metrosC}</td>
            <td>{construccion.precio}</td>
            <td>{construccion.precio_mano_obra}</td>
            <td>{construccion.cliente}</td>
            <td>{construccion.arquitecto}</td>
          </tr>
        </tbody>
      </table>

      <button onClick={() => navigate(TABLACONSTRUCCIONES)} className="boton-ver">Volver</button>
    </div>
  );
};

export default Verconstruccion;
