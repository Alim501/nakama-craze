import React from "react";
import Card from "react-bootstrap/Card";
import TextCircle from "./TextCircle";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import Price from "./Price";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <Card
      className="border-0"
      onClick={() => navigate(SHOP_ROUTE + "/" + product.id)}
    >
      <Card.Body>
        <Card.Text>#{product.anime}</Card.Text>
        <Card.Img src="{{product.icon}}" />
        <div className="d-flex">
          {product.colors.map((color) => (
            <TextCircle color={color.code} title={color.title} />
          ))}
        </div>
        <Card.Text className="m-0">
          {product.category}&nbsp;|&nbsp;{product.title}
        </Card.Text>
        <Card.Text>
          <Price price={product.price}></Price>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default ProductCard;
