// src/pages/admin/AdminSizes.jsx

import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { getAllSizes, deleteSize } from "../../../http/AdminApi/SizesApi";
import CreateSize from "../../../components/modals/admin/CreateSize";

const AdminSizes = () => {
  const tableHead = [
    "Название",
    "код",
    "изображение",
    "категория",
    "Дата обновления ",
    "Дата создания ",
  ];
  const [sizeVisible, setSizeVisible] = useState(false);
  const [currentSize, setCurrentSize] = useState(null);
  const [state, setState] = useState({
    sizes: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchSizes = async () => {
      try {
        const sizes = await getAllSizes();
        setState({ sizes: sizes, isLoading: false, error: null });
      } catch (err) {
        setState({ sizes: [], isLoading: false, error: err.message });
      }
    };

    fetchSizes();
  }, []);

  const handleEdit = (size) => {
    setCurrentSize(size);
    setSizeVisible(true);
  };

  const handleDelete = async (id) => {
    await deleteSize(id);
    setState((prevState) => ({
      ...prevState,
      sizes: prevState.sizes.filter((size) => size.id !== id),
    }));
  };

  const { sizes, isLoading, error } = state;
  if (isLoading) {
    return <div>Loading sizes...</div>;
  }

  if (error) {
    return <div>Error loading sizes: {error}</div>;
  }
  return (
    <div>
      <Button
        variant="outline-dark"
        className="my-2"
        onClick={() => {
          setCurrentSize(null);
          setSizeVisible(true);
        }}
      >
        Добавить размер
      </Button>
      <CreateSize
        show={sizeVisible}
        onHide={() => setSizeVisible(false)}
        initialData={currentSize}
      />
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
          {sizes.map((size) => (
            <tr key={size.id}>
              <td>{size.id}</td>
              <td>{size.title}</td>
              <td>{size.code}</td>
              <td>
                {" "}
                <img src={process.env.REACT_APP_API_URL+"/files/Sizes/"+size.img} alt={size.title} width="100" />
              </td>
              <td>{size.category.title}</td>
              <td>{size.updatedAt}</td>
              <td>{size.createdAt}</td>
              <td>
                <Button onClick={() => handleEdit(size)}>Редактировать</Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(size.id)}>
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

export default AdminSizes;
