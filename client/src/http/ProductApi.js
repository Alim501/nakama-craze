import { $authHost, $host } from ".";

export const createProduct = async (product) => {
  const { data } = await $authHost.post("/products", product, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};
export const updateProduct = async (id, product) => {
  console.log(product);
  const { data } = await $authHost.put("/products/" + id, product, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};
export const deleteProduct = async (id) => {
  const { data } = await $authHost.delete("/products/" + id);
  return data;
};
export const getAllProducts = async () => {
  const { data } = await $host.get("/products");
  return data;
};
export const getOneProducts = async (id) => {
  const { data } = await $host.get("/products/" + id);
  return data;
};

export const getAllCategories = async () => {
  const { data } = await $host.get("/categories");
  return data;
};
