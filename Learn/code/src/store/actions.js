import {
  SET_TODO_INPUT,
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  CLEAR_TODO,
} from "./contants";

export const setTodoInput = (payload) => ({
  type: SET_TODO_INPUT,
  payload,
});

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const updateTodo = (payload) => ({
  type: UPDATE_TODO,
  payload,
});

export const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});

export const clearTodo = (payload) => ({
  type: CLEAR_TODO,
  payload,
});
