import React, { useState } from "react";
import CoaList from "./coaList";
import CoaLists from "./coaLists";
import useFetch from "./useFetch";

const Coa = () => {
  const { data: coa } = useFetch("getcoa.php");

  return (
    <>
      <div className="w-100">
        <p className="__content_title">Chart of Account</p>
        <hr />
        {/* {coa && coa ? (
          <>
            <button onClick={handleTree}>Load Chart of Account</button>
            <div>
              {data && data.coa.map((d) => <CoaList key={d.number} list={d} />)}
            </div>
          </>
        ) : (
          ""
        )} */}
        <div className="">{coa && <CoaLists list={coa} />}</div>
      </div>
    </>
  );
};

export default Coa;
