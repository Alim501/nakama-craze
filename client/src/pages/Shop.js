import React from 'react';
import {Container,Row,Col } from 'react-bootstrap'
import ProductCard from '../components/ProductCard'


const Shop=()=>{
    return(
        <Container>
        <Row xs={2} md={3} className="g-5">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <ProductCard></ProductCard>
        </Col>
      ))}
    </Row>
    </Container>
    )
}
export default Shop;