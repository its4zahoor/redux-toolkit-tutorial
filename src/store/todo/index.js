import TodoReducer from "./reducers";
import * as Actions from "./actions";
import * as Types from "./types";

export const { ADD_TODO, DELETE_TODO, DONE_TODO, UNDONE_TODO } = Types;
export const { addTodo, deleteTodo, doneTodo, undoneTodo } = Actions;
export default TodoReducer;
