import React from "react";
import TextCircle from "../Elements/TextCircle";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "../../utils/consts";
import { Card } from "react-bootstrap";
import Price from "./Price";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <Card
      className="border-0 rounded-4"
      onClick={() => navigate(SHOP_ROUTE + "/" + product.slug)}
    >
      <Card.Body className="p-5 m-2">
        <h5>#{product.anime.title}</h5>
        <Card.Img
          src={
            process.env.REACT_APP_API_URL + "/files/Products/" + product.icon
          }
        />
        <div className="d-flex mb-4">
          {product.colors.map((color) => (
            <TextCircle
              key={`${product.id} ${color.id}`}
              color={color.color}
              title={color.title}
              text_color={color.text_color}
            />
          ))}
        </div>
        <h5>{product.title}</h5>
        <Price price={product.price}></Price>
      </Card.Body>
    </Card>
  );
};
export default ProductCard;
