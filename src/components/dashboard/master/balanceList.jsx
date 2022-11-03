import React, { useState, useEffect } from "react";
import Modal from "../../site/modal";

const mapChild = (list) => {
  let arr = list;
  let c = list.credit;
  let d = list.debit;
  let x = 0;
  try {
    if (arr.child > 0) {
      function mapEach(arr) {
        arr.child.map((e) => (
          <>
            {e.debit - e.credit}
            <br />
            {e.child > 0 ? mapEach(e.child) : ""}
          </>
        ));
      }
      return mapEach(arr);
    }
    // x = d - c
    // return x
  } catch (error) {
    console.log(error);
  }
};

const checkChild = (list) => {
  let arr = list;
  let c = list.credit;
  let d = list.debit;
  let x = 0;
  try {
    if (arr.child > 0) {
      function childEach(arr) {
        arr.child.forEach((e) => {
          c += e.credit;
          d += e.debit;
          if (e.child > 0) {
            childEach(e.child);
          }
        });
      }
      childEach(arr);
    }
    x = d - c;
    return x;
  } catch (error) {
    console.log(error);
  }
};

const grandTotal = (list) => {
  try {
    let y = "";
    let x = 0;
    if (list.child.length > 0) {
      y = list.name;
      let z = 0;
      let deb,
        cred = 0;
      deb = parseFloat(list.debit);
      cred = parseFloat(list.credit);
      list.child.forEach((e) => {
        if (e.type === "Assets" || e.type === "Expense") {
          x = x + (parseFloat(e.debit) + deb - (cred + parseFloat(e.credit)));
        } else {
          x = x + (cred + parseFloat(e.credit) - (parseFloat(e.debit) + deb));
        }
      });
    }
    // console.log(y, x)

    return `${x}.00`;
  } catch (error) {
    console.log(error);
  }
};
function BalanceList({ list, btn }) {
  // const list = coaTotal(lists)
  const [data, setData] = useState({ vis: false, toggle: false });
  const [vis, setVis] = useState({ modal: false });
  const nestedCoa = (list.child || []).map((d) => {
    return <BalanceList key={d.number} list={d} type="child" btn={btn} />;
  });
  const nestTotal = (list) => {
    let c = parseFloat(list.credit);
    let d = parseFloat(list.debit);
    let t = 0;
    const childTotal = (li) => {
      (li.child || []).map((e) =>
        e.type === "Assets" || e.type === "Expense"
          ? (t = d + parseFloat(e.debit) - (c + parseFloat(e.credit)))
          : (t = c + parseFloat(e.credit) - (d + parseFloat(e.debit)))
      );
    };
    if (list.child) {
      childTotal(list);
    }

    return t;
  };
  const nestedTotal = (list.child || []).map((e) => {
    let c = [];
    let d = [];
    let t = 0;
    let a = [];
    return (
      <>
        {e.type === "Assets" || e.type === "Expense"
          ? (t = d + parseFloat(e.debit) - (c + parseFloat(e.credit)))
          : (t = c + parseFloat(e.credit) - (d + parseFloat(e.debit)))}
        {(e.child || []).map((f) => {
          return (
            <>
              {f.type === "Assets" || f.type === "Expense"
                ? f.debit - f.credit
                : f.credit - f.debit}
              {(f.child || []).map((g) => {
                return (
                  <>
                    {g.type === "Assets" || g.type === "Expense"
                      ? g.debit - g.credit
                      : g.credit - g.debit}

                    {(g.child || []).map((h) => {
                      return (
                        <>
                          {h.type === "Assets" || h.type === "Expense"
                            ? h.debit - h.credit
                            : h.credit - h.debit}

                          {(h.child || []).map((i) => {
                            return (
                              <>
                                {i.type === "Assets" || i.type === "Expense"
                                  ? i.debit - i.credit
                                  : i.credit - i.debit}

                                {(i.child || []).map((j) => {
                                  return (
                                    <>
                                      {j.type === "Assets" ||
                                      j.type === "Expense"
                                        ? j.debit - j.credit
                                        : j.credit - j.debit}

                                      {(j.child || []).map((k) => {
                                        return (
                                          <>
                                            {k.type === "Assets" ||
                                            k.type === "Expense"
                                              ? k.debit - k.credit
                                              : k.credit - k.debit}
                                          </>
                                        );
                                      })}
                                    </>
                                  );
                                })}
                              </>
                            );
                          })}
                        </>
                      );
                    })}
                  </>
                );
              })}
            </>
          );
        })}
      </>
    );
  });

  const handleClose = (e) => {
    setVis({ ...vis, modal: false });
  };
  const handleAddChild = (e) => {
    setVis({ ...vis, modal: true, value: 1 });
  };
  const handleEdit = (e) => {
    setVis({ ...vis, modal: true, value: 2 });
  };
  const handleDelete = (e) => {
    setVis({ ...vis, modal: true, value: 3 });
  };

  return (
    <>
      {/* {console.log(list)} */}

      <div
        style={{ paddingLeft: "20px", marginTop: "5px" }}
        onMouseOver={() => setData({ ...data, toggle: true })}
        onMouseLeave={() => setData({ ...data, toggle: false })}
      >
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
              width: "45%",
            }}
          >
            {list.is_group === "1" ? (
              <i className="bi bi-folder" style={{ marginRight: "10px" }}></i>
            ) : (
              <i className="bi bi-file" style={{ marginRight: "10px" }}></i>
            )}
            <div style={{ color: "white" }}>
              {list.number} - {list.name}
            </div>
          </div>
          <div
            className="col-md-6"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "45%",
                color: "white",
              }}
            >
              {list.debit === "0.00"
                ? "-"
                : list.debit.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "45%",
                color: "white",
              }}
            >
              {list.credit === "0.00"
                ? "-"
                : list.credit.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                width: "45%",
                color: "white",
              }}
            >
              {JSON.stringify(list)}
              {nestedTotal}
              <br />
              <br />
              {/* {mapChild(list)} | */}
              {/* {grandTotal(list).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")} */}
              {/* {list.total === '0.00' ? '-' : list.total} */}
            </div>
          </div>
        </div>
        {nestedCoa}
      </div>
      {list.parent === "0" && (
        <div className="w-100" style={{ height: "15px" }}></div>
      )}
    </>
  );
}
export default BalanceList;
