import React from "react";
const Price = ({price}) => {
  return (
    <h4>
      {price}
      <svg
        width="12"
        height="14"
        viewBox="0 0 12 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="5" y="5" width="2" height="9" fill="#262626" />
        <rect
          x="12"
          y="3"
          width="2"
          height="12"
          transform="rotate(90 12 3)"
          fill="#262626"
        />
        <rect
          x="12"
          width="2"
          height="12"
          transform="rotate(90 12 0)"
          fill="#262626"
        />
      </svg>
    </h4>
  );
};
export default Price;
