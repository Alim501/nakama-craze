import moment from "moment";
import { $authHost } from "../index";

export const createPromocode = async (promocode) => {
  promocode.expire_at = moment(promocode.expire_at).toISOString();
  const { data } = await $authHost.post("/promocodes", promocode);
  return data;
};

export const updatePromocode = async (id, promocode) => {
  promocode.expire_at = moment(promocode.expire_at).toISOString();
  const { data } = await $authHost.put(`/promocodes/${id}`, promocode);
  return data;
};

export const deletePromocode = async (id) => {
  const { data } = await $authHost.delete(`/promocodes/${id}`);
  return data;
};

export const getAllPromocode = async () => {
  const { data } = await $authHost.get("/promocodes");
  return data;
};
