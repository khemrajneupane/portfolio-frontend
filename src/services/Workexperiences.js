import axios from "axios";
//const baseUrl = "http://localhost:3001/api/experiences"; //locally
const baseUrl = "/api/experiences"; //deploy
let token = null;

const setToken = newToken => {
  token = `bearer ${newToken}`;
};
const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const create = async (newObject, token) => {
  const config = {
    headers: { Authorization: `bearer ${token}` }
  };
  const request = await axios.post(baseUrl, newObject, config);
  return request;
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then(response => response.data);
};
const deleteList = (experienceId, token) => {
  const config = {
    headers: { Authorization: `bearer ${token}` }
  };
  const request = axios.delete(`${baseUrl}/${experienceId}`, config);
  return request;
};
export default { getAll, create, update, deleteList, setToken };
