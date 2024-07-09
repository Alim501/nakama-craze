import { $authHost } from "..";

export const CreateOrder = async (order) => {
  const { data } = await $authHost.get("/orders/", { order });
  return data;
};
export const getOneOrder = async (id) => {
  const { data } = await $authHost.get("/orders/" + id);
  return data;
};
export const updateOrder = async (id) => {
  const { data } = await $authHost.get("/orders/" + id);
  return data;
};
export const deleteOrder = async (id) => {
  const { data } = await $authHost.get("/orders/" + id);
  return data;
};
export const getAllOrders = async (id) => {
  const { data } = await $authHost.get("/orders/");
  return data;
};
