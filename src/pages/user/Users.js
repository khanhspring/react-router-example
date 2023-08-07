import { useEffect, useState } from "react";
import userAxios from "../../apis/user-axios";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userAxios.getAll
      .then(userPages => setUsers(userPages.data.data));
  }, []);

  const onCreateUser = () => {
    const newUser = {
      "name": "morpheus",
      "job": "leader"
    };
    userAxios.create(newUser)
      .then(user => {
        alert("Bạn đã thêm mới thành công user ID = " + user.data.id);
      });
  }

  return (
    <div>
      <button onClick={onCreateUser}>Tạo mới</button>
      {users.map((item, index) => (
        <div key={index}>
          {item.email}
        </div>
      ))}
    </div>
  )
}