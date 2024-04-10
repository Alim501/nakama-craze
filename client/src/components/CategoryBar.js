import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { Context } from "..";
import { observer } from "mobx-react-lite";

const CategoryBar = observer(() => {
  const { selection } = useContext(Context);
  return (
    <Container>
      <div className="d-flex">
        {selection.categories.map((category) => (
          <div className="btn rounded-3 bg-26 text-white me-3 " onClick={()=>selection.selectedCategory=category}>
            <h5>{category.title}</h5>
          </div>
        ))}
      </div>
    </Container>
  );
});
export default CategoryBar;
