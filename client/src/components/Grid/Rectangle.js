import React from "react";
import { Image } from "react-bootstrap";

const Rectangle = ({img }) => {
  return (
    <div className="rounded-2 bg-white d-flex flex-column justify-content-end align-items-center my-3">
      <Image
        src={process.env.REACT_APP_API_URL + "/files/Anime/" + img}
        className="rounded-2"
        fluid
      ></Image>
    </div>
  );
};
export default Rectangle;
