import React, { useEffect, useState } from 'react';
import {Container,Row, Spinner,} from 'react-bootstrap'
import ProductCarousel from '../../components/Product/ProductCarousel'; 
import ProductInfo from '../../components/Product/ProductInfo';
import { observer } from 'mobx-react-lite';
import { getOneProducts } from '../../http/ProductApi';
import { useParams } from 'react-router-dom';

const ProductPage=observer(()=>{

    const [product,setProduct]=useState()
    const {id}=useParams()
    useEffect(()=>{
        getOneProducts(id).then(data=>
          setProduct(data)
          )
      },[])
      if(!product){
        return(<Spinner animation='grow'/>)
      }
    return(
        <Container>
            <Row>
            <ProductCarousel imgs={product.imgs}></ProductCarousel>
            <ProductInfo product={product}></ProductInfo>
            </Row>
        </Container>
    )
})
export default ProductPage;