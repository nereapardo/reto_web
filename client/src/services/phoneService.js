import axios from "axios";

const phoneService = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});
export const getPhones = async () => {
  const { data } = await phoneService.get("/phones");
  return data.data;
};
export const getPhone = async (id) => {
  const { data } = await phoneService.get(`/phones/${id}`);
  return data;
};
