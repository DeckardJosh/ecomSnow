import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import NavDropdowns from "../NavDropdowns";

//Redux
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/cartSlice";

export default function Navbar() {
  const allCartItems = useSelector(selectCart);

  return (
    <>
      <nav className="navbar bg-black navbar-expand-lg bg-body-tertiary nav">
        <div className="container-fluid">
          <Link className="navbar-brand ps-3 text-light p-2 ms-3" to="/">
            {/* TODO: Needs Image Here -------------------------------------------------------------------------------------------------------------------------------------------------TODO */}
            ecomSnow
          </Link>
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <NavDropdowns dropTitle={"Admin"} dropPath={"/auth"} />
              <NavDropdowns dropTitle={"Products"} dropPath={"/products"}/>

              <li className="nav-item pe-3">
                <Link className="nav-link text-light" to={"/cart"}>
                  Cart {allCartItems.length}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}