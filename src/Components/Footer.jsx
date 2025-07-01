import React from 'react';

import logo from '../assets/logo empresa.jpeg';
import 'bootstrap-icons/font/bootstrap-icons.css'
import "../css/Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container-fluid px-5"> {/* para que el contenido se adapte al ancho de pantalla y se separe 5px de los bordes  */}
        <div className="row"> {/* organiza los elementos en columnas */}

          {/* Logo y slogan */}
          <div className="col-md-3">
            <div className="footer-logo-container ">
              <img src={logo} className="footer-logo" />
              <h5 className="footer-title ">Edifica Group</h5>
            </div>
            <p className="footer-slogan">"Calidad que se ve, compromiso que se siente."</p>
          </div>

          {/* Contacto */}
          <div className="col-md-3 ">
            <h6 className="footer-subtitle">Contacto</h6>
            <p><i className="bi bi-geo-alt"></i> Av. América 853, San Miguel de Tucumán</p>
            <p><i className="bi bi-telephone"></i> (381) 4265124</p>
            <p><i className="bi bi-envelope"></i> edificagroup@gmail.com</p>
          </div>

          {/* Redes Sociales */}
          <div className="col-md-3">
            <h6 className="footer-subtitle">Redes Sociales</h6>
            <div className="footer-redessociales">
              <a href="https://www.facebook.com/profile.php?id=61577848022860" target="_blank"><i className="bi bi-facebook fs-4"></i></a>
              <a href="https://www.instagram.com/edifica_group/" target="_blank"><i className="bi bi-instagram fs-4"></i></a>
              <a href="https://es.linkedin.com/learning/" target="_blank"><i className="bi bi-linkedin fs-4"></i></a>
              <a href="https://wa.me/3816105148?text=Hola%20quiero%20más%20información%20sobre%20construcciones" target="_blank"><i className="bi bi-whatsapp fs-4"></i></a>
            </div>
          </div>

          {/* Mapa de ubicacion */}
          <div className="col-md-3">
            <h6 className="footer-subtitle">Ubicacion:</h6>
             <div className="ratio ratio-4x3"> {/* tamaño4x3 */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.4432213728243!2d-65.2509166!3d-26.8094831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d32288c4cb5%3A0xe78b71a82f07100e!2sAv.%20Am%C3%A9rica%20853%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses!2sar!4v1719345000000"
                width="100%"
                height="100%"
                allowFullScreen="" // para que el usuario pueda ampliar el mapa
              ></iframe>
            </div>
            
          </div>
        </div>

        {/* Footer inferior */}
        <div className="footer-bottom text-center border-top  mt-3">{/*border top para agregar una linea separadora*/}
          <p className="mb-0">&copy; 2025 Edifica Group. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
