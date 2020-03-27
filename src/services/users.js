import axios from "axios";
const baseUrl = "http://localhost:3001/api/users"; //locally
//const baseUrl = "/api/users"; //deploy

const getAll = async () => {
  const request = await axios.get(baseUrl);
  return request.data;
};

const createUser = async newObject => {
  const request = await axios.post(baseUrl, newObject);
  return request;
};

export default { getAll, createUser };
