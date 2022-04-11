import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SwitchTheme } from "../../utility";
import { Search } from "./search";
import { useData } from "../../context";
import { Logout } from "../Auth";
import "./navbar.css";

const NavbarWishlistButton = ({ wishlistNotification }) => (
  <button className="btn-icon nav-icons">
    <i className="fas is-dark fa-heart icon-badge">
      {wishlistNotification > 0 ? (
        <span className="">{wishlistNotification}</span>
      ) : (
        ""
      )}
    </i>
  </button>
);
const NavbarCartButton = ({ cartNotification }) => (
  <button className="btn-icon nav-icons m-x-1">
    <i className="fas is-dark fa-shopping-cart icon-badge">
      {cartNotification > 0 ? <span className="">{cartNotification}</span> : ""}
    </i>
  </button>
);

const Navbar = () => {
  const { dataState } = useData();
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState("navbar li-shadow");
  const [showLogout, setShowLogout] = useState("none");
  const toggleLogoutModal = () => {
    setShowLogout((prevState) => (prevState === "none" ? "" : "none"));
  };
  const hamburgerClickHandler = () => {
    if (showNav === "navbar li-shadow")
      setShowNav("navbar custom-nav li-shadow");
    if (showNav === "navbar custom-nav li-shadow") {
      setShowNav("navbar li-shadow");
    }
  };
  return (
    <div className="">
      <nav className={showNav}>
        <div className="nav-head">
          <div className="nav-brand">
            <a href="" className="logo-a">
              <img
                className="logo-s"
                src="images/02 - Colorful - Icon Only.png"
                alt="Lucid logo"
              />
            </a>
          </div>
          <div onClick={hamburgerClickHandler} className="nav-hamburger">
            <i className="fas fa-bars" />
          </div>
        </div>

        <div className="nav-menu">
          <div className="nav-start">
            <Link to="/">Home</Link>
            <Link to="/productListing">Shop</Link>
            <a className="nav-item link"></a>
          </div>
          <div className="nav-end">
            <Search />
            <SwitchTheme />
            <Link to="/cart">
              <NavbarCartButton cartNotification={dataState.cart.length} />
            </Link>

            <Link to="/Wishlist">
              <NavbarWishlistButton
                wishlistNotification={dataState.wishlist.length}
              />
            </Link>

            <button
              onClick={toggleLogoutModal}
              className="btn-icon nav-icons m-x-1"
            >
              <i className="fas is-dark fa-sign-out-alt" />
            </button>

            <button className="btn-icon nav-icons m-x-1">
              <i className="fa-solid is-dark fa-user" />
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="btn-secondary nav-btn btn-small"
            >
              Sign up
            </button>

            <button
              onClick={() => navigate("/login")}
              className="btn-primary nav-btn btn-small"
            >
              Log in
            </button>
          </div>
        </div>
      </nav>
      <Logout showLogout={showLogout} toggleLogout={toggleLogoutModal} />
    </div>
  );
};

export { Navbar };
