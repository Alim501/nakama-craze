import { $authHost } from "..";

export const createSize = async (size) => {
  const { data } = await $authHost.post("/sizes/", size);
  return data;
};
export const getOneSize = async (id) => {
  const { data } = await $authHost.get("/sizes/" + id);
  return data;
};
export const updateSize = async (size, id) => {
  const { data } = await $authHost.put("/sizes/" + id, size);
  return data;
};
export const deleteSize = async (id) => {
  const { data } = await $authHost.delete("/sizes/" + id);
  return data;
};
export const getAllSizes = async () => {
  const { data } = await $authHost.get("/sizes");
  return data;
};
