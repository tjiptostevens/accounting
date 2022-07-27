import React, { useState, useEffect } from 'react'

const Dash = () => {
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
          className="col-md-3 col-6 card bg-dark"
          style={{ margin: '0', padding: '0', borderRadius: '5px' }}
        >
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
            <div>500.000.000,-</div>
          </div>
        </div>
        <div
          className="col-md-3 col-6 card bg-dark"
          style={{ margin: '0', padding: '0', borderRadius: '5px' }}
        >
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
            <div>500.000.000,-</div>
          </div>
        </div>
        <div
          className="col-md-3 col-6 card bg-dark"
          style={{ margin: '0', padding: '0', borderRadius: '5px' }}
        >
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
            <div>500.000.000,-</div>
          </div>
        </div>
        <div
          className="col-md-3 col-6 card bg-dark"
          style={{ margin: '0', padding: '0', borderRadius: '5px' }}
        >
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
            <div>500.000.000,-</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dash
