import React, { useState } from "react";

const DeleteCoa = (props) => {
  const [data, setData] = useState({
    is_group: props.data.is_group === "0" ? false : true,
    required: true,
    parent: props.data.parent,
    number: props.data.number,
    name: props.data.name,
    type: props.data.type,
  });
  const handleDelete = (e) => {
    console.log(e);
  };
  const handleClose = (e) => {
    e.preventDefault();
    console.log(data);
    setData({ ...data, required: !data.required });
    props.handleClose(e);
  };
  return (
    <>
      <div className="modal_title">
        <b>Delete Confirmation</b>
      </div>
      <div className="modal_content">
        <p>This account will be deleted. Please Check</p>
        <p>
          <b>
            {" "}
            {data.number} - {data.name}
          </b>
        </p>
      </div>
      <div>
        <p>{data.message}</p>
      </div>
      <div>
        <p>
          <small>
            Akun tidak dapat di hapus jika sudah digunakan dalam transaksi.
          </small>
        </p>
      </div>
      {/* Button */}
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
      <button className="btn btn-primary" onClick={handleClose}>
        Cancel
      </button>
    </>
  );
};

export default DeleteCoa;
