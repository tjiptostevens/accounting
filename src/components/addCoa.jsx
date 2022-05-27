import React, { useState, useMemo } from "react";
import useFetch from "./useFetch";
import urlLink from "./config/urlLink";

const AddCoa = (props) => {
  const { data: coa } = useFetch("getcoa.php");
  const [data, setData] = useState({ is_group: null, required: true });
  const handleChange = (e) => {
    console.log(`${[e.target.name]}`, e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  let coaFil = useMemo(() => {
    const searchRegex =
      data.number && new RegExp(`${data.number.substring(0, 1)}`, "gi");
    return (
      coa &&
      coa
        .sort((a, b) => (a.number > b.number ? 1 : -1))
        .filter(
          (d) => !searchRegex || searchRegex.test(d.number.substring(0, 2))
        )
    );
  }, [coa, data.number]);
  const handleClose = (e) => {
    e.preventDefault();
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
      fetch(`${urlLink.url}addCoa.php`, {
        signal: abortCtr.signal,
        method: "POST",
        body: JSON.stringify(data),
        headers: headers,
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setData({
            number: "",
            name: "",
            parent: "",
            is_group: null,
            required: true,
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
  return (
    <>
      <div className="modal_title">
        <b>Add Chart Of Account</b>
      </div>
      {/* {JSON.stringify(data)} <br /> */}
      {/* {console.log(props)} */}
      {/* {JSON.stringify(coa)} */}
      <div className="modal_content">
        <form onSubmit={handleSubmit} method="post">
          {/* Account Number */}
          <div
            className="row col-md-12"
            style={{ margin: "0px", padding: "0px" }}
          >
            <label className="label_title">
              Account Number <span className="text-danger">*</span>
            </label>
            <input
              required={data.required}
              onChange={handleChange}
              type="number"
              className="form-control mb-2"
              value={data.number}
              name="number"
              id="number"
            />
          </div>
          {/* Account Name */}
          <div
            className="row col-md-12"
            style={{ margin: "0px", padding: "0px" }}
          >
            <label className="label_title">
              Account Name <span className="text-danger">*</span>
            </label>
            <input
              required={data.required}
              onChange={handleChange}
              type="text"
              className="form-control mb-2"
              value={data.name}
              name="name"
              id="name"
            />
          </div>
          {/* Group */}
          <div
            className="row col-md-12 mb-2"
            style={{
              margin: "0px",
              padding: "0px",
              flexWrap: "nowrap",
              alignItems: "center",
            }}
          >
            <input
              className="modal-check"
              type="checkbox"
              name="is_group"
              onClick={() =>
                setData({
                  ...data,
                  is_group: !data.is_group,
                })
              }
              checked={data.is_group}
              // onChange={handleChange}
            />
            <label className="label_title" style={{ paddingLeft: "15px" }}>
              is Group
            </label>
          </div>
          {/* Parent Name */}
          <div
            className="row col-md-12 mb-5"
            style={{ margin: "0px", padding: "0px" }}
          >
            <label className="label_title">
              Parent Name <span className="text-danger">*</span>
            </label>
            <select
              className="form-select"
              name="parent"
              id="parent"
              onChange={handleChange}
              value={data.parent}
            >
              {data.parent ? "" : <option value="null">Select Parent</option>}
              <option value="0">Root Parent</option>
              {coaFil &&
                coaFil
                  .filter((e) => e.is_group === "1")
                  .map((e, i) => (
                    <option key={i} value={e.number}>
                      {e.number} - {e.name}
                    </option>
                  ))}
            </select>
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

export default AddCoa;
