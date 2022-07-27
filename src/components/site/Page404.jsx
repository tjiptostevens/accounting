import React, { Component } from "react";

class Page404 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="" style={{ minHeight: "600px" }}>
          <div className="container">
            <div className="row align-items-center justify-content-around">
              <div className="w-100" style={{ minHeight: "50px" }}></div>
              <div className="row col-md-6 align-items-center">
                <div className="col-md-4" style={{ fontSize: "72px" }}>
                  404
                </div>
                <div className="col-md-8" style={{ fontSize: "14px" }}>
                  Congratulation..
                  <br />
                  We think you found our 404 Pages.
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row align-items-center justify-content-around">
              <div className="w-100" style={{ minHeight: "50px" }}></div>
              <div className="row col-md-6 align-items-center">
                <div className="col-md-4" style={{ fontSize: "72px" }}>
                  404
                </div>
                <div className="col-md-8" style={{ fontSize: "14px" }}>
                  Congratulation..
                  <br />
                  We think you found our 404 Pages.
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Page404;
