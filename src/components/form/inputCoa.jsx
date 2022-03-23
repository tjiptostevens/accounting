import React from "react";

const InputCoa = () => {
  return (
    <>
      <div id="mdl" className="modal-window">
        {/* Data taken from session storage */}
        <div className="row col-md-12">
          <div
            className="w-100 justify-content-around"
            style={{
              textAlign: "justify",
              height: "auto",
            }}
          ></div>
          <div
            className="w-100 justify-content-around"
            style={{
              textAlign: "center",
              height: "auto",
            }}
          >
            <button
              type="button"
              className="btn btn-primary"
              style={{
                textAlign: "center",
                width: "60px",
                height: "auto",
              }}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputCoa;
