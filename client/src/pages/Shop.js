import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import CategoryBar from "../components/CategoryBar";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const Shop = observer(() => {
  const { selection } = useContext(Context);
  return (
    <Container>
      <CategoryBar></CategoryBar>
      <Row xs={2} md={3} className="g-5">
        {selection.products.map((product, idx) => (
          <Col key={idx}>
            <ProductCard product={product}></ProductCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
});
export default Shop;
