import React from 'react';
import {Container,Row,Col } from 'react-bootstrap'
import ProductCarousel from '../components/ProductCarousel'; 
import ProductInfo from '../components/ProductInfo';

const ProductPage=()=>{
    return(
        <Container>
            <ProductCarousel></ProductCarousel>
            <ProductInfo></ProductInfo>
        </Container>
    )
}
export default ProductPage;