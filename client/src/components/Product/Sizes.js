import React, { useState } from "react";
import TextCircle from "../Elements/TextCircle";

const Sizes = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        {sizes.map((size, index) => (
          <div key={index}>
            <input
              className="size-input d-none"
              type="radio"
              id={`size${size.id}`}
              name="sizes"
              value={size.id}
              checked={selectedSize === size.id}
              onChange={handleSizeChange}
            />
            <label
              className="rounded-3 border-grey size px-3 py-2 me-3"
              htmlFor={`size${size.id}`}
            >
              {size.code}
            </label>
          </div>
        ))}
      </div>
      <TextCircle title={"SIZE"} color={"#F3F3F2"} text_color={"#262626"} />
      <TextCircle></TextCircle>
    </div>
  );
};

export default Sizes;
