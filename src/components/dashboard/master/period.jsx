import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { showFormattedDate } from '../../custom/dateFn'
import ReportTable from '../../report/reportTable'
import { reqPeriod } from '../../reqFetch'
import Modal from '../../site/modal'
import useFetch from '../../useFetch'
import AddPeriod from '../modal/addPeriod'

const Period = () => {
  const [vis, setVis] = useState({ modal: false })
  const { data: period, error, isError, isLoading } = useQuery(
    'period',
    reqPeriod,
  )
  // const { data: period } = useFetch('getperiod.php')
  const handleClose = (e) => {
    setVis({ ...vis, modal: false })
  }
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error! {error.message}</div>
  }
  return (
    <>
      {/* Modal Window */}
      <Modal
        modal={vis.modal}
        title={
          {
            1: 'Add Period',
            2: '',
          }[vis.value]
        }
        element={
          {
            1: <AddPeriod handleClose={handleClose} />,
            2: '',
          }[vis.value]
        }
        handleClose={handleClose}
      />
      {/* Component Title */}
      <div
        className="w-100"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div className=" __content_title">Period</div>
        {/* add User + search */}
        <div className=" __search_bar">
          <button
            className="btn btn-primary m-1"
            onClick={() => window.print()}
            style={{ minWidth: 'fit-content' }}
          >
            <i className="bi bi-printer"></i>
          </button>
          <button
            className="btn btn-primary m-1"
            onClick={() => setVis({ ...vis, modal: true, value: 1 })}
          >
            <i className="bi bi-plus" style={{ marginRight: '10px' }}></i>
            New
          </button>
        </div>
      </div>
      <hr style={{ margin: '0' }} />
      <div className="w-100" style={{ height: '25px' }}></div>

      {/* Judul */}
      <div className="row col-md-12" style={{ paddingLeft: '25px' }}>
        <div
          className="row d-none d-md-flex col-md-12"
          style={{
            color: 'white',
            textAlign: 'left',
            padding: '7px 0',
            fontWeight: '600',
          }}
        >
          <div className="col-md-2">Name</div>
          <div className="col-md-3">Description</div>
          <div className="col-md-2" style={{ textAlign: 'center' }}>
            Start Date
          </div>
          <div className="col-md-2" style={{ textAlign: 'center' }}>
            End Date
          </div>
          <div className="col-md-2">Status</div>
          <div className="col-md-1"></div>
        </div>
        <hr />
      </div>

      {/* Isi */}
      <div className="row col-md-12" style={{ paddingLeft: '25px' }}>
        {period?.map((e, i) => (
          <div key={i}>
            <div
              className="row col-md-12"
              style={{
                color: 'white',
                textAlign: 'left',
                fontWeight: '100',
              }}
            >
              <div className="col-md-2 col-6">{e.name}</div>
              <div className="col-md-3 col-12">{e.description}</div>
              <div className="col-md-2 col-4" style={{ textAlign: 'right' }}>
                {showFormattedDate(e.start)}
              </div>
              <div className="col-md-2 col-4" style={{ textAlign: 'right' }}>
                {showFormattedDate(e.end)}
              </div>
              <div className="col-md-2 col-4">
                {/* {{ 0: 'Closed', 1: 'Active' }[e.status]} */}
                {
                  {
                    0: (
                      <div
                        className="text-warning"
                        // style={{ width: '11%' }}
                      >
                        <i className="bi bi-check-all text-warning"></i>Closed
                      </div>
                    ),
                    1: (
                      <div
                        className="text-success"
                        // style={{ width: '11%' }}
                      >
                        <i className="bi bi-check-all text-success"></i>Active
                      </div>
                    ),
                  }[e.status]
                }
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>

      {/* <div className="row col-md-12" style={{ paddingLeft: '25px' }}>
        <div
          className="row col-md-12"
          style={{
            color: 'white',
            textAlign: 'left',
            padding: '7px 0',
            fontWeight: '600',
          }}
        >
          {period && <ReportTable data={period} />}
        </div>
      </div> */}
    </>
  )
}

export default Period
