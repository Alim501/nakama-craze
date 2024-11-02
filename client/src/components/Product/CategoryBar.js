import React, { useEffect } from "react";
import { Container, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedCategory,
  fetchCategories,
} from "../../store/categorySlice";
import { Link } from "react-router-dom";

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
        <Alert variant="danger">
          Error loading categories.{categories.error}
        </Alert>
      </div>
    );
  }
  return (
    <Container>
      <div className="d-flex py-2">
        {categories.items.map((category) => (
          <Link
            key={category.id}
            onClick={() => dispatch(setSelectedCategory(category))}
            className="btn rounded-4 category me-3 py-2 px-4"
          >
            <h2 className="my-1">{category.title}</h2>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default CategoryBar;
