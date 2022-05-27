import React, { useState, useMemo } from "react";
import AddJournal from "./addJournal";
import useFetch from "./useFetch";

const Journal = () => {
  const { data: journal } = useFetch("getjournal.php");
  const [data, setData] = useState({ vis: false });
  //   const elementRef = useRef(null);
  const handleClose = (e) => {
    setData({ ...data, vis: false });
  };
  const handleChange = (e) => {
    console.log(`${[e.target.name]}`, e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  let journalFil = useMemo(() => {
    const searchRegex = data.search && new RegExp(`${data.search}`, "gi");
    return (
      journal &&
      journal
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .filter(
          (d) =>
            !searchRegex ||
            searchRegex.test(d.name + d.mobile + d.email + d.address)
        )
    );
  }, [journal, data.search]);
  return (
    <>
      {/* Modal Window */}
      <div
        className="__modal-window"
        style={{ display: { true: "block", false: "none" }[data.vis] }}
      >
        <div
          className="row col-md-12"
          style={{ maxHeight: "95vh", overflowY: "auto" }}
        >
          <div
            className="modal-close"
            onClick={() => setData({ ...data, vis: !data.vis })}
          >
            <i
              className="bi bi-x-lg"
              style={{
                textAlign: "center",
                width: "60px",
                height: "auto",
              }}
            ></i>
          </div>
          <div
            className="w-100 justify-content-around"
            style={{
              textAlign: "justify",
              height: "auto",
            }}
          >
            {
              {
                1: <AddJournal handleClose={handleClose} />,
                2: "",
              }[data.value]
            }
          </div>
        </div>
      </div>

      {/* Component Title */}
      <div
        className="w-100"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <span className="__content_title">Journal Entries</span>
        {/* add User + search */}
        <span style={{ display: "flex" }}>
          <span style={{ display: "flex", alignItems: "center" }}>
            <input
              className="form-control m-1"
              type="search"
              name="search"
              placeholder="Type to search"
              onChange={handleChange}
            />
          </span>
          <span style={{ display: "flex", alignItems: "center" }}>
            <input
              className="form-control m-1"
              type="date"
              name="start_date"
              placeholder="Type to search"
              onChange={handleChange}
            />
            <input
              className="form-control m-1"
              type="date"
              name="end_date"
              placeholder="Type to search"
              onChange={handleChange}
            />
          </span>
          <button
            className="btn btn-primary m-1"
            onClick={() => setData({ ...data, vis: !data.vis, value: 1 })}
          >
            <i className="bi bi-plus"></i>
            Add New Entries
          </button>
        </span>
      </div>

      <hr style={{ margin: "0" }} />
      <div className="w-100" style={{ height: "25px" }}></div>
      <div className="row col-md-12"></div>
    </>
  );
};

export default Journal;
