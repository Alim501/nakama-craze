import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import CreateCategory from "../../../components/modals/admin/CreateCategory";
import { useDispatch, useSelector } from "react-redux";
import { deleteExistingCategory, fetchCategories } from "../../../store/categorySlice";

const AdminCategories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [categoryVisible, setCategoryVisible] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  useEffect(() => {
    if (categories.status === "idle") {
      dispatch(fetchCategories());
    }
  }, [dispatch, categories.status]);

  if (categories.status === "loading") {
    return <div>Loading categories...</div>;
  }

  if (categories.status === "failed") {
    return <div>Error loading categories.</div>;
  }
  const tableHead = ["Название", "Размеры", "Дата обновления", "Дата создания"];
  const handleDelete = (id) => {
    dispatch(deleteExistingCategory(id));
  };

  const handleEdit = (category) => {
    setCurrentCategory(category);
    setCategoryVisible(true);
  };
  return (
    <div>
      <Button
        variant="outline-dark"
        className="my-2"
        onClick={() => setCategoryVisible(true)}
      >
        Добавить категорию
      </Button>
      <CreateCategory
        show={categoryVisible}
        onHide={() => setCategoryVisible(false)}
        initialData={currentCategory}
      ></CreateCategory>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {tableHead.map((th, index) => (
              <th key={index}> {th}</th>
            ))}
            <th>#</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {categories.items.map((category, index) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.title}</td>
              <td>{category.sizes?.map((size)=>(
                size.code+" "
              ))}</td>
              <td>{category.updatedAt}</td>
              <td>{category.createdAt}</td>
              <td>
                <Button onClick={()=>handleEdit(category)}>Редактировать</Button>
              </td>
              <td>
                <Button variant="danger" onClick={()=>handleDelete(category.id)}>Удалить</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminCategories;
