import React from 'react';
import "../../App.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { URL_CLIENTES } from "../../Constants/endpoints";
import { useNavigate } from 'react-router-dom';


import { AGREGARCLIENTEPAGE, EDITARCLIENTEPAGE, VERCLIENTEPAGE } from '../../Routers/router';

import { Link } from 'react-router-dom';
import "../../CSS/tablacliente.css";
import "../../CSS/TablaConstrucciones.css";
import { FaEye, FaEdit, FaTimes } from 'react-icons/fa';

const Clientescrud = () => {
  const [datos, setDatos] = useState([]);

  const getDatos = async () => {
    try {
      const response = await axios.get(URL_CLIENTES);
      setDatos(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener los clientes:", error);
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    getDatos();
  }, []);
  const eliminar = async (id) => {
    try {

      await axios.delete(`${URL_CLIENTES}/${id}`);
      getDatos();
    } catch (error) {
      console.error("error al eliminar el cliente", error);

    }

  }


  return (
    <div>
      <h1 className="titulo-clientes">Clientes</h1>
      <table className="tabla-clientes">
        <thead>
          <tr>
            <td>ID</td>
            <td>Nombre y Apellido</td>
            <td>Correo</td>
            <td>Tipo de Cliente</td>
          </tr>
        </thead>
        <tbody>
          {datos.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nombre_apellido}</td>
              {/*<td>{cliente.telefono}</td>*/}
              <td>{cliente.email}</td>
              {/*<td>{cliente.direccion}</td>*/}
              <td>
                <ul>
                  {cliente.tipo_cliente.map((tipo, index) => (
                    <li key={index}>{tipo}</li>
                  ))}
                </ul>
              </td>
              <td className="grupo-de-botones">

                <Link to={`/verclientepage/${cliente.id}`} className="botone-ver" >
                <FaEye/>
                </Link>

                 <Link
                  to={`/editarclientepage/${cliente.id}`} className="botone-editar">
                <FaEdit/>
                </Link>
                
                <button onClick={() => {if (window.confirm("¿Seguro que querés eliminar?")) {eliminar(cliente.id);
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
      <button onClick={() => navigate(AGREGARCLIENTEPAGE)} className="botone-agregar">Agregar Cliente</button>
    </div>
  );
};




export default Clientescrud;