import React from "react";
import "./assets/css/home.css";
import Nav from "./nav";

const Home = (props) => {
  return (
    <>
      <div className="__main">
        <Nav />
        <div className="__body">
          {/* Title Header */}
          <div className="w-100">
            <div className="container-fluid">
              <div
                className="title-inline"
                style={{ justifyContent: "flex-start" }}
              >
                <div className="__icon">
                  <i className="bi bi-view-list"></i>
                </div>
                <div className="__title">HOME</div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="side-bar"></div>

          {/* Content */}
          <div className="w-100"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
