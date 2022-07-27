import React, { useState, useEffect } from "react";

const AddJournalEntry = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.entry);

    return () => {
      console.log(data);
    };
  }, [props.entry]);
  const handleAddRow = (e) => {
    e.preventDefault();
    console.log("props");
    let idx = props.entry.length + 1;
    props.handleAddRow({
      idx: idx.toString(),
      acc: "",
      party_type: "",
      party: "",
      debit: "",
      credit: "",
    });
  };
  const handleChange = (e) => {
    // console.log(e);
    props.handleRow(e);
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="row col-md-12" style={{ margin: "0px", padding: "0px" }}>
        <label className="label_title">Accounting Entries</label>
        <small>{JSON.stringify(data)}</small>
        <hr />
        <small>{console.log(props)}</small>
        <div
          className="row col-md-12 "
          style={{
            margin: "0px",
            padding: "5px 0 0 0",
          }}
        >
          <div
            className="col-md-1"
            style={{ padding: "5px 10px", border: "1px solid #b3b3b3" }}
          >
            No.
          </div>
          <div
            className="col-md-3"
            style={{ padding: "5px 10px", border: "1px solid #b3b3b3" }}
          >
            Account
          </div>
          <div
            className="col-md-2"
            style={{ padding: "5px 10px", border: "1px solid #b3b3b3" }}
          >
            Party Type
          </div>
          <div
            className="col-md-2"
            style={{ padding: "5px 10px", border: "1px solid #b3b3b3" }}
          >
            Party
          </div>
          <div
            className="col-md-2"
            style={{ padding: "5px 10px", border: "1px solid #b3b3b3" }}
          >
            Debit
          </div>
          <div
            className="col-md-2"
            style={{ padding: "5px 10px", border: "1px solid #b3b3b3" }}
          >
            Credit
          </div>
        </div>

        {/* {props.entry.map((e, i) => (
          <>
            <div
              key={i}
              className="row col-md-12 "
              style={{
                margin: "0px",
                padding: "0px",
              }}
            >
              <input
                onChange={handleChange}
                disabled={true}
                type="text"
                className="col-md-1"
                style={{ padding: "5px 10px", border: "none" }}
                name="idx"
                // value={e.idx}
              />
              <input
                onChange={handleChange}
                type="text"
                className="col-md-3"
                style={{ padding: "5px 10px", border: "none" }}
                name="acc"
                // value={e.acc}
              />
              <input
                onChange={handleChange}
                type="text"
                className="col-md-2"
                style={{ padding: "5px 10px", border: "none" }}
                name="party_type"
                // value={e.party_type}
              />
              <input
                onChange={handleChange}
                type="text"
                className="col-md-2"
                style={{ padding: "5px 10px", border: "none" }}
                name="party"
                // value={e.party}
              />
              <input
                onChange={handleChange}
                type="text"
                className="col-md-2"
                style={{ padding: "5px 10px", border: "none" }}
                name="debit"
                // value={e.debit}
              />
              <input
                onChange={handleChange}
                type="text"
                className="col-md-2"
                style={{ padding: "5px 10px", border: "none" }}
                name="credit"
                // value={e.credit}
              />
            </div>
          </>
        ))} */}
        <div style={{ margin: "0px", padding: "5px 0" }}>
          <button
            style={{ padding: "0 5px", minWidth: "unset" }}
            className="btn btn-primary btn-sm"
            onClick={handleAddRow}
          >
            Add Row
          </button>
        </div>
      </div>
    </>
  );
};

export default AddJournalEntry;
