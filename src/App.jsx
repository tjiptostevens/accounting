import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/assets/css/scrollbar.css";
import Rute from "./components/config/routes";
import Page404 from "./components/Page404";

function App() {
  return (
    <Router>
      {/* <Router basename={"/accounting/build/"}> */}
      <Routes>
        {Rute.web.map((r) => (
          // console.log(r)
          <Route
            exact
            key={r.path}
            path={`${r.path}/*`}
            element={r.component}
          />
        ))}
        <Route path={"/*"} element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
