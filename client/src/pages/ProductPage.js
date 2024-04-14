import React from 'react';
import {Container,Row,} from 'react-bootstrap'
import ProductCarousel from '../components/ProductCarousel'; 
import ProductInfo from '../components/ProductInfo';

const ProductPage=()=>{
    return(
        <Container>
            <Row>
            <ProductCarousel></ProductCarousel>
            <ProductInfo></ProductInfo>
            </Row>
        </Container>
    )
}
export default ProductPage;