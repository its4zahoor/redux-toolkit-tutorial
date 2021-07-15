import * as Types from "./types";

export const addTodo = (todo) => {
  return {
    type: Types.ADD_TODO,
    payload: todo,
  };
};

export const deleteTodo = (todo) => {
  return {
    type: Types.DELETE_TODO,
    payload: todo,
  };
};

export const doneTodo = (todo) => {
  return {
    type: Types.DONE_TODO,
    payload: todo,
  };
};

export const undoneTodo = (todo) => {
  return {
    type: Types.UNDONE_TODO,
    payload: todo,
  };
};
