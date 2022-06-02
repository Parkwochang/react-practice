import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../component/UserList";
import Spinner from "../component/Spinner";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      //console.log(res);
      setUsers(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h1>Users</h1>
      {loading ? <Spinner /> : <UserList users={users} />}
    </>
  );
}
