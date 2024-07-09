import { $authHost, $host } from "..";

export const CreateAnime = async (anime) => {
  for (const pair of anime.entries()) {
    console.log(pair[0], pair[1]);
  }
  const { data } = await $authHost.post("/animes/", anime, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};
export const getAllAnime = async () => {
  const { data } = await $host.get("/animes");
  return data;
};
export const getOneAnime = async (id) => {
  const { data } = await $authHost.get("/animes/" + id);
  return data;
};

export const updateAnime = async (id, anime) => {
  const { data } = await $authHost.put("/animes/" + id, anime, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const deleteAnime = async (id) => {
  const { data } = await $authHost.delete("/animes/" + id);
  return data;
};
