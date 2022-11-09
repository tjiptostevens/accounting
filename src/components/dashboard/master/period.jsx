import React, { useState } from 'react'
import { useQuery } from 'react-query'
import { showFormattedDate } from '../../custom/dateFn'
import { EditPeriodFn } from '../../custom/periodFn'
import { reqPeriod } from '../../reqFetch'
import Modal from '../../site/modal'
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
  const handleEdit = (e, input) => {
    console.log(e, input)
    e.preventDefault()
    setVis({ ...vis, modal: true, value: 2, data: input })
  }
  const handleDelete = async (e, input, status) => {
    e.preventDefault()
    let x = {
      ...input,
      status: status,
    }
    try {
      let res = await EditPeriodFn(x)
      console.log(res)
      if (res.error) {
        throw res
      } else {
        setVis({ ...vis, modal: true, value: 3, msg: res.message })
      }
    } catch (error) {
      console.log(error)
      setVis({ ...vis, modal: true, value: 3, msg: error.message })
    }

    // setVis({ ...vis, modal: true, value: 2, data: x })
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
            2: 'Delete Period',
          }[vis.value]
        }
        element={
          {
            1: <AddPeriod handleClose={handleClose} />,
            2: <>{vis.msg}</>,
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
          <div className="col-md-1">Name</div>
          <div className="col-md-3">Description</div>
          <div className="col-md-2" style={{ textAlign: 'center' }}>
            Start Date
          </div>
          <div className="col-md-2" style={{ textAlign: 'center' }}>
            End Date
          </div>
          <div className="col-md-1">Status</div>
          <div className="col-md-2"></div>
        </div>
        <hr />
      </div>

      {/* Isi */}
      <div className="row col-md-12" style={{ paddingLeft: '25px' }}>
        {period?.map((d, i) => (
          <div key={i}>
            <div
              className="row col-md-12"
              style={{
                color: 'white',
                textAlign: 'left',
                fontWeight: '100',
              }}
            >
              <div
                className="col-md-1 col-6"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                {d.name}
              </div>
              <div
                className="col-md-3 col-12"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                {d.description}
              </div>
              <div
                className="col-md-2 col-4"
                style={{
                  textAlign: 'right',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {showFormattedDate(d.start)}
              </div>
              <div
                className="col-md-2 col-4"
                style={{
                  textAlign: 'right',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {showFormattedDate(d.end)}
              </div>
              <div
                className="col-md-1 col-4"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
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
                  }[d.status]
                }
              </div>
              <div
                className="col-md-2 col-4"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  className="btn-group btn-group-toggle"
                  style={{ padding: '0 10px' }}
                >
                  {/* <button
                    className="btn btn-sm btn-warning"
                    style={{ padding: "2px 7px", fontSize: "10px" }}
                    onClick={(e) => handleEdit(e, d)}
                  >
                    Edit
                  </button> */}
                  {d.status === '1' ? (
                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDelete(e, d, 0)}
                    >
                      Close Period
                    </button>
                  ) : (
                    <button
                      className="btn btn-light"
                      onClick={(e) => handleDelete(e, d, 1)}
                      disabled={true}
                    >
                      Activate
                    </button>
                  )}
                </div>
              </div>
            </div>

            <hr />
          </div>
        ))}
      </div>
    </>
  )
}

export default Period
