import React, { useState, useMemo, useEffect } from 'react'
import ReportTable from '../../report/reportTable'
import useFetch from '../../useFetch'
import AddAssets from '../modal/addAssets'

const Depreciation = () => {
  const { data: assets } = useFetch('getassets.php')
  const [data, setData] = useState({ vis: false })
  //   const elementRef = useRef(null);
  const handleClose = (e) => {
    setData({ ...data, vis: false })
    window.location.reload()
  }
  const handleChange = (e) => {
    console.log(`${[e.target.name]}`, e.target.value)
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }
  let assetsFil = useMemo(() => {
    const searchRegex = data.search && new RegExp(`${data.search}`, 'gi')
    return (
      assets &&
      assets
        // .sort((a, b) => (a.name > b.name ? 1 : -1))
        .filter(
          (d) =>
            (!searchRegex || searchRegex.test(d.name + d.title + d.type)) &&
            (!data.search_type || d.type === data.search_type) &&
            (!data.end_date || d.posting_date === data.end_date),
        )
    )
  }, [assets, data.search, data.search_type, data.end_date])
  //   useEffect(() => {
  //     let array = assets && Object.keys(assets)
  //     console.log(array)
  //     let loop = []
  //     array.forEach((element) => {
  //       let obj = { title: element }
  //       loop.push(obj)
  //     })
  //     console.log(loop)
  //     setData({ ...data, header: loop, body: array })
  //   }, [assets])
  return (
    <>
      {/* Modal Window */}
      <div
        className="__modal-window"
        style={{
          display: { true: 'block', false: 'none' }[data.vis],
          margin: '0px',
          padding: '0px',
        }}
      >
        <div
          className="row col-md-7 col-11"
          style={{
            maxHeight: '95vh',
            overflowY: 'auto',
            margin: '0px',
            padding: '0px',
          }}
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
                1: <AddAssets handleClose={handleClose} />,
                2: '',
              }[data.value]
            }
          </div>
        </div>
      </div>

      {/* Component Title */}
      <div
        className="w-100"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div className=" __content_title">Assets</div>
        {/* add User + search */}
        <div className="" style={{ display: 'flex' }}>
          <div
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
          </div>

          <button
            className="btn btn-primary m-1"
            onClick={() => setData({ ...data, vis: !data.vis, value: 1 })}
          >
            <i className="bi bi-plus"></i>
            New
          </button>
        </div>
      </div>

      <hr style={{ margin: '0' }} />
      {assets &&
        assets.map((d, i) => (
          <>
            <div>{d.code}</div>
          </>
        ))}
    </>
  )
}

export default Depreciation
