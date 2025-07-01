import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import axios from 'axios';
import { URL_CLIENTES } from '../../Constants/endpoints';
import { useNavigate } from 'react-router-dom';
import { TABLACLIENTE } from '../../Routers/router';
import "../../css/Agregarcliente.css";


const Agregarcliente = () => {
  const navigate = useNavigate();

  const initialState = {
    nombre_apellido: '',
    telefono: '',
    email: '',
    direccion: '',
    tipo_cliente: [],
  };

  const [cliente, setCliente] = useState(initialState);

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    let nuevosTipos;
    if (e.target.checked) {
      nuevosTipos = [...cliente.tipo_cliente, value];
    } else {
      nuevosTipos = cliente.tipo_cliente.filter((tipo) => tipo !== value);
    }
    setCliente({ ...cliente, tipo_cliente: nuevosTipos });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(URL_CLIENTES, cliente);
      if (response) {
        navigate(TABLACLIENTE );
        console.log('Cliente creado exitosamente', response.data);
      }
    } catch (error) {
      console.error('Error al crear el cliente', error);
    }
  };

  return (
    <div>
      <h2>Crear Cliente</h2>
      <Container  >
        <Form className="fon-cliente" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control
              type="text"
              name="nombre_apellido"
              value={cliente.nombre_apellido}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Teléfono</Form.Label>
            <Form.Control
              type="text"
              name="telefono"
              value={cliente.telefono}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={cliente.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              name="direccion"
              value={cliente.direccion}
              onChange={handleChange}
            />
          </Form.Group>

         <Form.Group className="tipo-cliente-checks">
  <Form.Label>Tipo de cliente</Form.Label>
  {["Arrendatario", "Empresa", "Gubernamental", "Inversor", "Otro"].map((opcion, index) => (
    <div key={index} className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id={`tipo_${index}`}
        value={opcion}
        checked={cliente.tipo_cliente.includes(opcion)}
        onChange={handleCheckboxChange}
      />
      <label className="form-check-label ms-2" htmlFor={`tipo_${index}`}>
        {opcion}
      </label>
    </div>
  ))}
</Form.Group>

          <br />

         <div className="botones-contenedor">
  <button type="submit" className="boton-pequeno">
    Guardar
  </button>
  <button
    type="button"
    className="boton-pequeno cancelar"
    onClick={() => navigate(TABLACLIENTE)}
  >
    Cancelar
  </button>
</div>

        </Form>
      </Container>
    </div>
  );
};

export default Agregarcliente;
