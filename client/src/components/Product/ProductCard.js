import React from "react";
import TextCircle from "../Elements/TextCircle";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "../../utils/consts";
import { Card } from "react-bootstrap";
import Price from "./Price";

const ProductCard = ({product}) => {
  const navigate = useNavigate();
  return (
    <Card
      className="border-0"
      onClick={() => navigate(SHOP_ROUTE + "/" + product.id)}
    >
      <Card.Body>
        <Card.Text>#{product.anime.title}</Card.Text>
        <Card.Img src={process.env.REACT_APP_API_URL+"/files/Products/"+product.icon} />
        <div className="d-flex">
          {product.colors.map((color) => (
            <TextCircle
              key={`${product.id} ${color.id}`}
              color={color.color}
              title={color.title}
              text_color={color.text_color}
            />
          ))}
        </div>
        <Card.Text className="m-0">{product.title}</Card.Text>
        <Price price={product.price}></Price>
      </Card.Body>
    </Card>
  );

};
export default ProductCard;
