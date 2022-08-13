import React, { useState, useEffect } from 'react'
import AddCoa from '../modal/addCoa'
import DeleteCoa from '../modal/deleteCoa'
import EditCoa from '../modal/editCoa'

let Array = []
const coaTotal = (list) => {
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
function CoaList({ list }) {
  // const list = coaTotal(lists)
  const [data, setData] = useState({ vis: false, toggle: false })
  const nestedCoa = (list.child || []).map((d) => {
    return <CoaList key={d.number} list={d} type="child" />
  })
  // useEffect(() => {
  //   coaTotal(list)
  //   // eslint-disable-next-line
  // }, [])
  const handleClose = (e) => {
    setData({ ...data, vis: false })
  }
  const handleAddChild = (e) => {
    setData({ ...data, vis: true, value: 1 })
  }
  const handleEdit = (e) => {
    setData({ ...data, vis: true, value: 2 })
  }
  const handleDelete = (e) => {
    setData({ ...data, vis: true, value: 3 })
  }

  return (
    <>
      {/* {console.log(list)} */}
      <div
        className="modal-window"
        style={{ display: { true: 'block', false: 'none' }[data.vis] }}
      >
        <div
          className="row col-md-6"
          style={{ maxHeight: '95vh', overflowY: 'auto' }}
        >
          <div
            className="modal-close"
            onClick={() => setData({ ...data, vis: !data.vis })}
          >
            <i
              className="bi bi-x-lg"
              style={{
                textAlign: 'center',
                width: '60px',
                height: 'auto',
              }}
            ></i>
          </div>
          <div
            className="w-100 justify-content-around"
            style={{
              textAlign: 'justify',
              height: 'auto',
            }}
          >
            {
              {
                1: <AddCoa data={list} handleClose={handleClose} />,
                2: <EditCoa data={list} handleClose={handleClose} />,
                3: <DeleteCoa data={list} handleClose={handleClose} />,
              }[data.value]
            }
          </div>
        </div>
      </div>
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
              width: '50%',
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
            {data.toggle && (
              <div
                className="btn-group btn-group-toggle"
                style={{ padding: '0 10px' }}
              >
                <button
                  className="btn btn-sm btn-light"
                  style={{ padding: '2px 7px', fontSize: '10px' }}
                  onClick={handleAddChild}
                >
                  Add Child
                </button>
                <button
                  className="btn btn-sm btn-warning"
                  style={{ padding: '2px 7px', fontSize: '10px' }}
                  onClick={handleEdit}
                >
                  Edit
                </button>
                {list.parent === '0' ? (
                  ''
                ) : (
                  <button
                    className="btn btn-sm btn-danger"
                    style={{ padding: '2px 7px', fontSize: '10px' }}
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                )}
              </div>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '50%',
            }}
          >
            {list.child.length > 0
              ? coaTotal(list)?.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
              : list.total.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}{' '}
            Rp
          </div>
        </div>
        {nestedCoa}
      </div>
    </>
  )
}
export default CoaList
