import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { getAllUsers } from "../../../http/AdminApi/UsersApi";

const AdminUsers = () => {
  const tableHead = [
    "Email",
    "Имя",
    "Роль",
    "ID заказов",
    "Дата обновления",
    "Дата создания",
  ];
  const [colorVisible, setColorVisible] = useState(false);
  const [state, setState] = useState({
    users: [],
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getAllUsers();
        setState({ users: users, isLoading: false, error: null });
      } catch (err) {
        setState({ users: [], isLoading: false, error: err.message });
      }
    };

    fetchUsers();
  }, []);

  const { users, isLoading, error } = state;
  if (isLoading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>Error loading users: {error}</div>;
  }
  return (
    <div>
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
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.orders.map((order)=>(
                order.id+" "
              ))}</td>
              <td>{user.updatedAt}</td>
              <td>{user.createdAt}</td>
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
    </div>
  );
};
export default AdminUsers;
