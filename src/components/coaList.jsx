import React from "react";

function createTree(list) {
  var map = {},
    node,
    roots = [],
    i;

  for (i = 0; i < list.length; i += 1) {
    map[list[i].number] = i; // initialize the map
    list[i].child = []; // initialize the children
  }

  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parent !== "0") {
      // if you have dangling branches check that map[node.parent] exists
      list[map[node.parent]].child.push(node);
    } else {
      roots.push(node);
    }
  }

  //  setData({ ...data, roots });
  return roots;
}

function CoaList({ list }) {
  const nestedCoa = (list.child || []).map((d) => {
    return <CoaList key={d.number} list={d} type="child" />;
  });

  return (
    <div style={{ marginLeft: "20px", marginTop: "5px" }}>
      <div style={{ display: "flex", margin: "0 0 2px 0" }}>
        {list.is_group === "1" ? (
          <i className="bi bi-folder"></i>
        ) : (
          <i className="bi bi-file"></i>
        )}
        <div style={{ color: "white" }}>
          {list.number} - {list.name}
        </div>
      </div>
      {nestedCoa}
    </div>
  );
}
export default CoaList;
