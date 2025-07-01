import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import miatup from '../assets/miatup.jpg';
import anatup from '../assets/anatup.jpg';
import lauratup from '../assets/lauratup.jpg';
import rosariotup from '../assets/rosariotup.jpg';
import josetup from '../assets/josetup.jpg';

function IntegranteCard({ title, image, text }) {
  return (
    <Card style={{ width: '14rem' }}>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function Integrantes() {
  return (
    <div className="container my-4" style={{ paddingTop: '50px' }}>
      <h2 className="text-center mb-5">Conocé un poco de nosotros</h2>
      <div className="d-flex justify-content-center gap-3 mb-3">
        <IntegranteCard title="Brito Julieta" image={miatup} text="22 años, Ingeniera Industrial" />
        <IntegranteCard title="Liberatore Ana Paula" image={anatup} text="25 años, Arquitecta" />


        <IntegranteCard title="Copa Laura " image={lauratup} text=" Ing. Técnico en Refrigeración de Materiales de Construcción" />
        <IntegranteCard title="Jimenez Rosario" image={rosariotup} text="28 años, Ing. Ambiental" />
        <IntegranteCard title="Suarez Jose" image={josetup} text="27 años, Ing. Civil" />
      </div>
    </div>
  );
}

export default Integrantes;
