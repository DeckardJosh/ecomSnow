import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./NavDropdown.css";

export default function NavDropdowns({ 
  dropTitle,
  dropPath
}) {
  return (
    <>
        <li className="nav-item">
          <Link className="nav-link btn btn-dark custom_nav_link active me-2" to={dropPath}>{dropTitle}</Link>
        </li>
    </>
  );
}

NavDropdowns.propTypes = {
    dropTitle: PropTypes.string,
    dropPath: PropTypes.string
}
