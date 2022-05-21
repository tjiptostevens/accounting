import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./assets/css/login.css";
import "./assets/css/modal.css";
import urlLink from "./config/urlLink";

const Login = (props) => {
  const [data, setData] = useState({
    data: {
      usr: "",
      pwd: "",
      isRemember: false,
      error: "",
    },
    vis: false,
    msg: "",
    token: "",
    res: "",
  });
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
      fetch(`${urlLink.url}login.php`, {
        signal: abortCtr.signal,
        method: "POST",
        body: JSON.stringify(data.data),
        headers: headers,
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.token) {
            console.log("Successfully Login");
            sessionStorage.setItem("user_id", res.token);
            data.data.isRemember === true
              ? localStorage.setItem("user_id", res.token)
              : console.log("is");
            setData({
              ...data,
              msg: res.message,
              token: res.token,
              vis: !data.vis,
              res: res.data,
            });
            return res;
          } else {
            setData({
              ...data,
              msg: res.message,
            });
          }
        })

        // display an alert message for an error
        .catch((err) => {
          console.log(err);
          setData({
            ...data,
            msg: "terjadi kesalahan",
          });
        });
    }, 50);
  };
  const handleChange = (e) => {
    console.log(`${[e.target.name]}`, e.target.value);
    setData({
      ...data,
      data: { ...data.data, [e.target.name]: e.target.value },
      msg: "",
    });
  };
  return (
    <>
      <div
        className="__modal-window"
        style={{ display: { true: "block", false: "none" }[data.vis] }}
      >
        <div className="row col-md-12">
          <div
            className="w-100 justify-content-around"
            style={{
              textAlign: "justify",
              height: "auto",
            }}
          >
            <div style={{ fontSize: "24px" }}>{data.msg}</div>
          </div>
        </div>
        <div
          className="w-100 justify-content-around"
          style={{
            textAlign: "center",
            height: "auto",
          }}
        >
          <Link
            to={{
              pathname: "/d",
              state: { data: data },
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
          </Link>
        </div>
      </div>

      <div className="form-center text-center">
        {/* {JSON.stringify(data)} */}
        <br />
        <form className="form-signin" method="post" onSubmit={handleSubmit}>
          <div className="d-none d-sm-block">
            <img
              className="mb-4"
              src="./assets/img/logo512.png"
              alt=""
              width="72"
              height="72"
            />
          </div>
          <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
          <label className="sr-only" htmlFor="usr">
            Username
          </label>
          <input
            className="form-control"
            type="text"
            name="usr"
            id="usr"
            placeholder="username"
            required
            autoFocus
            onChange={handleChange}
          />
          <label className="sr-only" htmlFor="pwd">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            name="pwd"
            id="inputpwd"
            placeholder="password"
            required
            onChange={handleChange}
          />
          <div className="form-check checkbox mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              name="isRemember"
              value={data.isRemember}
              onClick={() =>
                setData({
                  ...data,
                  data: { ...data.data, isRemember: !data.data.isRemember },
                })
              }
            />
            <label className="form-check-label"> Remember me</label>
          </div>
          <p>{data.msg}</p>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>

          <div className="w-100" style={{ height: "25px" }}></div>
          <hr />
          <span>Don't have an account?</span>
          <hr />
          <p className="mt-5 mb-3 text-muted">&copy; 2021-2022</p>
        </form>
      </div>
    </>
  );
};

export default Login;
