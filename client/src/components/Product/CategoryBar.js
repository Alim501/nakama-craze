import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { getAllCategories } from "../../http/ProductApi";

const CategoryBar = observer(() => {
  const { selection } = useContext(Context);
  useEffect(()=>{
    getAllCategories().then(data=>
      selection.categories=data
      )
  },[])
  return (
    <Container>
      <div className="d-flex">
        {selection.categories.map((category) => (
          <div
            key={category.id}
            className="btn rounded-3 bg-26 text-white me-3 "
            onClick={() => (selection.selectedCategory = category)}
          >
            <h5>{category.title}</h5>
          </div>
        ))}
      </div>
    </Container>
  );
});
export default CategoryBar;
