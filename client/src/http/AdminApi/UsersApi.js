import { $authHost } from "..";


export const getOneUser = async (id) => {
    const { data } = await $authHost.get("/users/" + id);
    return data;
};
export const updateUser = async (id) => {
  const { data } = await $authHost.get("/users/"+id);
  return data;
};
export const deleteUser = async (id) => {
    const { data } = await $authHost.get("/users/"+id);
    return data;
  };
export const getAllUsers = async () => {
  const {data} = await $authHost.get("/users");
  return data;
};
