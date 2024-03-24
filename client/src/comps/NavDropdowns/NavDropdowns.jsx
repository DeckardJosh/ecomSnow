import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function NavDropdowns({ dropTitle, dropSnowboard, dropSki, dropApparel }) {
  return (
    <>
      <li className="nav-item dropdown pe-3">
        <button
          className="nav-link dropdown-toggle text-light"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
            {dropTitle}
        </button>
        <ul className="dropdown-menu dropdown-menu-sm-end">
          <li>
            <Link className="dropdown-item" to={dropSnowboard}>
                Snowboards
            </Link>
          </li>
          <hr className="dropdown-divider" />
          <li>
            <Link className="dropdown-item" to={dropSki}>
                Skis
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item" to={dropApparel}>
                Apparel
            </Link>
          </li>
        </ul>
      </li>
    </>
  );
}

NavDropdowns.propTypes = {
    dropTitle: PropTypes.string,
    dropSnowboard: PropTypes.string,
    dropSki: PropTypes.string,
    dropApparel: PropTypes.string
}
