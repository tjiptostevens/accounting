import React, { useState } from "react";
import useFetch from "./useFetch";

const AddCoa = ({ list }) => {
  const { data: coa } = useFetch("getcoa.php");
  const [data, setData] = useState("");
  const handleChange = (e) => {
    console.log(`${[e.target.name]}`, e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="modal_title">
        <b>Add Chart Of Account</b>
      </div>
      {JSON.stringify(data)} <br />
      {/* {JSON.stringify(coa)} */}
      <div className="modal_content">
        {/* Account Number */}
        <div
          className="row col-md-12"
          style={{ margin: "0px", padding: "0px" }}
        >
          <label className="label_title">
            Account Number <span className="text-danger">*</span>
          </label>
          <input
            required
            onChange={handleChange}
            type="text"
            className="form-control mb-2"
            value={data.number}
            name="number"
            id="number"
          />
        </div>
        {/* Account Name */}
        <div
          className="row col-md-12"
          style={{ margin: "0px", padding: "0px" }}
        >
          <label className="label_title">
            Account Name <span className="text-danger">*</span>
          </label>
          <input
            required
            onChange={handleChange}
            type="text"
            className="form-control mb-2"
            value={data.name}
            name="name"
            id="name"
          />
        </div>
        {/* Group */}
        <div
          className="row col-md-12 mb-2"
          style={{
            margin: "0px",
            padding: "0px",
            flexWrap: "nowrap",
            alignItems: "center",
          }}
        >
          <input
            className="modal-check"
            type="checkbox"
            name="is_group"
            onClick={() =>
              setData({
                ...data,
                is_group: !data.is_group,
              })
            }
            // onChange={handleChange}
          />
          <label className="label_title" style={{ paddingLeft: "15px" }}>
            is Group
          </label>
        </div>
        {/* Parent Name */}
        <div
          className="row col-md-12 mb-5"
          style={{ margin: "0px", padding: "0px" }}
        >
          <label className="label_title">
            Parent Name <span className="text-danger">*</span>
          </label>
          <select
            className="form-select"
            name="parent"
            id="parent"
            onChange={handleChange}
          >
            {data.parent ? "" : <option value="null">Select Parent</option>}
            <option value="0">Root Parent</option>
            {coa &&
              coa
                .filter((e) => e.is_group === "1")
                .map((e) => (
                  <option value={e.number}>
                    {e.number} - {e.name}
                  </option>
                ))}
          </select>
        </div>
        <button className="btn btn-primary">Save</button>{" "}
        <button className="btn btn-warning">Cancel</button>
      </div>
    </>
  );
};

export default AddCoa;
