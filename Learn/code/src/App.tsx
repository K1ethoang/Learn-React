// TSX
import React, { useReducer, useRef, useEffect } from "react";

// useReduce

// 1. Init state
const initialState: State = {
  todo: "",
  todos: [],
};

interface State {
  todo: string;
  todos: string[];
}

// 2. Actions
const SET_TODO: string = "set_todo";
const ADD_TODO: string = "add_todo";
const DELETE_TODO: string = "delete_todo";

const setTodo = (payload: string) => {
  return {
    type: SET_TODO,
    payload: payload,
  };
};

const addTodo = (payload: string) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

const deleteTodo = (payload: string) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};

// 3. Reducer
const reducer = (state: State, action: any) => {
  let newState: any;

  switch (action.type) {
    case SET_TODO:
      newState = {
        ...state,
        todo: action.payload,
      };
      break;

    case ADD_TODO:
      newState = {
        ...state,
        todos: [action.payload, ...state.todos],
      };
      break;

    case DELETE_TODO:
      const newTodos: string[] = [...state.todos];

      newTodos.splice(action.payload, 1);

      newState = {
        ...state,
        todos: newTodos,
      };
      break;

    default:
      throw new Error("Invalid Action");
  }

  return newState;
};

// 4. Dispatch
const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { todo, todos } = state;

  //   auto focus
  const inputRef: any = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [todos]);

  //   enter to submit
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        document.querySelector("button")?.click();
      }
    });

    return () => {
      document.removeEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          document.querySelector("button")?.click();
        }
      });
    };
  }, []);

  const handleSubmit = () => {
    dispatch(addTodo(todo));
    dispatch(setTodo(""));
  };

  return (
    <div style={{ padding: "0 20px" }}>
      <h3>Todo</h3>
      <input
        type="text"
        placeholder="Enter todo..."
        value={todo}
        onChange={(e) => {
          dispatch(setTodo(e.target.value));
        }}
        ref={inputRef}
      />
      <button onClick={handleSubmit}>Add</button>
      --{">"} Press "Enter" to add
      <ul>
        {todos.map((item: any, index: any) => {
          return (
            <li key={index}>
              {item}
              <span
                style={{ fontSize: "20px", padding: "6px", cursor: "pointer" }}
                onClick={() => {
                  dispatch(deleteTodo(index));
                  inputRef.current.focus();
                }}
              >
                &times;
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
