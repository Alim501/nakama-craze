import { $authHost } from "..";

export const createCategory = async (title) => {
const { data } = await $authHost.post("/categories/", {title});
  return data;
};
export const updateCategory = async (id, title) => {
  const { data } = await $authHost.put("/categories/" + id, {title});
  return data;
};
export const deleteCategory = async (id) => {
  const { data } = await $authHost.delete("/categories/" + id);
  return data;
};
