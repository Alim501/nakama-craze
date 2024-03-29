import React from "react";
import Card from "react-bootstrap/Card";
import TextCircle from "./TextCircle";

const ProductCard = () => {
  return (
    <Card className="border-0">
      <Card.Body>
      <Card.Text >#BERSERK</Card.Text>
      <Card.Img src="holder.js/100px160" />
        <TextCircle color={'#F3F3F2'} title={'WHITE'}/>
        <Card.Text className="m-0">Футболка | Guts</Card.Text>
        <Card.Text>11.900₸</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default ProductCard;
