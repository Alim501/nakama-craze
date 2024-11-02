import React, { useEffect } from "react";
import { Container, Row, Col, Alert } from "react-bootstrap";
import ProductCard from "../../components/Product/ProductCard";
import CategoryBar from "../../components/Product/CategoryBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/productSlice";
import Loading from "../../components/Elements/Loading";
const Shop = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.status === "idle") {
      dispatch(
        fetchProducts({
          anime_id: products.filters.anime_id || null,
          category_id: products.filters.category_id || null,
          limit: products.pagination.limit || 9,
          page: products.pagination.page || 1,
        })
      );
    }
  }, [dispatch, products.status]);

  if (products.status === "loading") {
    return <Loading></Loading>;
  }

  if (products.status === "failed") {
    return (
      <div className="text-center my-5">
        <Alert variant="danger">Error loading products.{products.error}</Alert>
      </div>
    );
  }
  console.log(products);
  return (
    <div>
      <div className="bg-grey py-2">
        <Container>
          <CategoryBar></CategoryBar>
        </Container>
      </div>
      <Container>
        <Row xs={2} md={3} className="g-5 my-3">
          {products.items.map((product, idx) => (
            <Col key={idx}>
              <ProductCard product={product}></ProductCard>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
