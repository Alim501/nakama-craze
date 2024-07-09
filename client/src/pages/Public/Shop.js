import React, { Suspense, useEffect } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import ProductCard from "../../components/Product/ProductCard";
import CategoryBar from "../../components/Product/CategoryBar";
import { Await } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
const Shop = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.status]);

  if (products.status === "loading") {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (products.status === "failed") {
    return (
      <div className="text-center my-5">
        <Alert variant="danger">Error loading products.{products.error}</Alert>
      </div>
    );
  }
  return (
    <Container>
      <CategoryBar></CategoryBar>
      <Row xs={2} md={3} className="g-5">
        {products.items.map((product, idx) => (
          <Col key={idx}>
            <ProductCard product={product}></ProductCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Shop;
