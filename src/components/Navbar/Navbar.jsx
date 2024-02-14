import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faStar,
  faBookmark,
  faBell,
  faShoppingCart,
  faMagnifyingGlass,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import DdMenu from "./DropDownMenu/DdMenu";
import { useLocation } from "react-router-dom";
import "./navbar.css";
import JoinInForm from "../JoinInForm/JoinInForm";
import SignInForm from "../SignInForm/SignInForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="navContainer">
        <div className="logoContainer">
          <img className="mainLogo" src="/assets/logo2.png" alt="logo" />
        </div>
        <div className="searchBox">
          <input className="searchInput" type="text" placeholder="Search..." />
          <Link className=" " to="/">
            <button className="searchBtn">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="searchIcon"
                style={{ width: "14px", height: "14px" }}
              />
            </button>
          </Link>
        </div>

        <ul className="navItems">
          <DdMenu
            icon={faCompass}
            title="Explore"
            items={[
              "People-Community",
              "Places-Venues",
              "Programs-Events",
              "Product-Stores",
              "Blog",
            ]}
          />

          <DdMenu
            icon={faStar}
            title="Hobbies"
            items={["gaming", "binge-watching", "travelling"]}
          />
          <li className="item">
            <Link className="navlink " to="/">
              <FontAwesomeIcon
                icon={faBookmark}
                style={{ color: "#8064A2", width: "24px", height: "24px" }}
              />
            </Link>
          </li>
          <li className="item">
            <Link className="navlink " to="/">
              <FontAwesomeIcon
                icon={faBell}
                style={{ color: "#8064A2", width: "24px", height: "24px" }}
              />
            </Link>
          </li>
          <li className="item">
            <Link className="navlink " to="/">
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={{ color: "#8064A2", width: "24px", height: "24px" }}
              />
            </Link>
          </li>
          <Link to="/login">
            <button className="signInBtn"> Sign In</button>
          </Link>
        </ul>
      </div>
      <nav className="navbarMob">
        {!isOpen ? (
          <div className="mlogoContainer">
            <img className="mLogo" src="/assets/logo2.png" alt="logo" />
          </div>
        ) : (
          <div className="mlogoContainer">
            <img className="mLogo1" src="/assets/logo1.png" alt="logo" />
          </div>
        )}
        <div className="d-flex">
          {!isOpen && (
            <ul className="nav-links">
              <li className="item">
                <Link className="navlink " to="/">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ color: "#8064A2", width: "22px", height: "22px" }}
                  />
                </Link>
              </li>
              <li className="item">
                <Link className="navlink " to="/">
                  <FontAwesomeIcon
                    icon={faBell}
                    style={{ color: "#8064A2", width: "22px", height: "22px" }}
                  />
                </Link>
              </li>
            </ul>
          )}
          <div className="toggle" onClick={toggleNavbar}>
            {isOpen ? (
              <li className="item">
                <FontAwesomeIcon
                  icon={faXmark}
                  style={{ color: "#8064A2", width: "22px", height: "22px" }}
                />
              </li>
            ) : (
              <li className="item">
                <FontAwesomeIcon
                  icon={faBars}
                  style={{ color: "#8064A2", width: "24px", height: "24px" }}
                />
              </li>
            )}
          </div>
        </div>
      </nav>
      {isOpen && (
        <div className="content">
          {location.pathname === "/login" ? <SignInForm /> : <JoinInForm />}
        </div>
      )}
    </div>
  );
};

export default Navbar;
