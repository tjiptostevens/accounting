import React, { useState, useMemo } from 'react'
import useFetch from '../useFetch'

const CashFlow = () => {
  const { data: journal } = useFetch('getjournal.php')
  const [data, setData] = useState({ vis: false })
  //   const elementRef = useRef(null);
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
  let journalFil = useMemo(() => {
    const searchRegex = data.search && new RegExp(`${data.search}`, 'gi')
    return (
      journal &&
      journal
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .filter(
          (d) =>
            !searchRegex ||
            searchRegex.test(d.name + d.mobile + d.email + d.address),
        )
    )
  }, [journal, data.search])
  return (
    <>
      {/* Component Title */}
      <div
        className="w-100"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div className=" __content_title">Cash Flow</div>
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
          Cash Flow from Operating Activities
          <hr />
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
          Cash Flow from Investing Activities
          <hr />
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
          Cash Flow from Financing Activities
          <hr />
        </div>
      </div>
      <div className="row col-md-12" style={{ paddingLeft: '25px' }}>
        Net Change in cash
      </div>
      <div className="row col-md-12" style={{ paddingLeft: '25px' }}>
        Cash Beginning
      </div>
      <div className="row col-md-12" style={{ paddingLeft: '25px' }}>
        Cash Ending
      </div>
    </>
  )
}

export default CashFlow
