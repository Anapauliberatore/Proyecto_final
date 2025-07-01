import { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import axios from 'axios'
import { URL_CONSTRUCCIONES } from '../../Constants/endpoints'
import { useNavigate } from 'react-router-dom'

import "../../css/Agregarconstructora.css"
import { TABLACONSTRUCCIONES } from '../../Routers/router';

const Agregarconstrucciones = () => {
  const navigate = useNavigate()

  const initialState = {
    ubicacion: "",
    metrosC: "",
    cantidad_de_obreros: "",
    precio:"",
    precio_mano_obra: "",
    cliente: "",
    arquitecto: "",
  }

  const [construcciones, setConstrucciones] = useState(initialState)

  const handleChange = (e) => {
    setConstrucciones({ ...construcciones, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(URL_CONSTRUCCIONES, construcciones)
      setConstrucciones(initialState)
      if (response) {
        navigate(TABLACONSTRUCCIONES)
        console.log("Producto creado exitosamente", response.data)
      }
    } catch (error) {
      console.error("Error al crear el producto", error)
    }
  }

  return (
    <div>
      <h2>Creación de construcciones</h2>
      <Container>
        <Form className="for-constructora" onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Ubicación de construcciones</Form.Label>
            <Form.Control
              type="text"
              name="ubicacion"
              value={construcciones.ubicacion}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Metros cuadrados</Form.Label>
            <Form.Control
              type="text"
              name="metrosC"
              value={construcciones.metrosC}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Cantidad de obreros</Form.Label>
            <Form.Control
              type="text"
              name="cantidad_de_obreros"
              value={construcciones.cantidad_de_obreros}
              onChange={handleChange}
            />
          </Form.Group>      

          <Form.Group>
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="text"
              name="precio"
              value={construcciones.precio}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Precio de mano de obra</Form.Label>
            <Form.Control
              type="text"
              name="precio_mano_obra"
              value={construcciones.precio_mano_obra}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Cliente</Form.Label>
            <Form.Control
              type="text"
              name="cliente"
              value={construcciones.cliente}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Arquitecto</Form.Label>
            <Form.Control
              type="text"
              name="arquitecto"
              value={construcciones.arquitecto}
              onChange={handleChange}
            />
          </Form.Group>

          <div style={{ height: "10px" }}></div>

          <Button className="bot-guardar" type="submit">Guardar</Button>

          <button
            type="button"
            className="bot-cancelar"
            onClick={() => navigate(TABLACONSTRUCCIONES)}
          >
            Cancelar
          </button>

        </Form>
      </Container>
    </div>
  )
}

export default Agregarconstrucciones
