import React from "react";
import { Card, Col } from "react-bootstrap";
import TextCircle from "../Elements/TextCircle";
import Price from "./Price";
import Sizes from "./Sizes";
const ProductInfo = ({product}) => {
  return (
    <Col md={6}>
      <Card className="border-0 px-4 py-5">
        <div className="d-flex">
          {product.colors.map((color, index) => (
            <TextCircle key={index} title={color.title} color={color.color} text_color={color.text_color}></TextCircle>
          ))}
        </div>
        <Card.Text className="m-0">
          {product.title}
        </Card.Text>
        <Price price={product.price}></Price>
        <Sizes sizes={product.category.sizes}></Sizes>
        <h4>ОПИСАНИЕ</h4>
        <Card.Text>
          {product.desc}
        </Card.Text>

        <button className="rounded-3 bg-black border-0 text-white my-5 py-3"><h4>ДОБАВИТЬ В КОРЗИНУ</h4></button>
      </Card>
    </Col>
  );
};
export default ProductInfo;
