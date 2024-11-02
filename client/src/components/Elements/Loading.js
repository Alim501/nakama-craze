import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="h-71vh w-100 d-grid align-items-center">
      <Spinner animation="border" variant="warning" className="mx-auto" />
    </div>
  );
};
export default Loading;
