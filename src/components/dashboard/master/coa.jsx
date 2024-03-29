import React, { useState } from 'react'
import CoaLists from './coaLists'
import useFetch from '../../useFetch'
import AddCoa from '../modal/addCoa'

const Coa = () => {
  const { data: coa } = useFetch('getcoav2.php')
  const [data, setData] = useState({ vis: false })
  const handleClose = (e) => {
    setData({ ...data, vis: false })
  }
  return (
    <>
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
                1: <AddCoa handleClose={handleClose} />,
                2: '',
              }[data.value]
            }
          </div>
        </div>
      </div>
      <div className="w-100">
        <div
          className="w-100"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <span className="__content_title">Chart of Account</span>
          <span style={{}}>
            <button className="btn btn-primary m-1">
              <i
                className="bi bi-file-earmark-diff"
                style={{ marginRight: '10px' }}
              ></i>
              Profit & Loss
            </button>
            <button className="btn btn-primary m-1">
              <i
                className="bi bi-file-earmark-medical"
                style={{ marginRight: '10px' }}
              ></i>
              Cash Flow
            </button>
            <button className="btn btn-primary m-1">
              <i
                className="bi bi-file-earmark-spreadsheet"
                style={{ marginRight: '10px' }}
              ></i>
              General Ledger
            </button>
            <button
              className="btn btn-primary m-1"
              onClick={() => setData({ ...data, vis: !data.vis, value: 1 })}
            >
              <i className="bi bi-plus" style={{ marginRight: '10px' }}></i>
              New
            </button>
          </span>
        </div>
        <hr style={{ margin: '0' }} />

        <div className="w-100" style={{ height: '25px' }}></div>
        <div
          className="row col-md-12"
          style={{
            padding: '0px 25px',
            height: '85vh',
            maxHeight: '85vh',
            overflowY: 'auto',
          }}
        >
          {coa && <CoaLists list={coa} />}
        </div>
      </div>
    </>
  )
}

export default Coa
