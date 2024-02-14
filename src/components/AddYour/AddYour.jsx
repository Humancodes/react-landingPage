import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import "./addYour.css";
import { Link } from "react-router-dom";
const AddYour = () => {
  return (
    <div className="addCont">
      <div className="cardAddYour">
        <div className="headBox">
          <FontAwesomeIcon icon={faCirclePlus} className="iconAdd" />
          <div className="title">Add your own</div>
        </div>
        <div className="desc">
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page
        </div>
        <Link to="/add-new">
          <button className="btnCardAdd">Connect</button>
        </Link>
      </div>
    </div>
  );
};

export default AddYour;
