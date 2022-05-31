import React, { useState, useMemo } from "react";
import AddJournal from "./addJournal";
import useFetch from "./useFetch";

const Journal = () => {
  const { data: journal } = useFetch("getjournal.php");
  const [data, setData] = useState({ vis: false });
  //   const elementRef = useRef(null);
  const handleClose = (e) => {
    setData({ ...data, vis: false });
    window.location.reload();
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
        // .sort((a, b) => (a.name > b.name ? 1 : -1))
        .filter(
          (d) =>
            (!searchRegex ||
              searchRegex.test(d.name + d.title + d.type + d.posting_date)) &&
            (!data.search_type || d.type === data.search_type) &&
            (!data.end_date || d.posting_date === data.end_date)
        )
    );
  }, [journal, data.search, data.search_type, data.end_date]);
  return (
    <>
      {/* Modal Window */}
      <div
        className="__modal-window"
        style={{
          display: { true: "block", false: "none" }[data.vis],
          margin: "0px",
          padding: "0px",
        }}
      >
        <div
          className="row col-md-7 col-11"
          style={{
            maxHeight: "95vh",
            overflowY: "auto",
            margin: "0px",
            padding: "0px",
          }}
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
              placeholder="Type here search"
              onChange={handleChange}
            />
          </span>
          <span style={{ display: "flex", alignItems: "center" }}>
            {/* <input
              list="type"
              className="col-md-3"
              style={{ padding: "5px 10px", border: "none" }}
              type="text"
              name="search_type"
              onChange={handleChange}
            /> */}
            <select
              className="form-control m-1"
              name="search_type"
              onChange={handleChange}
              id="type"
            >
              <option value=""></option>
              <option value="Penjualan Tracking Kredit">
                Penjualan Tracking Kredit
              </option>
              <option value="Penjualan Container Kredit">
                Penjualan Container Kredit
              </option>
              <option value="Pembelian Kredit">Pembelian Kredit</option>
              <option value="Penerimaan Kas">Penerimaan Kas</option>
              <option value="Pembayaran Kas">Pembayaran Kas</option>
              <option value="Journal Umum">Journal Umum</option>
            </select>
          </span>
          <span style={{ display: "flex", alignItems: "center" }}>
            {/* <input
              className="form-control m-1"
              type="date"
              name="start_date"
              placeholder="Type to search"
              onChange={handleChange}
            /> */}
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
      <div className="row col-md-12" style={{ paddingLeft: "25px" }}>
        <div
          className="row col-md-12"
          style={{
            color: "white",
            textAlign: "left",
            padding: "7px 0",
            fontWeight: "600",
          }}
        >
          <div className="col-md-2">Number</div>
          <div className="col-md-3">Title</div>
          <div className="col-md-2">Type</div>
          <div className="col-md-2" style={{ textAlign: "center" }}>
            Debit
          </div>
          <div className="col-md-2" style={{ textAlign: "center" }}>
            Credit
          </div>
          <div className="col-md-1"></div>
        </div>
        <hr />
      </div>
      <div className="row col-md-12" style={{ paddingLeft: "25px" }}>
        {journalFil &&
          journalFil.map((e, i) => (
            <div key={i}>
              <div
                className="row col-md-12"
                style={{
                  color: "white",
                  textAlign: "left",
                  fontWeight: "100",
                }}
              >
                <div className="col-md-2">{e.name}</div>
                <div className="col-md-3">{e.title}</div>
                <div className="col-md-2">{e.type}</div>
                <div className="col-md-2" style={{ textAlign: "right" }}>
                  {Number(e.total_debit)
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&.")}
                </div>
                <div className="col-md-2" style={{ textAlign: "right" }}>
                  {Number(e.total_credit)
                    .toFixed(2)
                    .replace(/\d(?=(\d{3})+\.)/g, "$&.")}
                </div>
                <div
                  className="col-md-1"
                  style={{ textAlign: "right" }}
                  onMouseOver={() => setData({ ...data, i: i, det: true })}
                  onMouseOut={() => setData({ ...data, i: i, det: false })}
                >
                  {data.i === i && data.det ? (
                    <i
                      className="bi bi-plus-square-fill"
                      style={{ color: "white" }}
                    ></i>
                  ) : (
                    <i className="bi bi-plus-square"></i>
                  )}
                </div>
              </div>
              <div
                className="row-md-12"
                style={{
                  color: "white",
                  textAlign: "left",
                  fontWeight: "100",
                }}
              ></div>
              <hr />
            </div>
          ))}
      </div>
    </>
  );
};

export default Journal;
