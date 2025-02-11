import { OPEN_MODAL } from "../types/modalTypes";

const initialState = { openClose: "close", content: "" };

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return {
        ...state,
        openClose: action.payload.openClose,
        content: action.payload.content,
      };
    default:
      return state;
  }
};
