import { ADD, DELETE, EDIT, GET } from "./actionTypes";

const init = {
  users: [],
  loading: true,
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET:
      return {
        ...state,
        loading: false,
        users: payload,
      };
    case DELETE:
      return {
        ...state,
        users: state.users.filter((el) => el._id !== payload),
      };
    case ADD:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case EDIT:
      return {
        ...state,
        users: state.users.map((el) => (el._id === payload._id ? payload : el)),
      };

    default:
      return state;
  }
};
