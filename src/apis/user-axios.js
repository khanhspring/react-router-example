import { client } from "./client";

const getAll = client.get('users?page=1');
const create = (newUser) => client.post("users", newUser);

const userAxios = {
  getAll,
  create
};

export default userAxios;