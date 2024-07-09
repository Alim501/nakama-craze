import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import {
  getAllPromocode,
  deletePromocode,
} from "../../../http/AdminApi/Promocode";
import CreatePromocode from "../../../components/modals/admin/CreatePromocode";

const AdminPromocodes = () => {
  const [promocodeVisible, setPromocodeVisible] = useState(false);
  const [selectedPromocode, setSelectedPromocode] = useState(null);
  const [state, setState] = useState({
    promocodes: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchPromocodes = async () => {
      try {
        const promocodes = await getAllPromocode();
        setState({ promocodes: promocodes, isLoading: false, error: null });
      } catch (err) {
        setState({ promocodes: [], isLoading: false, error: err.message });
      }
    };

    fetchPromocodes();
  }, []);

  const { promocodes, isLoading, error } = state;

  const handleEdit = (promocode) => {
    setSelectedPromocode(promocode);
    setPromocodeVisible(true);
  };

  const handleDelete = async (id) => {
    await deletePromocode(id);
    setState((prevState) => ({
      ...prevState,
      promocodes: prevState.promocodes.filter(
        (promocode) => promocode.id !== id
      ),
    }));
  };

  if (isLoading) {
    return <div>Loading promocodes...</div>;
  }

  if (error) {
    return <div>Error loading promocodes: {error}</div>;
  }

  const tableHead = [
    "Код",
    "Процент",
    "Действует до",
    "Дата обновления",
    "Дата создания",
  ];

  return (
    <div>
      <Button
        variant="outline-dark"
        className="my-2"
        onClick={() => {
          setSelectedPromocode(null);
          setPromocodeVisible(true);
        }}
      >
        Добавить промокод
      </Button>
      <CreatePromocode
        show={promocodeVisible}
        onHide={() => setPromocodeVisible(false)}
        initialData={selectedPromocode}
      />
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            {tableHead.map((th, index) => (
              <th key={index}>{th}</th>
            ))}
            <th>#</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {promocodes.map((promocode) => (
            <tr key={promocode.id}>
              <td>{promocode.id}</td>
              <td>{promocode.code}</td>
              <td>{promocode.percent}</td>
              <td>{promocode.expire_at}</td>
              <td>{promocode.updatedAt}</td>
              <td>{promocode.createdAt}</td>
              <td>
                <Button onClick={() => handleEdit(promocode)}>
                  Редактировать
                </Button>
              </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(promocode.id)}
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

export default AdminPromocodes;
