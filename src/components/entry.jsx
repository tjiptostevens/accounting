import React from "react";
const Entry = (props, { data, i }) => {
  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <>
      {/* {console.log("entry", data)} */}
      {console.log("entry", props)}
      {/* {console.log("entry", i)} */}
      {props.data.idx && (
        <div
          key={props.i}
          className="row col-md-12 "
          style={{
            margin: "0px",
            padding: "0px",
          }}
        >
          <input
            disabled={true}
            type="text"
            className="col-md-1"
            style={{ padding: "5px 10px", border: "none" }}
            name="idx"
            value={props.data.idx}
          />
          <input
            type="text"
            className="col-md-3"
            style={{ padding: "5px 10px", border: "none" }}
            name="acc"
            // value={e.acc}
          />
          <input
            type="text"
            className="col-md-2"
            style={{ padding: "5px 10px", border: "none" }}
            name="party_type"
            // value={e.party_type}
          />
          <input
            type="text"
            className="col-md-2"
            style={{ padding: "5px 10px", border: "none" }}
            name="party"
            // value={e.party}
          />
          <input
            type="text"
            className="col-md-2"
            style={{ padding: "5px 10px", border: "none" }}
            name="debit"
            // value={e.debit}
          />
          <input
            type="text"
            className="col-md-2"
            style={{ padding: "5px 10px", border: "none" }}
            name="credit"
            // value={e.credit}
          />
        </div>
      )}
    </>
  );
};

export default Entry;
