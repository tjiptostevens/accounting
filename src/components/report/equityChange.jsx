import React from 'react'
import useFetch from '../useFetch'

const EquityChange = () => {
  const { data: coa } = useFetch('getcoav2.php')
  let assets = 0
  let liability = 0
  let equity = 0
  let income = 0
  let expense = 0
  coa?.forEach((element) => {
    if (element.type === 'Liability') {
      liability += parseFloat(element.total)
    } else if (element.type === 'Equity') {
      equity += parseFloat(element.total)
    } else if (element.type === 'Income') {
      income += parseFloat(element.total)
    }
  })
  coa?.forEach((element) => {
    if (element.type === 'Assets') {
      assets += parseFloat(element.total)
    } else if (element.type === 'Expense') {
      expense += parseFloat(element.total)
    }
  })
  return (
    <>
      {/* Component Title */}
      <div
        className="w-100"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div className=" __content_title">Equity Change</div>
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
          Periode | Modal Awal | Laba bersih | Prive | Modal Akhir 22-07 | 22-08
          |
        </div>
      </div>
    </>
  )
}

export default EquityChange
