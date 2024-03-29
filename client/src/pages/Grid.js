import React from "react";
import { Container, Row } from "react-bootstrap";
import Rectangle from "../components/Rectangle";
import TwoRectangle from "../components/TwoRectangle";

const Grid = () => {
  return (
    <Container>
      <Row xs={1} md={2}>
        <Rectangle variation={'info'}></Rectangle>
        <TwoRectangle variation={'info'}></TwoRectangle>
      </Row>
    </Container>
  );
};
export default Grid;
