import {
  ADD_TODO,
  SET_TODO_INPUT,
  DELETE_TODO,
  UPDATE_TODO,
  CLEAR_TODO,
} from "./contants";

const initialState = {
  todos: [],
  todoInput: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case UPDATE_TODO:
      const { todoInput, indexEdit } = action.payload;
      state.todos[indexEdit] = todoInput;

      return {
        ...state,
        todos: [...state.todos],
      };
    case DELETE_TODO:
      const newTodos = [...state.todos];
      newTodos.splice(action.payload, 1);

      return {
        ...state,
        todos: newTodos,
      };
    case CLEAR_TODO:
      return {
        ...state,
        todos: [],
      };

    default:
      throw new Error("Invalid action");
  }
};

export { initialState };
export default reducer;
