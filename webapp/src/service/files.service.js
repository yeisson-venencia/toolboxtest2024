import networkClient from "./networkClient";

export const getFileNames = async () => {
  const response = await networkClient.get("files/list");
  return response.data;
};

export const getFilesList = async (fileName = "") => {
  const response = await networkClient.get(`files/data?fileName=${fileName}`);
  return response.data;
};
