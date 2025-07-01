
import { Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { URL_CLIENTES } from '../../Constants/endpoints';
import { useParams, useNavigate } from 'react-router-dom';
import { TABLACLIENTE } from '../../Routers/router';
import '../../css/Formulario.css';


const Editarcliente = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [datos, setDatos] = useState({tipo_cliente: []});

  const getDatos = async () => {
    try {
      const response = await axios.get(`${URL_CLIENTES}/${id}`);
      setDatos(response.data);
    } catch (error) {
      console.error("Error al obtener el cliente:", error);
    }
  };

  useEffect(() => {
    getDatos();
  }, []);

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  }
  const handle_tipo_cliente = (index, value) => {
  const edita_tipo_cliente = [...datos.tipo_cliente];
  edita_tipo_cliente[index] = value;
  setDatos({ ...datos, tipo_cliente: edita_tipo_cliente });
}
const elimina_tipo_cliente = (index) => {
  const edita_tipo_cliente = [...datos.tipo_cliente];
  edita_tipo_cliente.splice(index, 1);
  setDatos({ ...datos, tipo_cliente: edita_tipo_cliente });
};
const agregar_tipo_cliente = () => {
  const edita_tipo_cliente = [...datos.tipo_cliente];
  edita_tipo_cliente.push('');
  setDatos({ ...datos, tipo_cliente: edita_tipo_cliente });
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${URL_CLIENTES}/${id}`, datos);
      setDatos(response.data);
      if (response) {
        navigate(TABLACLIENTE);
      }
    } catch (error) {
      console.error("Error al actualizar el cliente:", error);
    }
  }

  return (


  <div>
    <h2>Editar Cliente</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Apellido y Nombre</label>
        <input
          type="text"
          className="form-control"
          name="nombre_apellido"
          value={datos.nombre_apellido || ''}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label"> Teléfono</label>
        <input
          type="text"
          className="form-control"
          name="telefono"
          value={datos.telefono || ''}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={datos.email || ''}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Dirección</label>
        <input
          type="text"
          className="form-control"
          name="direccion"
          value={datos.direccion || ''}
          onChange={handleChange}
        />
      </div>

      
<div className="mb-3">
  <label className="form-label">Tipo de cliente</label>
  {["Arrendatario", "Empresa", "Gubernamental", "Inversor", "Otro"].map((opcion, index) => (
    <div key={index} className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id={`tipo_${index}`}
        value={opcion}
        checked={datos.tipo_cliente.includes(opcion)}
        onChange={(e) => {
          const value = e.target.value;
          let nuevosTipos;
          if (e.target.checked) {
            nuevosTipos = [...datos.tipo_cliente, value];
          } else {
            nuevosTipos = datos.tipo_cliente.filter(tipo => tipo !== value);
          }
          setDatos({ ...datos, tipo_cliente: nuevosTipos });
        }}
      />
      <label className="form-check-label ms-2" htmlFor={`tipo_${index}`}>
        {opcion}
      </label>
    </div>
  ))}
</div>

     
      <div className="d-flex justify-content-end gap-2 mt-4">
        <Button type="submit" variant="success">Guardar Cambios</Button>
        <Button variant="danger" onClick={() => navigate(TABLACLIENTE)}>Cancelar</Button>
      </div>
    </form>
  </div>
);

};

export default Editarcliente;



