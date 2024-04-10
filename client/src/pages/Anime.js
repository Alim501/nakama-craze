import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import RectangleBlock from "../components/RectangleBlock";

const Anime = observer(() => {
  const { selection } = useContext(Context);
  const rectangles = [];
  for (let i = 0; i < selection.anime.length; i += 3) {
    rectangles.push(
      <RectangleBlock id={selection.anime[i].id} i={i}></RectangleBlock>
    );
  }

  return <Container>{rectangles}</Container>;
});
export default Anime;
