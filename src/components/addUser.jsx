import React, { useState } from "react";
import useFetch from "./useFetch";
import urlLink from "./config/urlLink";

const AddUser = (props) => {
  const { data: coa } = useFetch("getcoa.php");
  const [data, setData] = useState({ required: true });
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
      fetch(`${urlLink.url}adduser.php`, {
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
            first_name: "",
            last_name: "",
            mobile: "",
            email: "",
            usr: "",
            pwd: "",
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
        <b>Add User</b>
      </div>
      {/* {JSON.stringify(data)} <br /> */}
      {/* {console.log(props)} */}
      {/* {JSON.stringify(coa)} */}
      <div className="modal_content">
        <form onSubmit={handleSubmit} method="post">
          {/* User First Name */}
          <div
            className="row col-md-12"
            style={{ margin: "0px", padding: "0px" }}
          >
            <label className="label_title">
              First Name <span className="text-danger">*</span>
            </label>
            <input
              required={data.required}
              onChange={handleChange}
              type="text"
              className="form-control mb-2"
              value={data.first_name}
              name="first_name"
              id="first_name"
            />
          </div>
          {/* User Last Name */}
          <div
            className="row col-md-12"
            style={{ margin: "0px", padding: "0px" }}
          >
            <label className="label_title">Last Name</label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control mb-2"
              value={data.last_name}
              name="last_name"
              id="last_name"
            />
          </div>
          {/* Customer Mobile */}
          <div
            className="row col-md-12"
            style={{ margin: "0px", padding: "0px" }}
          >
            <label className="label_title">
              Mobile <span className="text-danger">*</span>
            </label>
            <input
              required={data.required}
              onChange={handleChange}
              type="tel"
              className="form-control mb-2"
              value={data.mobile}
              name="mobile"
              id="mobile"
            />
          </div>
          {/* Customer Email */}
          <div
            className="row col-md-12"
            style={{ margin: "0px", padding: "0px" }}
          >
            <label className="label_title">
              E-Mail <span className="text-danger">*</span>
            </label>
            <input
              required={data.required}
              onChange={handleChange}
              type="email"
              className="form-control mb-2"
              value={data.email}
              name="email"
              id="email"
            />
          </div>
          {/* Username */}
          <div
            className="row col-md-12"
            style={{ margin: "0px", padding: "0px" }}
          >
            <label className="label_title">
              Username <span className="text-danger">*</span>
            </label>
            <input
              required={data.required}
              onChange={handleChange}
              type="text"
              className="form-control mb-2"
              value={data.usr}
              name="usr"
              id="usr"
            />
          </div>
          {/* Password */}
          <div
            className="row col-md-12 mb-5"
            style={{ margin: "0px", padding: "0px" }}
          >
            <label className="label_title">
              Password <span className="text-danger">*</span>
            </label>
            <input
              required={data.required}
              onChange={handleChange}
              type="text"
              className="form-control mb-2"
              value={data.pwd}
              name="pwd"
              id="pwd"
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

export default AddUser;
