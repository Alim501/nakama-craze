import React from "react";
import { Image } from "react-bootstrap";

const Rectangle = ({ anime, i }) => {
  return (
    <div className="rounded-2 bg-white d-flex flex-column justify-content-end align-items-center my-3">
      <Image src={`${anime.img}`} className="rounded-2" fluid></Image>
      <h5
        className="text-white mb-0 position-absolute"
        style={{ transform: `scaleX(${(-1) ** i})` }}
      >
        {anime.title}
      </h5>
    </div>
  );
};
export default Rectangle;
