import React, { useState } from "react";
import TextCircle from "../Elements/TextCircle";
import Price from "./Price";
import Sizes from "./Sizes";
import { Card, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { addItemToCart } from "../../store/CartSlice";

const ProductForm = ({ product }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const user = useSelector((state) => state.user.user);
  const handleColorChange = (color) => {
    console.log(color);
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    console.log(size);
    setSelectedSize(size);
  };

  const handleSubmit = () => {
    if (!user) {
      console.log(user);
      navigate("/auth", { state: { from: location } });
      return;
    }
    if (selectedColor && selectedSize) {
      console.log("Added to cart:", {
        product_id: product.id,
        color_id: selectedColor.id,
        size_id: selectedSize.id,
      });
      dispatch(
        addItemToCart({
          userId: user.id,
          productId: product.id,
          quantity: 1,
        })
      )
        .unwrap()
        .then(() => {
          console.log("Товар успешно добавлен в корзину");
        })
        .catch((error) => {
          console.error("Ошибка при добавлении товара в корзину:", error);
        });
    } else {
      alert("Пожалуйста, выберите цвет и размер.");
    }
  };
  return (
    <Col>
      <Card className="border-0 px-5 py-4">
        <div className="d-flex">
          {product.colors.map((color, index) => (
            <div
              className="input"
              key={index}
              onClick={() => handleColorChange(color)}
            >
              <TextCircle
                title={color.title}
                color={selectedColor === color ? "#262626" : "#F3F3F2"}
                text_color={selectedColor === color ? "#fff" : "#262626"}
              />
            </div>
          ))}
        </div>

        <h4 className="mx-0 my-3">{product.title}</h4>

        <Price price={product.price} />

        <Sizes
          sizes={product.category.sizes}
          selectedSize={selectedSize}
          onSizeChange={handleSizeChange}
        />

        <h4 className="mb-3">ОПИСАНИЕ</h4>
        <p>{product.desc}</p>

        <button
          onClick={handleSubmit}
          className="rounded-3 bg-black border-0 text-white my-5 py-3 black-button"
        >
          <h4>ДОБАВИТЬ В КОРЗИНУ</h4>
        </button>
      </Card>
    </Col>
  );
};

export default ProductForm;
