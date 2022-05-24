import React from "react";

function CoaList({ list }) {
  const nestedCoa = (list.child || []).map((d) => {
    return <CoaList key={d.number} list={d} type="child" />;
  });

  return (
    <div style={{ paddingLeft: "20px", marginTop: "5px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "0 0 2px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            width: "50%",
          }}
        >
          {list.is_group === "1" ? (
            <i className="bi bi-folder"></i>
          ) : (
            <i className="bi bi-file"></i>
          )}
          <div style={{ color: "white" }}>
            {list.number} - {list.name}
          </div>
        </div>
        <div
          style={{ display: "flex", justifyContent: "flex-end", width: "50%" }}
        >
          Rp 0.00
        </div>
      </div>
      {nestedCoa}
    </div>
  );
}
export default CoaList;
