import React from "react";
import "./addNew.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faStar,
  faBookmark,
  faBell,
  faShoppingCart,
  faMagnifyingGlass,
  faPeopleGroup,
  faBagShopping,
  faLocationDot,
  faCalendarCheck,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import DdMenu from "../../components/Navbar/DropDownMenu/DdMenu";

const AddNew = () => {
  return (
    <div>
      <div className="mainContainer">
        <div className="logoContainer">
          <Link to="/">
            <img className="logo" src="/assets/logo1.png" alt="logo" />
          </Link>
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
          <li className="itemNew">
            <Link className="navlink " href="/bookmark">
              <FontAwesomeIcon
                icon={faBookmark}
                style={{ color: "#8064A2", width: "24px", height: "24px" }}
              />
            </Link>
          </li>
          <li className="itemNew">
            <Link className="navlink " href="/bookmark">
              <FontAwesomeIcon
                icon={faBell}
                style={{ color: "#8064A2", width: "24px", height: "24px" }}
              />
            </Link>
          </li>
          <li className="itemNew">
            <Link className="navlink " href="/bookmark">
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={{ color: "#8064A2", width: "24px", height: "24px" }}
              />
            </Link>
          </li>

          <img src="/assets/avatar.png" className="avatar" alt="" />
        </ul>
      </div>

      <div className="cardsMainCont">
        <div className="mainHeadBox">
          <FontAwesomeIcon icon={faCirclePlus} className="iconAdd" />
          <div className="title">Add Your Listing</div>
        </div>
        <div className="cardsContainer">
          <div className="cardPeople">
            <div className="headBox">
              <FontAwesomeIcon icon={faPeopleGroup} className="peopleIcon" />
              <div className="title">People</div>
            </div>
            <div className="desc">
              An Individual or Organization. Teacher, Coach, Professional or
              Online Seller. Company, Business or Association.
            </div>
          </div>
          <div className="cardPlace">
            <div className="headBox">
              <FontAwesomeIcon icon={faLocationDot} className="placeIcon" />
              <div className="title">Places</div>
            </div>
            <div className="desc">
              An Address. Classroom, Shop, Performance or Event Venue, Sports
              Arena, Studio, School or Campus.
            </div>
          </div>
          <div className="cardProduct">
            <div className="headBox">
              <FontAwesomeIcon icon={faBagShopping} className="productIcon" />
              <div className="title">Product</div>
            </div>
            <div className="desc">
              An Item that you can Book, Buy or Rent. Appointment, Ticket, or
              Voucher. Equipment, Instrument or Activity Kit.
            </div>
          </div>
          <div className="cardProgram">
            <div className="headBox">
              <FontAwesomeIcon icon={faCalendarCheck} className="programIcon" />
              <div className="title">Program</div>
            </div>
            <div className="desc">
              An Event with Venue and Date. Meetup, Workshop or Webinar.
              Exhibition, Performance or Competition.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
