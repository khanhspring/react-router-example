
const getAll = fetch('https://reqres.in/api/users?page=1');
const create = (newUser) => {
  return fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
}

const user = {
  getAll,
  create
};

export default user;