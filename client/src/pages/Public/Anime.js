import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { Context } from "../..";
import RectangleBlock from "../../components/Grid/RectangleBlock";
import { getAllAnime } from "../../http/ProductApi";

const Anime = observer(() => {
  const { selection } = useContext(Context);
  useEffect(()=>{
    getAllAnime().then(data=>
      selection.anime=data
      )
  },[])
  const rectangles = [];
  for (let i = 0; i < selection.anime.length; i += 3) {
    rectangles.push(
      <RectangleBlock key={i} i={i}></RectangleBlock>
    );
  }

  return <Container>{rectangles}</Container>;
});
export default Anime;
