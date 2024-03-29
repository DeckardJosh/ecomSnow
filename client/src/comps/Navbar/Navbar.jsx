import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import NavDropdowns from "../NavDropdowns";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary nav">
        <div className="container-fluid">
            <Link className="navbar-brand ps-3 text-light p-2 ms-3" to="/">
                {/* TODO: Needs Image Here -------------------------------------------------------------------------------------------------------------------------------------------------TODO */}
                Test
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
          {/* DropLinks Start */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <NavDropdowns
                dropTitle={"Mens"}
                dropSnowboard={"/products"}
                dropSki={"/products"}
                dropApparel={"/products"}
                dropGear={"/products"}
              />
              <NavDropdowns
                dropTitle={"Womens"}
                dropSnowboard={"/products"}
                dropSki={"/products"}
                dropApparel={"/products"}
                dropGear={"/products"}
              />
              <NavDropdowns
                dropTitle={"Kids"}
                dropSnowboard={"/products"}
                dropSki={"/products"}
                dropApparel={"/products"}
                dropGear={"/products"}
              />
            {/* DropLinks End */}

              {/* Cart Starts Here */}
              <li className="nav-item pe-3">
                <Link className="nav-link text-light" to={"#"}>
                    Cart
                </Link>
              </li>
              {/* Cart Ends Here */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
