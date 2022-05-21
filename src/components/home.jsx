import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/css/home.css";
import Coa from "./coa";
import Company from "./company";
import Nav from "./nav";
import SideNav from "./sideNav";

const Home = (props) => {
  const [data, setData] = useState("");
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
                {/* {console.log(window.location)} */}
                <div className="__title">{window.location.pathname}</div>
              </div>
            </div>
          </div>
          <div
            className="w-100"
            style={{ display: "flex", flexDirection: "row" }}
          >
            {/* Sidebar */}
            <div className="__side_bar">
              <SideNav />
            </div>

            {/* Content */}
            <div className="__content">
              <Routes>
                <Route path="/company" exact element={<Company />} />
                <Route path="/chartofaccount" exact element={<Coa />} />
                <Route path="/costumer" exact></Route>
                <Route path="/company" exact></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
