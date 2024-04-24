import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../../components/Product/ProductCard";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import { getAllAnime, getAllProducts } from "../../http/ProductApi";
import CategoryBar from "../../components/Product/CategoryBar";
const Shop = observer(() => {
  const { selection } = useContext(Context);
  useEffect(() => {
    getAllAnime().then((data) => (selection.anime = data));
    getAllProducts().then((data) => (selection.products = data));
  }, []);
  console.log(selection.products)
  if(selection.products){
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
}
else{
  <div></div>
}
});

export default Shop;
