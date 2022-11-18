import React from "react";

const BalanceTotal = ({ list }) => {
  return (
    <>
      <hr />
      <div style={{ paddingLeft: "20px", marginTop: "5px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "0 0 2px 0",
            color: "white",
            fontWeight: "600",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "45%",
              textAlign: "right",
            }}
          >
            Total (on progress...)
          </div>
          <div
            className="col-md-6"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "45%",
                color: "white",
              }}
            >
              -
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "45%",
                color: "white",
              }}
            >
              -
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BalanceTotal;
