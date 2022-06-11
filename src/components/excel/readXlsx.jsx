import React, { useState } from 'react'
import * as XLSX from 'xlsx'

const ReadXlsx = () => {
  const [data, setData] = useState('')
  const readExcel = (file) => {
    const promise = new Promise((res, rej) => {
      const fileReader = new FileReader()
      fileReader.readAsArrayBuffer(file)
      fileReader.onload = (e) => {
        const bufferArray = e.target.result
        const wb = XLSX.read(bufferArray, { type: 'buffer' })
        const wsName = wb.SheetNames[0]
        const ws = wb.Sheets[wsName]
        const data = XLSX.utils.sheet_to_json(ws)
        res(data)
      }
      fileReader.onerror = (err) => {
        rej(err)
      }
    })
    promise
      .then((d) => {
        let array = Object.keys(d[0])
        let loop = []
        array.forEach((element) => {
          let obj = { title: element }
          loop.push(obj)
        })
        setData({ header: loop, body: d })
      })
      // .then((d) => {})
      .catch((err) => {
        setData({ error: err })
      })
  }
  return (
    <>
      <div>
        <input
          type="file"
          name="file"
          className="form-control"
          onChange={(e) => {
            const file = e.target.files[0]
            readExcel(file)
          }}
          onClick={(e) => (e.target.value = null)}
        />
      </div>
      <div style={{ overflow: 'auto', height: '100%', width: '100%' }}>
        <table className="table table-striped table-dark table-hover">
          <thead style={{ position: 'sticky', top: '0' }}>
            <tr>
              {data &&
                data.header.map((e, i) => (
                  <th style={{ borderBottom: '1px solid white' }} key={i}>
                    {e.title}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {data &&
              data.body.map((e, i) => (
                <tr key={i}>
                  {data.header.map((e1, i1) => (
                    <td key={i1}>{e[e1.title]}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ReadXlsx
