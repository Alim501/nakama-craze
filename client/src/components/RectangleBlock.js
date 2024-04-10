import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Rectangle from "./Rectangle";
import { Context } from "..";

const RectangleBlock = observer(({ id, i }) => {
  const { selection } = useContext(Context);
  const miniRect = [];
  const rect = [];
  let count = 0;
  const animes = selection.anime.slice(i, i + 3);
  for (const anime of animes) {
    count == 0
      ? rect.push(<Rectangle anime={anime} i={i}></Rectangle>)
      : miniRect.push(<Rectangle anime={anime} i={i}></Rectangle>);
    count++;
  }
  return (
    <Row xs={1} md={2} style={{ transform: `scaleX(${(-1) ** i})` }}>
      {rect}
      <div>{miniRect}</div>
    </Row>
  );
});
export default RectangleBlock;
