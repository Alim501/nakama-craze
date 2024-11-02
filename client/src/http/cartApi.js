import { $authHost } from ".";

export const addCartItem = async ({ product_id, color_id, size_id }) => {
  console.log(product_id, size_id, color_id);
  const { data } = await $authHost.post("/basket", {
    product_id,
    color_id,
    size_id,
  });
  return data;
};

export const updateCartItem = async (id, item) => {
  const { data } = await $authHost.put("/products/" + id, item, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};
export const deleteCartItems = async (id) => {
  const { data } = await $authHost.delete("/products/" + id);
  return data;
};
export const getAllCartItems = async () => {
  const { data } = await $authHost.get("/basket");
  return data;
};
