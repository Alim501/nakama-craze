import React, { useEffect } from "react";
import { Container, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory, fetchCategories } from "../../store/categorySlice";

const CategoryBar = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (categories.status === "idle") {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.status]);

  if (categories.status === "loading") {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (categories.status === "failed") {
    return (
      <div className="text-center my-5">
        <Alert variant="danger">Error loading categories.{categories.error}</Alert>
      </div>
    );
  }
  return (
    <Container>
      <div className="d-flex">
        {categories.items.map((category) => (
          
          <div
            key={category.id}
            className="btn rounded-3 bg-26 text-white me-3"
            onClick={() => dispatch(setSelectedCategory(category))}
          >
            <h5>{category.title}</h5>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CategoryBar;
