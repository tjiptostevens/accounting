import React, { useState } from 'react'
import urlLink from '../../config/urlLink'

const AddPeriod = (props) => {
  const [data, setData] = useState()
  const handleChange = (e) => {
    console.log(`${[e.target.name]}`, e.target.value)
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }
  const handleClose = (e) => {
    e.preventDefault()
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
        let res = await fetch(`${urlLink.url}addperiod.php`, {
          signal: abortCtr.signal,
          method: 'POST',
          body: JSON.stringify(data),
          headers: headers,
        })
        res = res.json
        console.log(res)
      } catch (error) {
        console.log(error)
        // setData({
        //   ...data,
        //   msg: 'Error Connection',
        // })
      }
    }, 50)
  }
  return (
    <>
      <form onSubmit={handleSubmit} method="post"></form>
    </>
  )
}

export default AddPeriod
