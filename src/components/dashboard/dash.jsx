import React, { useState, useEffect } from 'react'
import useFetch from '../useFetch'

const Dash = () => {
  const { data: coa } = useFetch('getcoav2.php')

  return (
    <>
      {/* Component Title */}
      <div
        className="w-100"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div className=" __content_title">Dashboard</div>
        <div className="" style={{ display: 'flex' }}>
          <div
            className="col"
            style={{
              display: 'flex',
              alignItems: 'center',
              visibility: 'hidden',
            }}
          >
            <button className="btn btn-primary m-1">
              <i className="bi bi-plus"></i>
              New
            </button>
          </div>
        </div>
      </div>
      <hr style={{ margin: '0' }} />
      <div
        className="row"
        style={{
          margin: '15px 0',
          padding: '0',
        }}
      >
        <div
          className="col-md-3 col-6"
          style={{ margin: '0', padding: '5px', borderRadius: '5px' }}
        >
          <div className="card bg-dark">
            <div className="card-header" style={{ color: 'white' }}>
              <b>CASH</b>
            </div>
            <div
              className="card-body"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                fontSize: '24px',
              }}
            >
              <div>Rp.</div>
              <div>
                {coa &&
                  coa
                    .filter((f) => f.number === '101-2')
                    .map((d) =>
                      d.total.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                    )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 col-6"
          style={{ margin: '0', padding: '5px', borderRadius: '5px' }}
        >
          <div className="card bg-dark">
            <div className="card-header" style={{ color: 'white' }}>
              <b>BANK</b>
            </div>
            <div
              className="card-body"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                fontSize: '24px',
              }}
            >
              <div>Rp.</div>
              <div>
                {coa &&
                  coa
                    .filter((f) => f.number === '101-1')
                    .map((d) =>
                      d.total.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                    )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 col-6"
          style={{ margin: '0', padding: '5px', borderRadius: '5px' }}
        >
          <div className="card bg-dark">
            <div className="card-header" style={{ color: 'white' }}>
              <b>RECEIVABLE</b>
            </div>
            <div
              className="card-body"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                fontSize: '24px',
              }}
            >
              <div>Rp.</div>
              <div>
                {coa &&
                  coa
                    .filter((f) => f.number === '101-3')
                    .map((d) =>
                      d.total.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                    )}
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-md-3 col-6"
          style={{ margin: '0', padding: '5px', borderRadius: '5px' }}
        >
          <div className="card bg-dark">
            <div className="card-header" style={{ color: 'white' }}>
              <b>PAYABLE</b>
            </div>
            <div
              className="card-body"
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                fontSize: '24px',
              }}
            >
              <div>Rp.</div>
              <div>
                {coa &&
                  coa
                    .filter((f) => f.number === '201-1')
                    .map((d) =>
                      d.total.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                    )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dash
