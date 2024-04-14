import React from "react";
import { Card, Col } from "react-bootstrap";
import TextCircle from "./TextCircle";
import Price from "../components/Price";
import Sizes from "./Sizes";
const ProductInfo = () => {
  const product = {
    id: 1,
    title: "GUTS",
    price: 11900,
    category: "ФУТБОЛКА",
    anime: "BERSERK",
    icon: "berserk.png",
    colors: [
      { code: "#F3F3F2", title: "WHITE" },
      { code: "#262626", title: "BLACK" },
    ],
    sizes: [
      { id: 1, title: "M" },
      { id: 1, title: "L" },
      { id: 1, title: "XL" },
    ],
  };
  return (
    <Col md={6}>
      <Card className="border-0 px-4 py-5">
        <div className="d-flex">
          {product.colors.map((color) => (
            <TextCircle title={color.title} color={color.code}></TextCircle>
          ))}
        </div>
        <Card.Text className="m-0">
          {product.category}&nbsp;|&nbsp;{product.title}
        </Card.Text>
        <Price price={product.price}></Price>
        <Sizes sizes={product.sizes}></Sizes>
        <h4>ОПИСАНИЕ</h4>
        <Card.Text>
          Теплый и приятный к телу худи из высококачественного хлопка с флисовым
          подкладом. В просторном основном кармане скрывается несколько
          небольших карманов для хранения мелочи, ключей или телефона. Принт по
          мотивам аниме Тетрадь смерти. Однажды ученик старшей школы Ягами Лайт
          по пути домой нашел загадочную тетрадку, с помощью которой он мог
          отправлять на тот свет любого человека, зная только лишь его имя и
          внешность. Кто-то бы выбросил такую странную находку, но Ягами решил
          опробовать её в деле, начав вершить правосудие, и избавляясь от всех,
          кто, по его мнению, заслуживает смерти. За это люди прозвали его Кира
          (производное от Killer). Но в какой-то момент настолько могущественная
          сила заставила его поверить в то, что он и есть живое воплощение Бога
          смерти. И даже стали находиться люди, считающие Киру новым мессией и
          спасителем мира. Производство до 7 дней.
        </Card.Text>

        <button className="rounded-3 bg-black border-0 text-white my-5 py-3"><h4>ДОБАВИТЬ В КОРЗИНУ</h4></button>
      </Card>
    </Col>
  );
};
export default ProductInfo;
