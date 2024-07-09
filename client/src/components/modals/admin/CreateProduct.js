import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../store/categorySlice";
import { fetchAnime } from "../../../store/AnimeSlice";
import { createNewProduct, updateExistingProduct } from "../../../store/productSlice";
import { getAllColors } from "../../../http/AdminApi/ColorApi";

const CreateProduct = observer(({ show, onHide, initialData }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState(null);
  const [images, setImages] = useState(null);
  const [animeId, setAnimeId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [productColors, setProductColors] = useState([]);

  const [state, setState] = useState({
    colors: [],
    isLoading: true,
    error: null,
  });

  const { colors, isLoading, error } = state;

  const categories = useSelector((state) => state.categories);
  const anime = useSelector((state) => state.anime);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const colors = await getAllColors();
        setState({ colors: colors, isLoading: false, error: null });
      } catch (err) {
        setState({ colors: [], isLoading: false, error: err.message });
      }
    };

    fetchColors();
    if (initialData) {
      setTitle(initialData.title);
      setPrice(initialData.price);
      setDescription(initialData.description);
      setAnimeId(initialData.anime_id);
      setCategoryId(initialData.category_id);
      setProductColors(initialData.colors_id);
    }
    if (categories.status === "idle") {
      dispatch(fetchCategories());
    }
    if (anime.status === "idle") {
      dispatch(fetchAnime());
    }
  }, [dispatch, categories.status, anime.status, initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("desc", description);

    if (icon) {
      formData.append("icon", icon);
    }

    if (images) {
      Array.from(images).forEach((image) => formData.append("imgs", image));
    }

    formData.append("anime_id", animeId);
    formData.append("category_id", categoryId);

    productColors.forEach((color) => formData.append("colors_id", color));

    if (initialData) {
      dispatch(updateExistingProduct({ id: initialData.id, product: formData })).then(() => {
        onHide();
      });
    } else {
      dispatch(createNewProduct(formData)).then(() => {
        onHide();
      });
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {initialData ? "Редактировать продукт" : "Добавить новый продукт"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Название продукта</Form.Label>
            <Form.Control
              placeholder="Введите название продукта"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Цена</Form.Label>
            <Form.Control
              type="number"
              placeholder="Введите цену"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Form.Text className="text-muted">
              Введите цену в тенге, без точек, без знака тенге
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Описание</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Иконка для продукта</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setIcon(e.target.files[0])}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Выберите аниме</Form.Label>
            <Form.Select
              value={animeId}
              onChange={(e) => setAnimeId(e.target.value)}
            >
              <option>Выберите аниме</option>
              {anime.items.map((anime) => (
                <option key={anime.id} value={anime.id}>
                  {anime.title}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Выберите категорию</Form.Label>
            <Form.Select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
            >
              <option>Выберите категорию</option>
              {categories.items.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Выберите цвета</Form.Label>
            <Form.Select
              multiple
              value={productColors}
              onChange={(e) =>
                setProductColors(
                  Array.from(e.target.selectedOptions, (option) =>
                    parseInt(option.value)
                  )
                )
              }
            >
              {colors.map((color) => (
                <option key={color.id} value={color.id}>
                  {color.title}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group controlId="formFiles" className="mb-3">
            <Form.Label>Изображения для продукта</Form.Label>
            <Form.Control
              type="file"
              multiple
              onChange={(e) => setImages(e.target.files)}
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="outline-success" type="submit">
              {initialData ? "Сохранить изменения" : "Добавить"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
});
export default CreateProduct;
