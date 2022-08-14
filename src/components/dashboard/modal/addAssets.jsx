import React, { useMemo, useState } from 'react'
import urlLink from '../../config/urlLink'
import useFetch from '../../useFetch'

const AddAssets = (props) => {
  const { data: coa } = useFetch('getcoa.php')
  let coaFil = useMemo(() => coa?.filter((f) => f.type === 'Assets'), [coa])
  const [data, setData] = useState({
    required: true,
    code: '',
    name: '',
    qty: '',
    lifetime: '',
    date: '',
    init_value: '',
    eco_value: '',
    description: '',
    company: localStorage.getItem('company'),
    created_by: localStorage.getItem('loginUser'),
    message: '',
  })
  const handleChange = (e) => {
    console.log(`${[e.target.name]}`, e.target.value)
    let nam = e.target.name
    if (nam === 'init_value') {
      let eco = 0
      eco = Math.round((data.init_value * data.qty) / (data.lifetime * 12))
      setData({
        ...data,
        [e.target.name]: e.target.value,
        eco_value: eco,
      })
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      })
    }
  }
  const handleClose = (e) => {
    console.log(data)
    setData({ ...data, required: !data.required })
    props.handleClose(e)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data)
    const abortCtr = new AbortController()
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': window.location.origin,
    }
    setTimeout(async () => {
      try {
        let res = await fetch(`${urlLink.url}addassets.php`, {
          signal: abortCtr.signal,
          method: 'POST',
          body: JSON.stringify(data),
          headers: headers,
        })

        res = await res.json()
        console.log(res)
        if (res.error) {
          throw res
        } else {
          setData({
            required: true,
            code: '',
            name: '',
            qty: '',
            lifetime: '',
            date: '',
            init_value: '',
            eco_value: '',
            description: '',
            company: localStorage.getItem('company'),
            created_by: localStorage.getItem('loginUser'),
            message: res.message,
          })
        }
      } catch (error) {
        console.log(error)
        setData({
          ...data,
          msg: error.message,
        })
      }
    }, 50)
  }
  return (
    <>
      <div className="modal_title">
        <b>Add Assets</b>
      </div>
      {/* {JSON.stringify(data)} <br /> */}
      {/* {console.log(props)} */}
      {JSON.stringify(coaFil)}
      <div className="modal_content">
        <form onSubmit={handleSubmit} method="post">
          <div
            className="row col-md-12"
            style={{ margin: '0px', padding: '0px' }}
          >
            {/* Customer Code */}
            <div
              className="row col-md-4"
              style={{ margin: '0px', padding: '0px' }}
            >
              <label className="label_title">
                Code <span className="text-danger">*</span>
              </label>
              <input
                required={data.required}
                onChange={handleChange}
                type="text"
                className="form-control mb-2"
                value={data.code}
                name="code"
                id="code"
              />
            </div>
            {/* Customer Name */}
            <div
              className="row col-md-8"
              style={{ margin: '0px', padding: '0px' }}
            >
              <label className="label_title">
                Name <span className="text-danger">*</span>
              </label>
              <input
                required={data.required}
                onChange={handleChange}
                type="text"
                className="form-control mb-2"
                value={data.name}
                name="name"
                id="name"
              />
            </div>
          </div>
          <div
            className="row col-md-12"
            style={{ margin: '0px', padding: '0px' }}
          >
            {/* Customer Quantity */}
            <div
              className="row col-md-3"
              style={{ margin: '0px', padding: '0px' }}
            >
              <label className="label_title">
                Quantity <span className="text-danger">*</span>
              </label>
              <input
                required={data.required}
                onChange={handleChange}
                type="tel"
                className="form-control mb-2"
                value={data.qty}
                name="qty"
                id="qty"
              />
            </div>
            {/* Customer lifetime */}
            <div
              className="row col-md-4"
              style={{ margin: '0px', padding: '0px' }}
            >
              <label className="label_title">
                Lifetime <span className="text-danger">*</span>
              </label>
              <input
                required={data.required}
                onChange={handleChange}
                type="number"
                className="form-control mb-2"
                value={data.lifetime}
                name="lifetime"
                id="lifetime"
              />
            </div>
            {/* Customer Date */}
            <div
              className="row col-md-5"
              style={{ margin: '0px', padding: '0px' }}
            >
              <label className="label_title">
                Date <span className="text-danger">*</span>
              </label>
              <input
                required={data.required}
                onChange={handleChange}
                type="date"
                className="form-control mb-2"
                value={data.date}
                name="date"
                id="date"
              />
            </div>
          </div>
          <div
            className="row col-md-12"
            style={{ margin: '0px', padding: '0px' }}
          >
            {/* Customer Initial Value */}
            <div
              className="row col-md-6"
              style={{ margin: '0px', padding: '0px' }}
            >
              <label className="label_title">
                Initial Value <span className="text-danger">*</span>
              </label>
              <input
                required={data.required}
                readOnly={data.qty === '' && data.lifetime === ''}
                onChange={handleChange}
                type="tel"
                className="form-control mb-2"
                value={data.init_value}
                name="init_value"
                id="init_value"
              />
            </div>
            {/* Customer Date */}
            <div
              className="row col-md-6"
              style={{ margin: '0px', padding: '0px' }}
            >
              <label className="label_title">Economic Value</label>
              <input
                onChange={handleChange}
                readOnly={true}
                type="number"
                className="form-control mb-2"
                value={data.eco_value}
                name="eco_value"
                id="eco_value"
              />
            </div>
          </div>
          {/* Customer Address */}
          <div
            className="row col-md-12 mb-5"
            style={{ margin: '0px', padding: '0px' }}
          >
            <label className="label_title">Description</label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control mb-2"
              value={data.description}
              name="description"
              id="description"
            />
          </div>
          <div>
            <p>{data.message}</p>
          </div>
          {/* Button */}
          <button className="btn btn-primary" type="submit">
            Save
          </button>
          <button className="btn btn-warning" onClick={handleClose}>
            Cancel
          </button>
        </form>
      </div>
    </>
  )
}

export default AddAssets
