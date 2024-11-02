import { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { observer } from "mobx-react-lite";

const ProductCarousel = observer(({ imgs }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  if (imgs[0] === undefined) {
    return <div></div>;
  }
  return (
    <Col md={7}>
      <Row className="justify-content-center">
        <Col md={2} className="d-flex flex-column me-3">
          {imgs.map((img, mapIndex) => (
            <Image
              key={mapIndex}
              src={process.env.REACT_APP_API_URL + "/files/Products/" + img.img}
              fluid
              style={{
                cursor: "pointer",
                border: "1px solid #D9D9D9",
                borderRadius: '16px',
                marginBottom: "10px",
              }}
              onClick={() => handleSelect(mapIndex)}
            />
          ))}
        </Col>

        {/* Bootstrap Carousel */}
        <Col>
          <Carousel activeIndex={index} onSelect={handleSelect} data-bs-theme="dark" indicators={false}>
            {imgs.map((img, mapIndex) => (
              <Carousel.Item key={mapIndex}>
                <Image
                  src={
                    process.env.REACT_APP_API_URL + "/files/Products/" + img.img
                  }
                  fluid
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Col>
  );
});

export default ProductCarousel;
