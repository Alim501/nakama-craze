import React from "react";
const TextCircle = ({ title, color, text_color }) => {
  return (
    <div
      className="rounded-4 width-fit py-2 px-3 me-3 mt-3"
      style={{ backgroundColor: color, color: text_color }}
    >
      <h5 className="m-1">{title}</h5>
    </div>
  );
};
export default TextCircle;
