import React, { useState, useMemo } from 'react'
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
        .sort((a, b) => (a.date > b.date ? 1 : -1))
        .filter(
          (d) =>
            (!searchRegex || searchRegex.test(d.name + d.code)) &&
            (!data.search_type || d.type === data.search_type) &&
            (!data.end_date || d.date === data.end_date),
        )
    )
  }, [assets, data.search, data.search_type, data.end_date])

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

      <div className="w-100" style={{ height: '25px' }}></div>
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
          <div className="col-md-1">Code</div>
          <div className="col-md-3">Name</div>
          <div className="col-md-2">Date</div>
          <div className="col-md-1">Qty</div>
          <div className="col-md-1">Lifetime</div>
          <div className="col-md-2" style={{ textAlign: 'center' }}>
            Init Value
          </div>
          <div className="col-md-2" style={{ textAlign: 'center' }}>
            Eco Value
          </div>
        </div>
        <hr />
      </div>
      {/* {console.log(data)} */}
      <div className="row col-md-12" style={{ paddingLeft: '25px' }}>
        {assetsFil &&
          assetsFil.map((d, i) => (
            <div key={i + '-' + d.id + '-' + d.code}>
              <div
                className="row col-md-12"
                style={{
                  color: 'white',
                  textAlign: 'left',
                  fontWeight: '100',
                }}
              >
                {console.log(d)}
                <div className="col-md-1 col-6">{d.code}</div>
                <div className="col-md-3 col-6">{d.name}</div>
                <div className="col-md-2 col-6">{d.date}</div>
                <div className="col-md-1 col-3">{d.qty}</div>
                <div className="col-md-1 col-3">{d.lifetime}</div>
                <div className="col-md-2 col-6" style={{ textAlign: 'right' }}>
                  {d.init_value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </div>
                <div className="col-md-2 col-6" style={{ textAlign: 'right' }}>
                  {d.eco_value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </div>
              </div>
              <hr />
            </div>
          ))}
      </div>
    </>
  )
}

export default Depreciation
