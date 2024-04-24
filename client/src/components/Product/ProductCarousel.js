import { useState } from "react";
import { Col, Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { observer } from 'mobx-react-lite';

const ProductCarousel= observer(({imgs})=> {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  console.log(imgs)
  if(imgs[0]===undefined){
    return(<div></div>)
  }
  return (
    <Col md={6}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {imgs.map((img)=>(
          <Carousel.Item key={img.id}>
          <Image src={img.img}></Image>
        </Carousel.Item>
        ))}
      </Carousel>
    </Col>
  );
})

export default ProductCarousel;
