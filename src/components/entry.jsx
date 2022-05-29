import React, { useState } from "react";
import useFetch from "./useFetch";
import "./assets/css/form.css";
const Entry = (props, { data, i }) => {
  const { data: coa } = useFetch("getcoa.php");
  const [list, setList] = useState({
    idx: (props.i + 1).toString(),
    acc: "",
    party_type: "",
    party: "",
    debit: 0,
    credit: 0,
    delete: false,
  });
  const handleChange = (e) => {
    setList({ ...list, [e.target.name]: e.target.value });
    props.handleRow({ list, e });
  };
  return (
    <>
      {/* {console.log("entry", data)} */}
      {/* {console.log("entry", props)} */}
      {/* {console.log("entry", i)} */}
      {props.data.idx && (
        <div
          key={props.i}
          className="row col-md-12 "
          style={{
            margin: "0px",
            padding: "0px",
          }}
        >
          <div
            className="col-md-1"
            style={{ padding: "5px 10px", border: "none" }}
            // onClick={() => setList({ ...list, delete: !list.delete })}
          >
            {/* <i
              className={list.delete ? "bi bi-x-square-fill" : "bi bi-square"}
              style={list.delete ? { color: "red" } : { color: "white" }}
            ></i>{" "} */}
            {props.data.idx}
          </div>
          <input
            list="coa"
            className="col-md-3 inp-number"
            style={{ padding: "5px 10px", border: "none" }}
            type="number"
            name="acc"
            id={props.i}
            onChange={handleChange}
            onBlur={handleChange}
          />
          <datalist id="coa">
            {coa &&
              coa
                .filter((e) => e.parent !== "0")
                .map((e) => (
                  <option value={e.number}>
                    {e.number} - {e.name}
                  </option>
                ))}
          </datalist>
          <input
            type="text"
            className="col-md-2"
            style={{ padding: "5px 10px", border: "none" }}
            name="party_type"
            id={props.i}
            onChange={handleChange}
            onBlur={handleChange}
            // value={e.party_type}
          />
          <input
            type="text"
            className="col-md-2"
            style={{ padding: "5px 10px", border: "none" }}
            name="party"
            id={props.i}
            onChange={handleChange}
            onBlur={handleChange}
            // value={e.party}
          />
          <input
            type="number"
            className="col-md-2 inp-number"
            style={{ padding: "5px 10px", border: "none" }}
            name="debit"
            id={props.i}
            onChange={handleChange}
            onBlur={handleChange}
            pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}"
            // value={e.debit}
          />
          <input
            type="number"
            className="col-md-2 inp-number"
            style={{ padding: "5px 10px", border: "none" }}
            name="credit"
            id={props.i}
            onChange={handleChange}
            onBlur={handleChange}
            // value={e.credit}
          />

          {/* <p>{JSON.stringify(list)}</p> */}
        </div>
      )}
    </>
  );
};

export default Entry;
