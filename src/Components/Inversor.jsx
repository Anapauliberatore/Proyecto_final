import React from 'react';
import inversor1 from '../assets/inversor1.jpg';
import inversor2 from '../assets/inversor2.jpg';
import inversor3 from '../assets/inversor3.jpg';

function Inversor() {
  return (
    <div style={{ paddingTop: '50px', textAlign: 'center' }}>
        
      <h2>"Creciendo con confianza y compromiso"</h2>

      <div style={{ height: "50px" }}></div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <img src={inversor1} alt="Inversor 1" style={{ width: '300px', objectFit: 'cover' }} />
        <img src={inversor2} alt="Inversor 2" style={{ width: '300px', objectFit: 'cover' }} />
        <img src={inversor3} alt="Inversor 3" style={{ width: '300px', objectFit: 'cover' }} />
      </div>
    </div>
  );
}

export default Inversor;
