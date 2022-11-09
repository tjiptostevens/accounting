import React from 'react'
import CoaList from './coaList'

const CoaLists = ({ list, btn = false, equiChange = 0 }) => {
  function createTree(list) {
    let map = {},
      node,
      roots = [],
      i

    for (i = 0; i < list.length; i += 1) {
      map[list[i].number] = i // initialize the map
      list[i].child = [] // initialize the children
    }

    for (i = 0; i < list.length; i += 1) {
      node = list[i]
      if (node.parent !== '0') {
        // if you have dangling branches check that map[node.parent] exists
        list[map[node.parent]].child.push(node)
      } else {
        roots.push(node)
      }
    }
    return roots
  }
  const coaTree = createTree(list)
  return coaTree.map((d) => (
    <CoaList key={d.number} list={d} btn={btn} equiChange={equiChange} />
  ))
}

export default CoaLists
