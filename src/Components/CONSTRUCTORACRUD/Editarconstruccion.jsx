import {Button} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { URL_CONSTRUCCIONES } from '../../Constants/endpoints';
import { useParams, useNavigate} from 'react-router-dom';
import {HOME} from '../../Routers/router';
import '../../css/Formulario.css';

const Editarconstruccion = () => {

const {id} = useParams();
const navigate = useNavigate();
const [datos, setDatos] = useState({});

const getDatos = async () => {
  try {
    const response = await axios.get(`${URL_CONSTRUCCIONES}/${id}`);
    setDatos(response.data);
  } catch (error) {
    console.error("Error al obtener datos de contruccion:", error);
  }
};

useEffect(() => {
  getDatos();
}, []);

const handleChange = (e) => {
  setDatos({ ...datos, [e.target.name]: e.target.value });
}


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.put(`${URL_CONSTRUCCIONES}/${id}`, datos);
    setDatos(response.data);
    if (response) {
      navigate(HOME);
    }
  } catch (error) {
    console.error("Error al actualizar datos de construccion:", error);
  }
}

  return (
    <div>
      <h2>Editar Construcción</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Ubicación</label>
          <input
            type="text"
            className="form-control"
            name="ubicacion"
            value={datos.ubicacion|| ''}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Metros Cuadrados</label>
          <input
            type="text"
            className="form-control"
            name="metrosC"
            value={datos.metrosC || ''}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Cantidad de obreros</label>
          <input
            type="text"
            className="form-control"
            name="cantitad_de_obreros"
            value={datos.cantitad_de_obreros || ''}
            onChange={handleChange}
          />
        </div>
            <div className="mb-3">
          <label className="form-label">Precio</label>
          <input
            type="text"
            className="form-control"
            name="precio"
            value={datos.precio || ''}
            onChange={handleChange}
          />
        </div>

         <div className="mb-3">
          <label className="form-label">Precio de mano de obra</label>
          <input
            type="text"
            className="form-control"
            name="precio_mano_obra"
            value={datos.precio_mano_obra || ''}
            onChange={handleChange}
          />
        </div>
         <div className="mb-3">
          <label className="form-label">Cliente</label>
          <input
            type="text"
            className="form-control"
            name="cliente"
            value={datos.cliente || ''}
            onChange={handleChange}
          />
        </div>
         <div className="mb-3">
          <label className="form-label">Arquitecto</label>
          <input
            type="text"
            className="form-control"
            name="arquitecto"
            value={datos.arquitecto || ''}
            onChange={handleChange}
          />
        </div>
        
      <div className="d-flex justify-content-end gap-2 mt-4">
        <Button type="submit" variant="success">Guardar Cambios</Button>
        <Button variant="danger" onClick={() => navigate(HOME)}>Cancelar</Button>
      </div>

        {/* <Button type="submit" variant="primary">Guardar Cambios</Button>
        <Button variant="secondary" onClick={() => navigate(HOME)}>Cancelar</Button> */}
      </form>


    </div>
  )
}

export default Editarconstruccion;