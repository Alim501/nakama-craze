import React from "react";
import TextCircle from "../Elements/TextCircle";

const Sizes = ({ sizes, selectedSize, onSizeChange }) => {
  return (
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        {sizes.map((size, index) => (
          <div key={index}>
            <input
              className="radio-input d-none"
              type="radio"
              id={`size${size.id}`}
              name="sizes"
              value={size.id}
              checked={selectedSize === size.id}
              onChange={() => onSizeChange(size)}
            />
            <label
              className={`rounded-3 border-grey bg-grey radio px-3 py-2 me-3 ${
                selectedSize === size.id ? "radio-selected" : ""
              }`}
              htmlFor={`size${size.id}`}
            >
              <h5>{size.code}</h5>
            </label>
          </div>
        ))}
      </div>
      <TextCircle title={"SIZE"} color={"#F3F3F2"} text_color={"#262626"} />
    </div>
  );
};

export default Sizes;
