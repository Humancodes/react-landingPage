import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const DdMenu = ({ icon, title, items }) => {
  return (
    <li className="dropdown d-flex align-items-center px-3 ">
      <FontAwesomeIcon
        icon={icon}
        size="lg"
        style={{ color: "#8064A2", width: "30px" }}
      />
      <div
        className="dropdown-toggle"
        href="/"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ fontWeight: "600" }}
      >
        {title}
      </div>
      <ul className="dropdown-menu">
        {items.map((subItems, index) => (
          <li key={index}>
            {index != 0 ? <hr class="dropdown-divider" /> : <></>}
            <Link className="dropdown-item" href="/">
              {subItems}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default DdMenu;
