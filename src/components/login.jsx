import React, { useState } from "react";
import "./assets/css/login.css";

const Login = (props) => {
  const [data, setData] = useState("");
  const handleSubmit = (e) => {
    console.log(props);
  };
  const handleChange = (e) => {
    console.log(`${[e.target.name]}`, e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="form-center text-center">
        <br />
        <form className="form-signin" method="get" onSubmit={handleSubmit}>
          <div className="d-none d-sm-block">
            <img
              className="mb-4"
              src="./logo512.png"
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
            />
            <label className="form-check-label"> Remember me</label>
          </div>
          <span>{data.message}</span>
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
