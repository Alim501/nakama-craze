import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { getAllColors, deleteColor } from "../../../http/AdminApi/ColorApi";
import CreateColor from "../../../components/modals/admin/CreateColor";

const AdminColors = () => {
  const tableHead = [
    "Название",
    "код цвета",
    "код цвета для текста",
    "Дата обновления ",
    "Дата создания ",
  ];
  const [colorVisible, setColorVisible] = useState(false);
  const [currentColor, setCurrentColor] = useState(null);
  const [state, setState] = useState({
    colors: [],
    isLoading: true,
    error: null,
  });

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
  }, []);

  const handleEdit = (color) => {
    setCurrentColor(color);
    setColorVisible(true);
  };

  const handleDelete = async (id) => {
    await deleteColor(id);
    setState((prevState) => ({
      ...prevState,
      colors: prevState.colors.filter((color) => color.id !== id),
    }));
  };

  const { colors, isLoading, error } = state;
  if (isLoading) {
    return <div>Loading colors...</div>;
  }

  if (error) {
    return <div>Error loading colors: {error}</div>;
  }
  return (
    <div>
      <Button
        variant="outline-dark"
        className="my-2"
        onClick={() => {
          setCurrentColor(null);
          setColorVisible(true);
        }}
      >
        Добавить цвет
      </Button>
      <CreateColor
        show={colorVisible}
        onHide={() => setColorVisible(false)}
        initialData={currentColor}
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
          {colors.map((color) => (
            <tr key={color.id}>
              <td>{color.id}</td>
              <td>{color.title}</td>
              <td>{color.color}</td>
              <td>{color.text_color}</td>
              <td>{color.updatedAt}</td>
              <td>{color.createdAt}</td>
              <td>
                <Button onClick={() => handleEdit(color)}>Редактировать</Button>
              </td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(color.id)}>Удалить</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminColors;
