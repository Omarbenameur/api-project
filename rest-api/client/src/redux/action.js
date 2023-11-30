import axios from "axios";
import { ADD, DELETE, EDIT, GET } from "./actionTypes";

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/get");
    dispatch({
      type: GET,
      payload: res.data,
    });
  } catch (error) {
    alert("get error");
    console.log(error);
  }
};

export const handleDelete = (_id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/delete/${_id}`);
    dispatch({
      type: DELETE,
      payload: res.data,
    });
  } catch (error) {
    alert("delete error");
    console.log(error);
  }
};

export const handleAdd = (newOne) => async (dispatch) => {
  try {
    const res = await axios.post("/add", newOne);
    dispatch({
      type: ADD,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const handleEdit = (editedUser) => async (dispatch) => {
  try {
    const res = await axios.put(`/edit/${editedUser._id}`, editedUser);

    dispatch({
      type: EDIT,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
