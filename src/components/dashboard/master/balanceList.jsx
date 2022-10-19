import React, { useState, useEffect } from 'react'
import Modal from '../../site/modal'

const checkChild = (list) => {
  let newArray = []

  function getAllId(arr, key) {
    arr.forEach(function (item) {
      for (let keys in item) {
        if (keys === key) {
          newArray.push(item[key])
        } else if (Array.isArray(item[keys])) {
          getAllId(item[keys], key)
        }
      }
    })
  }
  try {
    getAllId(list.child, 'credit')
  } catch (error) {
    console.log(error)
  }
}

const grandTotal = (list) => {
  try {
    let y = ''
    let x = 0
    if (list.child.length > 0) {
      y = list.name
      let z = 0
      let deb,
        cred = 0
      deb = parseFloat(list.debit)
      cred = parseFloat(list.credit)
      list.child.forEach((e) => {
        if (e.type === 'Assets' || e.type === 'Expense') {
          x = x + (parseFloat(e.debit) + deb - (cred + parseFloat(e.credit)))
        } else {
          x = x + (cred + parseFloat(e.credit) - (parseFloat(e.debit) + deb))
        }
      })
    }
    // console.log(y, x)

    return `${x}.00`
  } catch (error) {
    console.log(error)
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
              {list.debit === '0.00'
                ? '-'
                : list.debit.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '45%',
                color: 'white',
              }}
            >
              {list.credit === '0.00'
                ? '-'
                : list.credit.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '45%',
                color: 'white',
              }}
            >
              {checkChild(list)} |
              {grandTotal(list).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
              {/* {list.total === '0.00' ? '-' : list.total} */}
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
