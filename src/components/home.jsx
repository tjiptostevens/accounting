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
                <div className="__title">{data}</div>
              </div>
            </div>
          </div>
          <div className="w-100">
            {/* Sidebar */}
            <div className="__side_bar">
              <SideNav />
            </div>

            {/* Content */}
            <div className="__content">
              <Routes>
                <Route path="/d/company" exact component={Company}>
                  {/* <Company /> */}
                </Route>
                <Route path="/d/chartofaccount" exact>
                  {/* <Coa /> */}
                </Route>
                <Route path="/d/company" exact></Route>
                <Route path="/d/company" exact></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
