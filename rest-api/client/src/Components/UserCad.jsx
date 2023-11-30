import React from "react";
import { useDispatch } from "react-redux";
import { getAllUsers, handleDelete } from "../redux/action";
import Edit from "./Edit";
const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(handleDelete(user._id));
    dispatch(getAllUsers());
  };
  return (
    <div>
      <h1>{user.fullName}</h1>
      <button onClick={handleSubmit}>Delete</button>
      <Edit user={user} />
      <hr />
    </div>
  );
};

export default UserCard;
