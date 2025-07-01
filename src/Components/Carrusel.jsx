import carrusel1 from '../Assets/carrusel1.jpeg';
import carrusel2 from '../Assets/carrusel2.jpeg';
import carrusel3 from '../Assets/carrusel3.jpeg';
import carrusel4 from '../Assets/carrusel4.jpeg';
import Carousel from 'react-bootstrap/Carousel';
import oasis from '../Assets/oasis.jpeg';
import balcon from '../Assets/balcon.jpeg'
import '../css/Carrusel.css';


const Carrusel = () => {
  return (
    

    


<div className="custom-carousel-container">
  <Carousel fade interval={3000} className="custom-carousel">
    {/* <Carousel.Item>
      <img className="d-block w-100" src={balcon} alt="Primer slide" />
    </Carousel.Item> */}
    <Carousel.Item>
      <img className="d-block w-100" src={oasis} alt="Segundo slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={carrusel3} alt="Tercer slide" />
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={carrusel4} alt="Cuarto slide" />
    </Carousel.Item>
  </Carousel>
</div>








  );
}


export default Carrusel

