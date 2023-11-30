import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../redux/action";
import UserCard from "./UserCad";
const UserList = () => {
  const { users, loading } = useSelector((state) => state);
  console.log(users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loding ...</h1>
      ) : (
        React.Children.toArray(users.map((el) => <UserCard user={el} />))
      )}
    </div>
  );
};

export default UserList;
