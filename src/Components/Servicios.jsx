
import React from 'react';

import "../css/Servicios.css"; // ✅ Esto busca en src/css

import venta from '../assets/venta.webp';
import alquiler from '../assets/alquiler.jpg';
import construcciones from '../assets/construcciones.jpg';
const Servicios = () => {
  return (
    <section className="servicios-container">
      <h2 className="servicios-title">NUESTROS <strong>SERVICIOS</strong></h2>
<div style={{ height: "15px" }}></div>
      <div className="servicios-lista">
        
            <div className="servicio">
                 <img src={construcciones} alt="One Residence" />
                <h3>CONSTRUCCIONES</h3>
            </div>

            <div className="servicio">
              <img src={venta} alt="The Point Housing" />
              <h3>VENTA DE TERRENOS</h3>
            </div>

            <div className="servicio">
              <img src={alquiler} alt="Cantares" />
              <h3>ALQUILERES</h3>
            </div>
        </div>
      
    </section>
  );
};

export default Servicios;
