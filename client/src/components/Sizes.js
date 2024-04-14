import React, { useState } from "react";
import TextCircle from "./TextCircle";

const Sizes = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        {sizes.map((size) => (
          <div key={size.id}>
            <input
              className="size-input"
              type="radio"
              id={`size${size.id}`}
              name="sizes"
              value={size.id}
              checked={selectedSize === size.id}
              onChange={handleSizeChange}
            />
            <label
              className="rounded-3 border-grey size"
              htmlFor={`size${size.id}`}
            >
              {size.title}
            </label>
          </div>
        ))}
      </div>
      <TextCircle title={"SIZE"} color={"F3F3F2"}></TextCircle>
    </div>
  );
};

export default Sizes;
