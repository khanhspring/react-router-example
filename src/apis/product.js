
const getAll = fetch('https://reqres.in/api/users?page=1');
const getDetail = fetch('https://reqres.in/api/users?page=1');

const user = {
  getAll,
  getDetail
};

export default user;