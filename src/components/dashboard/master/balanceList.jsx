import React, { useState, useEffect } from 'react'
import Modal from '../../site/modal'

let Array = []
const balanceTotal = (list) => {
  // console.log('child', child)
  let arr = {}
  let gr = {}
  let x = 0
  // console.log(child)
  if (list.child.length > 0) {
    for (let i = 0; i < list.child.length; i++) {
      const element = parseInt(list.child[i].total)
      x += element
    }
    // console.log('for', x)
    arr = { ...list, total: x }
    Array = arr
    // console.log('x', Array)
    return `${x}.00`
  }
}
function BalanceList({ list, btn }) {
  // const list = coaTotal(lists)
  const [data, setData] = useState({ vis: false, toggle: false })
  const [vis, setVis] = useState({ modal: false })
  const nestedCoa = (list.child || []).map((d) => {
    return <BalanceList key={d.number} list={d} type="child" btn={btn} />
  })

  const handleClose = (e) => {
    setVis({ ...vis, modal: false })
  }
  const handleAddChild = (e) => {
    setVis({ ...vis, modal: true, value: 1 })
  }
  const handleEdit = (e) => {
    setVis({ ...vis, modal: true, value: 2 })
  }
  const handleDelete = (e) => {
    setVis({ ...vis, modal: true, value: 3 })
  }

  return (
    <>
      {/* {console.log(list)} */}

      <div
        style={{ paddingLeft: '20px', marginTop: '5px' }}
        onMouseOver={() => setData({ ...data, toggle: true })}
        onMouseLeave={() => setData({ ...data, toggle: false })}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            margin: '0 0 2px 0',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              width: '45%',
            }}
          >
            {list.is_group === '1' ? (
              <i className="bi bi-folder" style={{ marginRight: '10px' }}></i>
            ) : (
              <i className="bi bi-file" style={{ marginRight: '10px' }}></i>
            )}
            <div style={{ color: 'white' }}>
              {list.number} - {list.name}
            </div>
          </div>
          <div
            className="col-md-6"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '45%',
                color: 'white',
              }}
            >
              {list.debit.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '45%',
                color: 'white',
              }}
            >
              {list.credit.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            </div>
          </div>
        </div>
        {nestedCoa}
      </div>
      {list.parent === '0' && (
        <div className="w-100" style={{ height: '15px' }}></div>
      )}
    </>
  )
}
export default BalanceList
