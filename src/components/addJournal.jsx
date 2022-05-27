import React, { useState, useEffect } from "react";
import useFetch from "./useFetch";
import urlLink from "./config/urlLink";
import useDate from "./useDate";
import AddJournalEntry from "./addJournalEntry";
import Entry from "./entry";

const AddJournal = (props) => {
  const { data: coa } = useFetch("getcoa.php");
  const { now, YY, DD, MM, ss } = useDate();
  const [data, setData] = useState({
    required: true,
    name: "",
    title: "",
    last: "0000",
    now: `${YY}-${MM}-${DD}`,
    entry: [
      // { idx: "1", acc: "", party_type: "", party: "", debit: "", credit: "" },
    ],
    month: MM,
    minute: ss,
    posting_date: `${YY}-${MM}-${DD}`,
  });

  useEffect(() => {
    const abortCtr = new AbortController();
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": window.location.origin,
    };
    setTimeout(() => {
      fetch(`${urlLink.url}getjournallast.php`, {
        signal: abortCtr.signal,
        method: "GET",
        headers: headers,
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        })

        // display an alert message for an error
        .catch((err) => {
          console.log(err);
          setData({
            ...data,
            last: "0000",
            msg: "Error Connection",
          });
        });
    }, 50);
    return data;
  }, [data.name, data.title]);

  const handleChange = (e) => {
    console.log(`${[e.target.name]}`, e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleClose = (e) => {
    console.log(data);
    setData({ ...data, required: !data.required });
    props.handleClose(e);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    const abortCtr = new AbortController();
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": window.location.origin,
    };
    setTimeout(() => {
      fetch(`${urlLink.url}addjournal.php`, {
        signal: abortCtr.signal,
        method: "POST",
        body: JSON.stringify(data),
        headers: headers,
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setData({
            required: true,
            name: "",
            title: "",
            user_remark: "",
            address: "",
            message: res.message,
          });
        })

        // display an alert message for an error
        .catch((err) => {
          console.log(err);
          setData({
            ...data,
            msg: "Error Connection",
          });
        });
    }, 50);
  };
  const handleRow = (e) => {
    // console.log(`${[e.target.name]}`, e.target.value);
    console.log(e);
    // setData({
    //   ...data,
    //   [e.target.name]: e.target.value,
    // });
  };
  const handleAddRow = (e) => {
    e.preventDefault();
    let idx = data.entry.length + 1;
    // data.entry.push({
    //   idx: idx.toString(),
    //   acc: "",
    //   party_type: "",
    //   party: "",
    //   debit: "",
    //   credit: "",
    // });
    setData({ ...data, entry: [...data.entry, { idx: idx.toString() }] });
    console.log("handleAddRow", data);
  };

  return (
    <>
      <div className="modal_title">
        <b>Add Jounal</b>
      </div>
      {JSON.stringify(data)} <br />
      {/* {JSON.stringify(coa)} */}
      <div className="modal_content">
        <form onSubmit={handleSubmit} method="post">
          <div
            className="row col-md-12"
            style={{ margin: "0px", padding: "0px" }}
          >
            {/* Numbering */}
            <div
              className="row col-md-6"
              style={{ margin: "0px", padding: "0px" }}
            >
              <label className="label_title">
                Number <span className="text-danger">*</span>
              </label>
              <input
                required={data.required}
                onChange={handleChange}
                type="text"
                className="form-control mb-2"
                value={`JV/${data.month}/${(data.last + 1).slice(-4)}`}
                name="name"
                id="name"
              />
            </div>
            {/* Posting Date */}
            <div
              className="row col-md-6"
              style={{ margin: "0px", padding: "0px" }}
            >
              <label className="label_title">
                Posting Date <span className="text-danger">*</span>
              </label>
              <input
                required={data.required}
                onChange={handleChange}
                type="date"
                className="form-control mb-2"
                value={
                  data.posting_date && data.posting_date
                    ? data.posting_date
                    : data.today
                }
                name="posting_date"
                id="posting_date"
              />
            </div>
          </div>
          {/* Customer Mobile */}
          <div
            className="row col-md-12"
            style={{ margin: "0px", padding: "0px" }}
          >
            <label className="label_title">
              Title <span className="text-danger">*</span>
            </label>
            <input
              required={data.required}
              onChange={handleChange}
              type="tel"
              className="form-control mb-2"
              value={data.title}
              name="title"
              id="title"
            />
          </div>
          {/* Input data Accounting */}
          <div
            className="row col-md-12"
            style={{ margin: "0px", padding: "0px" }}
          >
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
            {data.entry &&
              data.entry.map((e, i) => (
                <Entry i={i} data={e} handleRow={handleRow} />
              ))}

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

          {/* <AddJournalEntry
            entry={data.entry}
            handleRow={handleRow}
            handleAddRow={handleAddRow}
          /> */}
          {/* Pay to / Received By */}
          <div
            className="row col-md-12"
            style={{ margin: "0px", padding: "0px" }}
          >
            <label className="label_title">Pay To / Received By :</label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control mb-2"
              value={data.user_remark}
              name="pay_to_recd_by"
              id="pay_to_recd_by"
            />
          </div>
          {/* User Remark */}
          <div
            className="row col-md-12 mb-5"
            style={{ margin: "0px", padding: "0px" }}
          >
            <label className="label_title">User Remark</label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control mb-2"
              value={data.user_remark}
              name="user_remark"
              id="user_remark"
            />
          </div>
          <div>
            <p>{data.message}</p>
          </div>
          {/* Button */}
          <button className="btn btn-primary" type="submit">
            Save
          </button>
          <button className="btn btn-warning" onClick={handleClose}>
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default AddJournal;
