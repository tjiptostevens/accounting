import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Nav from "./components/nav";
import routes from "./components/config/routes";
import Page404 from "./components/Page404";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        {routes.web.map((route) => (
          <Route
            exact
            key={route.path}
            path={route.path}
            component={route.component}
          />
        ))}
        <Route path={"/*"} component={Page404} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
