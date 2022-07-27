import React, { useState, useMemo } from 'react'
import AddCustomer from '../modal/addCustomer'
import useFetch from '../../useFetch'

const Customer = () => {
  const { data: customer } = useFetch('getcustomer.php')
  const [data, setData] = useState({ vis: false })
  const handleClose = (e) => {
    setData({ ...data, vis: false })
  }
  const handleChange = (e) => {
    console.log(`${[e.target.name]}`, e.target.value)
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }
  const handleEdit = (e) => {
    setData({ ...data, vis: true, value: 2 })
  }
  const handleDelete = (e) => {
    setData({ ...data, vis: true, value: 3 })
  }
  let customerFil = useMemo(() => {
    const searchRegex = data.search && new RegExp(`${data.search}`, 'gi')
    return (
      customer &&
      customer
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .filter(
          (d) =>
            !searchRegex ||
            searchRegex.test(d.name + d.mobile + d.email + d.address),
        )
    )
  }, [customer, data.search])
  return (
    <>
      {/* Modal Window */}
      <div
        className="__modal-window"
        style={{
          display: { true: 'block', false: 'none' }[data.vis],
          margin: '0px',
          padding: '0px',
        }}
      >
        <div
          className="row col-md-6 col-11"
          style={{
            maxHeight: '95vh',
            overflowY: 'auto',
            margin: '0px',
            padding: '0px',
          }}
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
                1: <AddCustomer handleClose={handleClose} />,
                2: '',
              }[data.value]
            }
          </div>
        </div>
      </div>

      {/* Component Title */}
      <div
        className="w-100"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <span className="__content_title">Customer Data</span>
        {/* add User + search */}
        <span style={{ display: 'flex' }}>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <input
              className="form-control"
              type="search"
              name="search"
              placeholder="Type to search"
              onChange={handleChange}
            />
          </span>
          <button
            className="btn btn-primary m-1"
            onClick={() => setData({ ...data, vis: !data.vis, value: 1 })}
          >
            <i className="bi bi-plus"></i>
            New
          </button>
        </span>
      </div>
      <hr style={{ margin: '0' }} />
      {/* <div className="col-md-12">{JSON.stringify(customer)}</div> */}

      <div className="w-100" style={{ height: '25px' }}></div>
      <div className="row col-md-12" style={{ paddingLeft: '25px' }}>
        <div
          className="row col-md-12"
          style={{
            color: 'white',
            textAlign: 'left',
            padding: '7px 0',
            fontWeight: '600',
          }}
        >
          <div style={{ width: '20%' }}>Name</div>
          <div style={{ width: '11%' }}>Status</div>
          <div style={{ width: '12%' }}>Mobile</div>
          <div style={{ width: '22%' }}>Email</div>
          <div style={{ width: '25%' }}>Address</div>
          <div style={{ width: '10%' }}></div>
        </div>
        <hr />
      </div>
      <div
        className="row col-md-12"
        style={{ paddingLeft: '25px', maxHeight: '70vh', overflowY: 'auto' }}
      >
        {customerFil &&
          customerFil.map((d, i) => (
            <div key={i} className="row col-md-12">
              <div style={{ width: '20%' }}>{d.name}</div>

              {
                {
                  0: (
                    <div
                      // ref={elementRef}
                      className="text-warning"
                      style={{ width: '11%' }}
                    >
                      <i className="bi bi-check-all text-warning"></i>Inactive
                    </div>
                  ),
                  1: (
                    <div
                      // ref={elementRef}
                      className="text-success"
                      style={{ width: '11%' }}
                    >
                      <i className="bi bi-check-all text-success"></i>Active
                    </div>
                  ),
                }[d.status]
              }

              <div style={{ width: '12%' }}>{d.mobile}</div>
              <div style={{ width: '22%' }}>{d.email}</div>
              <div style={{ width: '25%' }}>{d.address}</div>

              <div
                className="btn-group btn-group-toggle"
                style={{ padding: '0 10px', width: '10%' }}
              >
                <button
                  className="btn btn-sm btn-warning"
                  style={{ padding: '2px 7px', fontSize: '10px' }}
                  onClick={handleEdit}
                >
                  Edit
                </button>

                <button
                  className="btn btn-sm btn-danger"
                  style={{ padding: '2px 7px', fontSize: '10px' }}
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
              <hr />
            </div>
          ))}
      </div>
    </>
  )
}

export default Customer
