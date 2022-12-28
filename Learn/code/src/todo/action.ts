import { SET_TODO, ADD_TODO, DELETE_TODO } from "./constant";

export const setTodo = (payload: string) => {
  return {
    type: SET_TODO,
    payload: payload,
  };
};

export const addTodo = (payload: string) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

export const deleteTodo = (payload: string) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};
