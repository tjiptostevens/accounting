import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Nav from "./components/nav";
import Rute from "./components/config/routes";
import Page404 from "./components/Page404";
import Home from "./components/home";
import Login from "./components/login";

function App() {
  return (
    <Router>
      <Login />

      <Routes>
        {/* <Home /> */}
        {Rute.web.map(
          (r) => console.log(r)
          // <Route exact key={r.path} path={r.path} component={r.component} />
        )}
        {/* <Route path="/" component={Home} />
        <Route path={"/*"} component={Page404} /> */}
      </Routes>
    </Router>
  );
}

export default App;
