import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../component/Spinner";
import { useParams } from "react-router-dom";

export default function User() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          setUser(res.data);
          setLoading(false);
        });
  }, []);

  const userDetail = loading ? <Spinner /> : (
    <div>
      <div>{user.name}</div>
      <div>{user.email}</div>
      <div>{user.phone}</div>
    </div>
  )

  return (
    <>
      <h1>User Info</h1>
      {userDetail}
    </>
  );
}
