import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { listingListReducer } from "./Reducers/listingReducers";
import { modalReducer } from "./Reducers/ModalReducer";
import { userLoginReducer } from "./Reducers/userReducer";

// Combine your reducers (currently empty)
const reducer = combineReducers({
  listingList: listingListReducer,
  modal: modalReducer,
  userLogin: userLoginReducer,
});

const userInfoFromLS = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLS },
};

// Middleware array
const middleware = [thunk];

// Create the Redux store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
