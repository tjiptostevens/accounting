import React from 'react'
import useFetch from '../useFetch'

const Dash = () => {
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
      {/* {JSON.stringify(coa)} */}
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

      {/* Balance */}
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
              <p>Total Assets</p>
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
              <p>Total Liability</p>
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
              <p>Total Equity</p>
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

      {/* Profit and Loss */}
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
              <p>Total Income This Period</p>
              <h5
                style={income < 0 ? { color: 'crimson' } : { color: 'white' }}
              >
                Rp.{' '}
                {income.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') +
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
              <b>-</b>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <p>Total Expense This Period</p>
              <h5
                style={expense < 0 ? { color: 'crimson' } : { color: 'white' }}
              >
                Rp.{' '}
                {expense.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') +
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
                color: '#2490ef',
              }}
            >
              <b>=</b>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <p>Profit This Period</p>
              <h5
                style={
                  income - expense < 0
                    ? { color: 'crimson' }
                    : income - expense === 0
                    ? { color: 'white' }
                    : { color: 'limegreen' }
                }
              >
                Rp.{' '}
                {(income - expense)
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') + '.00'}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dash
