import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/img/env.png";

const Nav = () => {
  return (
    <>
      <div className="w-100" style={{ backgroundColor: "#1c2126" }}>
        <div className="container">
          <nav className="navbar navbar-expand navbar-dark justify-content-between sticky-top">
            <Link className="navbar-brand" to="#">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
              />
              Bootstrap
            </Link>
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Nav;
