import React from "react";
const TextCircle = ({title,color,text_color}) => {
  return (

    <div className="rounded-3 width-fit py-1 px-2 me-2" style={{backgroundColor: color, color:text_color}}>
        <p className="m-0">{title}</p>
    </div>
  );
};
export default TextCircle;
