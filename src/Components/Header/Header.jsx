import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { openModal } from "../../actions/modalAction";
import Modal from "../Modal/Modal";
import Login from "../Login/Login";

const Header = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guestCount, setGuestCount] = useState(1);
  const [showGuestPopup, setShowGuestPopup] = useState(false);
  const popRef = useRef(null);

  const handleGuestChange = (operation) => {
    setGuestCount((prevCount) => {
      const newCount =
        operation === "increment" ? prevCount + 1 : prevCount - 1;
      return Math.max(1, Math.min(20, newCount));
    });
  };

  // Close popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popRef.current && !popRef.current.contains(event.target)) {
        setShowGuestPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const openModalHandler = () => {
    dispatch(openModal("open", <Login />));
  };

  return (
    <>
      <div className="navbar display-center">
        <div className="logo_container display-center">
          <img
            src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo-768x432.png"
            className="header-logo"
            alt="logo"
          />
        </div>
        <div className="middle-container display-center gap-30">
          <Link to="/">Stays</Link>
          <Link to="/">Experiences</Link>
        </div>
        <div className="links-container display-center gap-30">
          <Link className="airbnb-home-link" to="/">
            Airbnb your home
          </Link>
          <LanguageIcon />
          <div className="dropdown">
            <ExpandMoreIcon className="dropbtn" />
            <div className="dropdown-content">
              {userInfo ? (
                <>
                  <span>Account</span>
                  <span>Logout</span>
                </>
              ) : (
                <>
                  <span>Sign up</span>
                  <span onClick={openModalHandler}>Login</span>
                  <Modal />
                </>
              )}
              <span>Help</span>
            </div>
          </div>
          <div className="menu-icon display-center">
            <MenuIcon />
            <AccountCircleIcon />
          </div>
        </div>
      </div>
      <div className="header-bottom display-center">
        <div className="bottom-header-container display-center">
          <div className="search-where">
            <p>Where</p>
            <div className="search-where">
              <input type="text" placeholder="Search destinations" />
            </div>
          </div>
          <div className="checkin-date">
            <p>Check in</p>
            <DatePicker
              className="date-picker-styles"
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              placeholderText="Add date"
            />
          </div>
          <div className="checkout-date">
            <p>Check out</p>
            <DatePicker
              className="date-picker-styles"
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              placeholderText="Add date"
            />
          </div>
          <div className="guest-counter">
            <p>Who</p>
            <button
              className="search-button"
              onClick={() => setShowGuestPopup(true)}
            >
              {guestCount > 1 ? `${guestCount} Guests` : `${guestCount} Guest`}
            </button>
            {showGuestPopup && (
              <div className="guest-popup" ref={popRef}>
                <div className="guest-selector">
                  <button
                    className="guest-button"
                    onClick={() => handleGuestChange("decrement")}
                  >
                    <RemoveIcon />
                  </button>
                  <input
                    type="number"
                    value={guestCount}
                    readOnly
                    className="guest-input"
                  />
                  <button
                    className="guest-button"
                    onClick={() => handleGuestChange("increment")}
                  >
                    <AddIcon />
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="search-icon-container display-center">
            <SearchIcon className="search-icon" />
          </div>
        </div>
      </div>
      <div className="banner-search"></div>
    </>
  );
};

export default Header;
