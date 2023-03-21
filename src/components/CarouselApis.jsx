import Carousel from 'react-bootstrap/Carousel';
import pokeApi from '../assets/images/pokeapi.png';
import reqres from '../assets/images/reqres-in.png';
import jsonP from '../assets/images/json-placeholder-img.jpg';

function CarouselApis() {
  return (
    <Carousel className='carouselItem' style={{width:'50%'}}>
      <Carousel.Item>
        <img
          className="d-block w-100 imgApiItem"
          src={pokeApi}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* text optional */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgApiItem"
          src={reqres}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* text optional */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imgApiItem"
          src={jsonP}
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* text optional */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselApis;