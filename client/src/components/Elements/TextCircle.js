import React from "react";
const TextCircle = ({title,color}) => {
  return (

    <div className="rounded-3 text-al-black width-fit py-1 px-2 me-2" style={{backgroundColor: color}}>
        <p className="m-0">{title}</p>
    </div>
  );
};
export default TextCircle;
