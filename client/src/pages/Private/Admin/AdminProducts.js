import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import CreateProduct from "../../../components/modals/admin/CreateProduct";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteExistingProduct,
  fetchProducts,
} from "../../../store/productSlice";
import { fetchAnime } from "../../../store/AnimeSlice";
import { fetchCategories } from "../../../store/categorySlice";

const AdminProducts = () => {
  const products = useSelector((state) => state.products);
  const categories = useSelector((state) => state.categories);
  const anime = useSelector((state) => state.anime);
  const [productVisible, setProductVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (products.status === "idle") {
      dispatch(fetchProducts());
    }
    if (anime.status === "idle") {
      dispatch(fetchAnime());
    }
    if (categories.status === "idle") {
      dispatch(fetchCategories());
    }
  }, [dispatch, products.status, anime.status, categories.status]);

  if (
    products.status === "loading" ||
    anime.status === "loading" ||
    categories.status === "loading"
  ) {
    return <div>Loading products...</div>;
  }

  if (
    products.status === "failed" ||
    anime.status === "failed" ||
    categories.status === "failed"
  ) {
    return <div>Error loading products.</div>;
  }
  const handleDelete = (id) => {
    dispatch(deleteExistingProduct(id));
  };
  const handleEdit = (product) => {
    setCurrentProduct(product);
    setProductVisible(true);
  };
  console.log(products)
  const tableHead = [
    "Название",
    "Цена",
    "Описание",
    "Ссылка",
    "Иконка",
    "Цвета",
    "Аниме",
    "Тип",
    "Дата обновления",
    "Дата создания",
  ];
  return (
    <div>
      <Button
        variant="outline-dark"
        className="my-2"
        onClick={() => setProductVisible(true)}
      >
        Добавить продукт
      </Button>
      <CreateProduct
        show={productVisible}
        onHide={() => setProductVisible(false)}
        initialData={currentProduct}
      ></CreateProduct>
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
          {products.items.map((product, index) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.desc}</td>
              <td>{product.slug}</td>
              <td>{product.icon}</td>
              <td>
                {product.colors?.map((color) => (
                  <div key={color.id}>{color.title}</div>
                ))}
              </td>
              <td>
                {anime.items.find((obj) => obj.id === product.anime_id)
                  ?.title || "Unknown"}
              </td>
              <td>
                {categories.items.find((obj) => obj.id === product.category_id)
                  ?.title || "Unknown"}
              </td>
              <td>{product.updatedAt}</td>
              <td>{product.createdAt}</td>
              <td>
                <Button onClick={() => handleEdit(product)}>
                  Редактировать
                </Button>
              </td>
              <td>
                <Button
                  onClick={() => handleDelete(product.id)}
                  variant="danger"
                >
                  Удалить
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default AdminProducts;
