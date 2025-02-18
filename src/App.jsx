import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Searchpage from "./Pages/SearchPage/Searchpage";
import Login from "./Components/Login/Login";
import Modal from "./Components/Modal/Modal";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Searchpage />} />

          <Route path="/login" element={<Login />} />
          <Route path="modal" element={<Modal />} />
        </Routes>

        <Footer />
      </>
    </Router>
  );
}

export default App;
