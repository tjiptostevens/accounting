import React, { useState, useMemo } from 'react'
import useFetch from '../useFetch'
import ReportTable from './reportTable'

const BalanceSheet = () => {
  const { data: coa } = useFetch('getcoav2.php')

  let assets = 0
  let liability = 0
  let equity = 0
  coa?.forEach((element) => {
    if (element.type === 'Assets') {
      assets += parseFloat(element.total)
    } else if (element.type === 'Liability') {
      liability += parseFloat(element.total)
    } else if (element.type === 'Equity') {
      equity += parseFloat(element.total)
    }
  })
  let assetsFill = useMemo(() => {
    return (
      coa &&
      coa
        // .sort((a, b) => (a.name > b.name ? 1 : -1))
        .filter((d) => d.type === 'Assets')
    )
  }, [coa])
  let liabilityFill = useMemo(() => {
    return (
      coa &&
      coa
        // .sort((a, b) => (a.name > b.name ? 1 : -1))
        .filter((d) => d.type === 'Liability')
    )
  }, [coa])
  let equityFill = useMemo(() => {
    return (
      coa &&
      coa
        // .sort((a, b) => (a.name > b.name ? 1 : -1))
        .filter((d) => d.type === 'Equity')
    )
  }, [coa])
  return (
    <>
      {/* Component Title */}
      <div
        className="w-100"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div className=" __content_title">Balance Sheet</div>
        {/* add User + search */}
        <div className=" __search_bar">
          {/* <div
          className="col"
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <input
            className="form-control m-1"
            type="search"
            name="search"
            placeholder="Search by text"
            onChange={handleChange}
          />
        </div> */}
          <button
            className="btn btn-primary m-1"
            onClick={() => window.print()}
            style={{ minWidth: 'fit-content' }}
          >
            <i className="bi bi-arrow-right-square"></i>
          </button>
          <button
            className="btn btn-primary m-1"
            onClick={() => window.print()}
            style={{ minWidth: 'fit-content' }}
          >
            <i className="bi bi-printer"></i>
          </button>
        </div>
      </div>
      <hr style={{ margin: '0' }} />
      <div className="w-100" style={{ height: '25px' }}></div>
      <div
        className="row"
        style={{
          margin: '15px 0',
          padding: '5px',
        }}
      >
        <div
          className="row"
          style={{
            margin: '0',
            padding: '25px 15px',
            color: 'white',
            borderRadius: '5px',
            textAlign: 'center',
            background: '#212529',
          }}
        >
          <div className="col-md-3">
            <div>
              <p>Total Assets This Period</p>
              <h5
                style={assets < 0 ? { color: 'crimson' } : { color: 'white' }}
              >
                Rp.{' '}
                {assets.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') +
                  '.00'}
              </h5>
            </div>
          </div>
          <div
            className="col-md-1"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                margin: 'auto',
                border: '1px solid white',
                width: '25px',
                height: '25px',
                fontFamily: 'monospace',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'gold',
              }}
            >
              <b>*</b>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <p>Total Liability This Period</p>
              <h5
                style={
                  liability < 0 ? { color: 'crimson' } : { color: 'white' }
                }
              >
                Rp.{' '}
                {liability
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + '.00'}
              </h5>
            </div>
          </div>
          <div
            className="col-md-1"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                margin: 'auto',
                border: '1px solid white',
                width: '25px',
                height: '25px',
                fontFamily: 'monospace',
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#2490ef',
              }}
            >
              <b>*</b>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <p>Total Equity This Period</p>
              <h5
                style={equity < 0 ? { color: 'crimson' } : { color: 'white' }}
              >
                Rp.{' '}
                {equity.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') +
                  '.00'}
              </h5>
            </div>
          </div>
        </div>
      </div>
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
          {assetsFill && <ReportTable data={assetsFill} />}
        </div>
        <div
          className="row col-md-12"
          style={{
            color: 'white',
            textAlign: 'left',
            padding: '7px 0',
            fontWeight: '600',
          }}
        >
          {liabilityFill && <ReportTable data={liabilityFill} />}
        </div>
        <div
          className="row col-md-12"
          style={{
            color: 'white',
            textAlign: 'left',
            padding: '7px 0',
            fontWeight: '600',
          }}
        >
          {equityFill && <ReportTable data={equityFill} />}
        </div>
        TOTAL HUTANG + EQUITY
      </div>
    </>
  )
}

export default BalanceSheet
