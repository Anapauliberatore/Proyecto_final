import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { URL_USUARIOS } from "../Constants/endpoints";
import { useNavigate } from "react-router-dom";
import { LoginPermisoContext } from "./LoginPermisoContext";
import { HOME } from "../Routers/router";
import "../CSS/Login.css";
import logoedifica from '../assets/logoedifica.jpg';

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [datos, setDatos] = useState([]);
  const navigate = useNavigate();
  const { login } = useContext(LoginPermisoContext);

  useEffect(() => {
    axios.get(URL_USUARIOS)
      .then(res => setDatos(res.data))
      .catch(err => console.error("Error al obtener usuarios:", err));
  }, []);

  const manejarEnvio = (e) => {
    e.preventDefault();

    const usuarioEncontrado = datos.find(user =>
      user.usuario === usuario && user.password === password
    );

    if (usuarioEncontrado) {
      login();
      navigate(HOME);
    } else {
      alert("contraseña o usuario INCORRECTO");
    }
  };

  return (
    <div className="login-contenedor">
      <div>
        <img src={logoedifica} alt="Logo" className="logo-login" />
      </div>
      <form className="login-form" onSubmit={manejarEnvio}>
        <h2>Iniciar sesión</h2>
        <input
          className="datos"
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={e => setUsuario(e.target.value)}
          required
        />
        <input
          className="datos"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button className="boton-logo" type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;
