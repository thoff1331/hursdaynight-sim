import { createStore } from "redux";
import Item from "./item";

const initialstate = {
  todoItems: []
};
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";
function reducer(state = initialstate, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ITEM:
      return { ...state, todoItems: [...state.todoItems, action.payload] };
    case REMOVE_ITEM:
      let newState = [...state.todoItems];
      newState.splice(action.payload, 1);
      return { ...state, todoItems: newState };
    case UPDATE_ITEM:
      const news = [...state.todoItems];
      console.log(action.payload.oldText);
      const index = state.todoItems.findIndex(
        val => val === action.payload.oldText
      );
      news.splice(index, 1, action.payload.newText);
      return { ...state, todoItems: news };
    default:
      return state;
  }
}

export default createStore(reducer);
