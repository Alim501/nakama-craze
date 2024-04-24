import { $authHost, $host } from ".";
import { jwtDecode } from "jwt-decode";

export const createProduct = async (product) => {
  const { data } = await $authHost.post("/products", product);
  return data;
};
export const getAllProducts = async () => {
  const { data } = await $host.get("/products");
  return data;
};
export const getOneProducts = async (id) => {
  const { data } = await $host.get("/products/"+id);
  return data;
};
export const getAllAnime = async () => {
  const { data } = await $host.get("/anime");
  return data;
};
export const createCategory = async (category) => {
  const { data } = await $authHost.post("/categories", category);
  return data;
};

export const getAllCategories = async () => {
  try {
    const response = await $host.get('/categories')
    return response.data;
  } catch(e) {
    console.log(e);
  }
}

// export const getOneProduct = async () => {
//   const response = await $authHost.get("/auth/registration");
//   return response;
// };
