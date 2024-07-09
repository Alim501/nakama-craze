import React, { useEffect, useState } from "react";
import { Button, Container, ListGroup, Table } from "react-bootstrap";
import { getAllOrders } from "../../../http/AdminApi/AdminApi";

const Admin = () => {
  const tableHead = [
    "Пользователь ",
    "Тип" + " размер" + " Цвет",
    "Название",
    "Количество",
    "Статус",
    "Трэк-код",
    "Промокод",
    "Дата обновления ",
    "Дата создания ",
  ];
  const [state, setState] = useState({
    orders: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orders = await getAllOrders();
        setState({ orders: orders, isLoading: false, error: null });
      } catch (err) {
        setState({ orders: [], isLoading: false, error: err.message });
      }
    };

    fetchOrders();
  }, []);

  const { orders, isLoading, error } = state;
  if (isLoading) {
    return <div>Loading orders...</div>;
  }

  if (error) {
    return <div>Error loading orders: {error}</div>;
  }
  return (
    <Container className="d-grid">
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
          {orders.map((order, index) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.user.email}</td>
              <td>
                <ListGroup>
                  {order.items.map((item, itemIndex) => (
                    <ListGroup.Item key={`${order.id}-item-${itemIndex}`}>
                      {itemIndex + 1}. {item.size.title}. {item.color.code}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </td>
              <td>
                <ListGroup>
                  {order.items.map((item, itemIndex) => (
                    <ListGroup.Item key={`${order.id}-product-${itemIndex}`}>
                      {itemIndex + 1}. {item.product.title}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </td>
              <td>
                <ListGroup>
                  {order.items.map((item, itemIndex) => (
                    <ListGroup.Item key={`${order.id}-quantity-${itemIndex}`}>
                      {itemIndex + 1}. {item.Order_item.quantity}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </td>
              <td>{order.status}</td>
              <td>{order.track_code}</td>
              <td>{order.promocode?.code}</td>
              <td>{new Date(order.updatedAt).toLocaleString()}</td>
              <td>{new Date(order.createdAt).toLocaleString()}</td>
              <td>
                <Button>Редактировать</Button>
              </td>
              <td>
                <Button variant="danger">Удалить</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default Admin;
