import * as Types from "./types";

const initialState = {
  idsMap: {},
  count: 0,
  ids: [],
};

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Types.ADD_TODO:
      return {
        ...state,
        idsMap: {
          ...state.idsMap,
          [payload.id]: payload,
        },
        count: state.count + 1,
        ids: [...state.ids, payload.id],
      };

    case Types.DELETE_TODO: {
      const ids = state.ids.filter((x) => x !== payload.id);
      const { [payload.id]: _, ...rest } = state.idsMap;
      return {
        ...state,
        idsMap: { ...rest },
        ids,
      };
    }

    case Types.DONE_TODO: {
      const todo = { ...state.idsMap[payload.id] };
      todo.isDone = true;
      const idsMap = { ...state.idsMap };
      delete idsMap[payload.id];
      idsMap[payload.id] = todo;
      return {
        ...state,
        idsMap,
      };
    }

    case Types.UNDONE_TODO: {
      const todo = { ...state.idsMap[payload.id] };
      todo.isDone = false;
      const idsMap = { ...state.idsMap };
      delete idsMap[payload.id];
      idsMap[payload.id] = todo;
      return {
        ...state,
        idsMap,
      };
    }

    default:
      return state;
  }
};

export default todoReducer;
