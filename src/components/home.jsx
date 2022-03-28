import React from "react";
import "./assets/css/home.css";
import Nav from "./nav";
import SideNav from "./sideNav";

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
                className="__title_inline"
                style={{ justifyContent: "flex-start" }}
              >
                <div className="__icon">
                  <i className="bi bi-view-list"></i>
                </div>
                <div className="__title">HOME</div>
              </div>
            </div>
          </div>
          <div className="w-100">
            {/* Sidebar */}
            <div className="__side_bar">
              <SideNav />
            </div>

            {/* Content */}
            <div className="__content"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
