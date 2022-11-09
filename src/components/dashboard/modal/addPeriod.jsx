import React, { useState } from "react";
import urlLink from "../../config/urlLink";

const AddPeriod = (props) => {
  const [data, setData] = useState({ required: true });

  const [vis, setVis] = useState({ modal: false });
  const handleChange = (e) => {
    console.log(`${[e.target.name]}`, e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
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
    setTimeout(async () => {
      try {
        let res = await fetch(`${urlLink.url}addperiod.php`, {
          signal: abortCtr.signal,
          method: "POST",
          body: JSON.stringify(data),
          headers: headers,
        });
        res = res.json;
        console.log(res);
      } catch (error) {
        console.log(error);
        // setData({
        //   ...data,
        //   msg: 'Error Connection',
        // })
      }
    }, 50);
  };
  return (
    <>
      <form onSubmit={handleSubmit} method="post">
        {/* Name */}
        <div
          className="row col-md-12"
          style={{ margin: "0px", padding: "0px" }}
        >
          <label className="label_title">
            Name <span className="text-danger">*</span>
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
        {/* Description */}
        <div
          className="row col-md-12"
          style={{ margin: "0px", padding: "0px" }}
        >
          <label className="label_title">
            Description <span className="text-danger">*</span>
          </label>
          <input
            required={data.required}
            onChange={handleChange}
            type="text"
            className="form-control mb-2"
            value={data.description}
            name="description"
            id="description"
          />
        </div>
        {/* start */}
        <div
          className="row col-md-12"
          style={{ margin: "0px", padding: "0px" }}
        >
          <label className="label_title">
            Start Date <span className="text-danger">*</span>
          </label>
          <input
            required={data.required}
            onChange={handleChange}
            type="date"
            className="form-control mb-2"
            value={data.start}
            name="start"
            id="start"
          />
        </div>
        {/* end */}
        <div
          className="row col-md-12"
          style={{ margin: "0px", padding: "0px" }}
        >
          <label className="label_title">
            End Date <span className="text-danger">*</span>
          </label>
          <input
            required={data.required}
            onChange={handleChange}
            type="date"
            className="form-control mb-2"
            value={data.end}
            name="end"
            id="end"
          />
        </div>
        <div>
          <p>{data.message}</p>
        </div>
        {/* Button */}
        <button className="btn btn-primary" type="submit">
          Save
        </button>
        <button
          className="btn btn-warning"
          onClick={(e) => props.handleClose(e)}
        >
          Cancel
        </button>
      </form>
    </>
  );
};

export default AddPeriod;
