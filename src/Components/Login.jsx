import { useState, useEffect } from "react";
import axios from "axios";
import { URL_USUARIOS } from "../Constants/endpoints";
import {useNavigate} from "react-router-dom";
import { HOME } from "../Routers/router";
import "../CSS/Login.css";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [datos, setDatos] = useState([]);

  const userNavigate = useNavigate();

  const getUsuarios = async () => {
    try {
      const response = await axios.get(URL_USUARIOS);
      setDatos(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
    }
  };

  useEffect(() => {getUsuarios()}, []);


  const manejarEnvio = (e) => {
    e.preventDefault();
    const usuarioEncontrado = datos.find((user) => user.usuario === usuario && user.password === password
    );    
    if (usuarioEncontrado) {
      userNavigate(HOME);
    } else {
      alert ("contraseña o usuario INCORRECTO")
    }

  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={manejarEnvio}>
        <h2>Iniciar sesión</h2>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button  type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
