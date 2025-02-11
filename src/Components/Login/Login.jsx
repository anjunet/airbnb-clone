import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../actions/modalAction";
import { login } from "../../actions/userActions";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (userInfo) {
      dispatch(openModal("close", ""));
    }
  }, [dispatch, userInfo]);

  if (modal.openClose !== "open") return null;

  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        {error && <h2>{error}</h2>}
        {loading && <h2>Loading...</h2>}
        <button
          className="close-button"
          onClick={() => dispatch(openModal("close", ""))}
        >
          ×
        </button>
        <h2>Sign In</h2>
        <form onSubmit={submitLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
