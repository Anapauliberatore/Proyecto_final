import React from 'react'; 
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import desarrollo1 from '../assets/desarrollo1.jpg';
import desarrollo2 from '../assets/desarrollo2.jpg';
import desarrollo3 from '../assets/desarrollo3.jpg';



function DesarrolloCard({ title, image, text }) {
  return (
    <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

function Desarrollo_construccion() {
  return (
    <div className="container my-4" style={{ paddingTop: '50px' }}>
      <h2 className="text-center mb-5">"Transformando Espacios, Creando Futuro" </h2>
      <div className="d-flex justify-content-center gap-3 mb-3">
        <DesarrolloCard title = "" image={desarrollo1} text="" />
        <DesarrolloCard title = "" image={desarrollo2} text="" />
  <DesarrolloCard title = "" image={desarrollo3} text="" />
       

          </div>  <hr className="my-4" /><div>
      
      
        
      </div>
    </div>
  );
}

export default Desarrollo_construccion;
