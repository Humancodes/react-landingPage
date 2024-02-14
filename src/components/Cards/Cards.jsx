import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faBagShopping,
  faLocationDot,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./cards.css";
const Cards = () => {
  return (
    <div className="cardsMainSec">
      <div className="cardsContainerSec">
        <div className="cardPeopleSec">
          <div className="headBoxSec">
            <FontAwesomeIcon icon={faPeopleGroup} className="peopleIconSec" />
            <div className="titleSec">People</div>
          </div>
          <div className="descSec">
            Find a teacher, coach, or expert for your hobby interest in your
            locality. Find a partner, teammate, accompanist or collaborator.
          </div>
          <button className="btnCardSec">Connect</button>
        </div>
        <div className="cardPlaceSec">
          <div className="headBoxSec">
            <FontAwesomeIcon icon={faLocationDot} className="placeIconSec" />
            <div className="titleSec">Places</div>
          </div>
          <div className="descSec">
            Find a class, school, playground, auditorium, studio, shop or an
            event venue. Book a slot at venues that allow booking through
            hobbycue.
          </div>
          <button className="btnCardSec">Connect</button>
        </div>
        <div className="cardProductSec">
          <div className="headBoxSec">
            <FontAwesomeIcon icon={faBagShopping} className="productIconSec" />
            <div className="titleSec">Product</div>
          </div>
          <div className="descSec">
            Find equipment or supplies required for your hobby. Buy, rent or
            borrow from shops, online stores or from community members.
          </div>
          <button className="btnCardSec">Connect</button>
        </div>
        <div className="cardProgramSec">
          <div className="headBoxSec">
            <FontAwesomeIcon
              icon={faCalendarCheck}
              className="programIconSec"
            />
            <div className="titleSec">Program</div>
          </div>
          <div className="descSec">
            Find events, meetups and workshops related to your hobby. Register
            or buy tickets online.
          </div>
          <button className="btnCardSec">Connect</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
