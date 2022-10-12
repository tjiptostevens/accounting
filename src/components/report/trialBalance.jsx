import React from 'react'
import CoaLists from '../dashboard/master/coaLists'
import useFetch from '../useFetch'
import ReportList from './reportList'
import ReportTable from './reportTable'

const TrialBalance = () => {
  const { data: trial } = useFetch('gettrial.php')
  return (
    <>
      {/* Component Title */}
      <div
        className="w-100"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div className=" __content_title">Trial Balance</div>
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
      {/* {trial && <CoaLists list={trial} />} */}
      {trial && (
        <ReportList
          title={[
            [1, 1, 'number'],
            [3, 3, 'name'],
            [2, 3, 'opening_debit'],
            [2, 3, 'opening_credit'],
          ]}
          body={trial}
        />
      )}
    </>
  )
}

export default TrialBalance
