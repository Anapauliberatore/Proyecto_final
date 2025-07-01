import React, { useState, useEffect } from 'react';
import "../../App.css";
import axios from 'axios';
import { URL_CLIENTES } from "../../Constants/endpoints";
import { TABLACLIENTE } from '../../Routers/router';
import { useNavigate, useParams } from 'react-router-dom';
import "../../CSS/VerCliente.css";

const Vercliente = () => {
  const { id } = useParams();
  const [datos, setDatos] = useState({tipo_cliente: []});
  const navigate = useNavigate();

  useEffect(() => {
    const getDatos = async () => {
      try {
        const response = await axios.get(`${URL_CLIENTES}/${id}`);
        setDatos(response.data);
      } catch (error) {
        console.error("Error al ver cliente:", error);
      }
    };
    getDatos();
  }, [id]);

  return (
    <div>
      <h1 className="titulo-ver-clientes">Información del Cliente</h1>

      <table className="tabla-ver-clientes">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre y Apellido</th>
            <th>Telefono</th>
            <th>Correo</th>
            <th>Dirección</th>
            <th>Tipo de Cliente</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{datos.id}</td>
            <td>{datos.nombre_apellido}</td>
            <td>{datos.telefono}</td>
            <td>{datos.enmail}</td>
            <td>{datos.direccion}</td>
            <td>
                <ul>
                  {datos.tipo_cliente.map((tipo, index) => (
                    <li key={index}>{tipo}</li>
                  ))}
                </ul>
              </td>





          </tr>
        </tbody>
      </table>

      <button onClick={() => navigate(TABLACLIENTE)}className="boton-ver">Volver</button>
    </div>
  );
};

export default Vercliente;
