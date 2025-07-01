import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../css/Header.css';
import logoedifica from '../assets/logoedifica.jpg';
import { LOGIN, HOME, NOSOTROSPAGE, DESARROLLOSPAGE, INVERSORESPAGE, TABLACONSTRUCCIONES, TABLACLIENTE } from "../Routers/router";
import { LoginPermisoContext } from './LoginPermisoContext';

function Header() {
  const { isLoggedIn, logout } = useContext(LoginPermisoContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(HOME);
  };

  return (
    <header className="header">
      <div className="header-left">
        <NavLink to="/" className="nav-link">
          <img src={logoedifica} alt="Logo" className="logo" />
        </NavLink>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => "nav-link" + (isActive ? " activo" : "")}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to={NOSOTROSPAGE} className={({ isActive }) => "nav-link" + (isActive ? " activo" : "")}>
              Nosotros
            </NavLink>
          </li>
          <li>
            <NavLink to={DESARROLLOSPAGE} className={({ isActive }) => "nav-link" + (isActive ? " activo" : "")}>
              Desarrollos
            </NavLink>
          </li>
          <li>
            <NavLink to={INVERSORESPAGE} className={({ isActive }) => "nav-link" + (isActive ? " activo" : "")}>
              Inversores
            </NavLink>
          </li>
          {!isLoggedIn ? (
            <li>
              <NavLink to={LOGIN} className={({ isActive }) => "nav-link" + (isActive ? " activo" : "")}>
                Iniciar sesión
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink to={TABLACLIENTE} className={({ isActive }) => "nav-link" + (isActive ? " activo" : "")}>
                  Clientes
                </NavLink>
              </li>
              <li>
                <NavLink to={TABLACONSTRUCCIONES} className={({ isActive }) => "nav-link" + (isActive ? " activo" : "")}>
                  Construcciones
                </NavLink>
              </li>
              <li>
                <button onClick={handleLogout} className="logout-button">
                  Cerrar sesión
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
