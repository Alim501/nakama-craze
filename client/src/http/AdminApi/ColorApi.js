import { $host,$authHost } from "..";


export const createColor = async (color) => {
    const { data } = await $authHost.post("/colors/",color);
    return data;
};
export const getOneColor = async (id) => {
    const { data } = await $authHost.get("/colors/" + id);
    return data;
};
export const updateColor = async (id,color) => {
  const { data } = await $authHost.put("/colors/"+id,color);
  return data;
};
export const deleteColor = async (id) => {
    const { data } = await $authHost.delete("/colors/"+id);
    return data;
  };
export const getAllColors = async () => {
  const {data} = await $host.get("/colors");
  return data;
};
