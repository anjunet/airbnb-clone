import { OPEN_MODAL } from "../types/modalTypes";

// export const openModal = (openClose, content) => {
//   return {
//     type: OPEN_MODAL,
//     payload: {
//       openClose,
//       content,
//     },
//   };
// };

export const openModal = (status, content) => (dispatch) => {
  dispatch({
    type: "TOGGLE_MODAL",
    payload: { openClose: status, content: content },
  });
};
