import axios from "axios";
const baseUrl = "http://localhost:3001/api/portfolios"; //locally
//const baseUrl = "/api/portfolios"; //deploy
let token = null;

const setToken = newToken => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const request = await axios.get(baseUrl).then(response => response.data);
  return request;
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

const deleteList = (portfolioId, token) => {
  const config = {
    headers: { Authorization: `bearer ${token}` }
  };
  const request = axios.delete(`${baseUrl}/${portfolioId}`, config);
  return request;
};

export default { getAll, create, update, deleteList, setToken };
