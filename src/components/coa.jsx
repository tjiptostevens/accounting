import React, { useState } from "react";
import CoaLists from "./coaLists";
import useFetch from "./useFetch";
import AddCoa from "./addCoa";

const Coa = () => {
  const { data: coa } = useFetch("getcoa.php");
  const [data, setData] = useState({ vis: false });

  return (
    <>
      <div
        className="__modal-window"
        style={{ display: { true: "block", false: "none" }[data.vis] }}
      >
        <div
          className="row col-md-12"
          style={{ maxHeight: "95vh", overflowY: "auto" }}
        >
          <div
            className="modal-close"
            onClick={() => setData({ ...data, vis: !data.vis })}
          >
            <i
              className="bi bi-x-lg"
              style={{
                textAlign: "center",
                width: "60px",
                height: "auto",
              }}
            ></i>
          </div>
          <div
            className="w-100 justify-content-around"
            style={{
              textAlign: "justify",
              height: "auto",
            }}
          >
            {
              {
                1: <AddCoa />,
                2: "",
              }[data.value]
            }
          </div>
        </div>
      </div>
      <div className="w-100">
        <p className="__content_title">Chart of Account</p>
        <hr />
        <div
          className="w-100"
          style={{ paddingLeft: "15px", paddingRight: "30px" }}
        >
          <button
            className="btn btn-primary m-1"
            onClick={() => setData({ ...data, vis: !data.vis, value: 1 })}
          >
            <i className="bi bi-plus"></i>
            Account
          </button>

          <button className="btn btn-primary m-1">
            <i className="bi bi-file-earmark-spreadsheet"></i>General Ledger
          </button>

          <button className="btn btn-primary m-1">
            <i className="bi bi-file-earmark-medical"></i>Cash Flow
          </button>

          <button className="btn btn-primary m-1">
            <i className="bi bi-file-earmark-diff"></i>Profit & Loss
          </button>
        </div>
        <div className="w-100" style={{ height: "25px" }}></div>
        <div className="row col-md-12" style={{ paddingRight: "50px" }}>
          {coa && <CoaLists list={coa} />}
        </div>
      </div>
    </>
  );
};

export default Coa;
