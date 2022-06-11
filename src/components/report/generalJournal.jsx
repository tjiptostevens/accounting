import React, { useState, useMemo } from 'react'
import useFetch from '../useFetch'

const GeneralJournal = () => {
  const { data: generalJournal } = useFetch()
  const [data, setData] = useState('')
  const handleChange = (e) => {
    console.log(`${[e.target.name]}`, e.target.value)
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }
  let generalJournalFil = useMemo(() => {
    const searchRegex = data.search && new RegExp(`${data.search}`, 'gi')
    return (
      generalJournal &&
      generalJournal
        // .sort((a, b) => (a.name > b.name ? 1 : -1))
        .filter(
          (d) =>
            (!searchRegex || searchRegex.test(d.name + d.title + d.type)) &&
            (!data.search_type || d.type === data.search_type) &&
            (!data.end_date || d.posting_date === data.end_date),
        )
    )
  }, [generalJournal, data.search, data.search_type, data.end_date])
  return (
    <>
      {/* Component Title */}
      <div
        className="w-100"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div className=" __content_title">General Journal</div>
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
          <div
            className="col"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <select
              className="form-control m-1"
              name="search_type"
              onChange={handleChange}
              id="type"
            >
              <option value="">Journal Type</option>
              <option value="Penjualan Tracking Kredit">
                Penjualan Tracking Kredit
              </option>
              <option value="Penjualan Container Kredit">
                Penjualan Container Kredit
              </option>
              <option value="Pembelian Kredit">Pembelian Kredit</option>
              <option value="Penerimaan Kas">Penerimaan Kas</option>
              <option value="Pembayaran Kas">Pembayaran Kas</option>
              <option value="Journal Umum">Journal Umum</option>
            </select>
          </div>
          <div
            className="col"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <input
              className="form-control m-1"
              type="date"
              name="start_date"
              placeholder="Type to search"
              onChange={handleChange}
            />
            <input
              className="form-control m-1"
              type="date"
              name="end_date"
              value={data.end_date}
              onChange={handleChange}
            />
          </div>
          <button
            className="btn btn-primary m-1"
            onClick={() => window.print()}
            style={{ minWidth: 'fit-content' }}
          >
            <i class="bi bi-arrow-right-square"></i>
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
    </>
  )
}

export default GeneralJournal
