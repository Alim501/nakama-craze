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
export const getAllProducts = async ({ anime_id, category_id, limit, page }) => {
  const params = {
    ...(anime_id && { anime_id }), 
    ...(category_id && { category_id }), 
    limit: limit || 9,
    page: page || 1, 
  };

  const { data } = await $host.get("/products", { params }); 
  console.log(data)
  return data; 
};
export const getOneProducts = async (slug) => {
  const { data } = await $host.get("/products/" + slug);
  return data;
};

export const getAllCategories = async () => {
  const { data } = await $host.get("/categories");
  return data;
};
