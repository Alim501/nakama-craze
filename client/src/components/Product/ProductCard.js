import React, { useContext } from "react";
import TextCircle from "../Elements/TextCircle";
import { useNavigate } from "react-router-dom";
import { SHOP_ROUTE } from "../../utils/consts";
import { Context } from "../..";
import { Card } from "react-bootstrap";
import Price from "./Price";
import { observer } from "mobx-react-lite";

const ProductCard = observer(({ product }) => {
  const { selection } = useContext(Context);
  const navigate = useNavigate();
  const anime = selection.getAnimeByID(product.anime_id);
  const colors = product.colors;
  if(colors[0] && anime){
  return (
    <Card
      className="border-0"
      onClick={() => navigate(SHOP_ROUTE + "/" + product.id)}
    >
      <Card.Body>
        <Card.Text>#{anime.title}</Card.Text>
        <Card.Img src={product.icon} />
        <div className="d-flex">
          {colors.map((color) => (
            <TextCircle
              key={`${product.id} ${color.id}`}
              color={color.color}
              title={color.title}
            />
          ))}
        </div>
        <Card.Text className="m-0">{product.title}</Card.Text>
        <Price price={product.price}></Price>
      </Card.Body>
    </Card>
  );
} 
else{
  <div></div>
}
});
export default ProductCard;
