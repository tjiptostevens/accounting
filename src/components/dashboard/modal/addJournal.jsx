import React, { useState, useEffect } from 'react'
import useFetch from '../../useFetch'
import urlLink from '../../config/urlLink'
import useDate from '../../useDate'
import AddJournalEntry from './addJournalEntry'
import Entry from './entry'

const AddJournal = (props) => {
  const { data: coa } = useFetch('getcoa.php')
  const { now, YY, DD, MM, ss } = useDate()
  const [lists, setLists] = useState([])
  const [data, setData] = useState({
    type: 'Journal Umum',
    type_number: 6,
    required: true,
    name: `JV/${MM}/####`,
    title: '',
    last: '0000',
    now: `${YY}-${MM}-${DD}`,
    entry: [
      // { idx: "1", acc: "", party_type: "", party: "", debit: "", credit: "" },
    ],
    month: MM,
    minute: ss,
    posting_date: `${YY}-${MM}-${DD}`,
    opening: false,
    pay_to_recd_from: '',
    user_remark: '',
  })

  useEffect(() => {
    const abortCtr = new AbortController()
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': window.location.origin,
    }
    setTimeout(async () => {
      try {
        let res = await fetch(
          `${urlLink.url}getjournallast.php?type=${data.type}`,
          {
            signal: abortCtr.signal,
            method: 'GET',
            headers: headers,
          },
        )
        res = await res.json()
        setData({ ...data, last: res.last })
      } catch (error) {
        console.log(error)
        setData({
          ...data,
          last: '0000',
          msg: 'Error Connection',
        })
      }
    }, 10)
    // return data
  }, [data.name, data.title])

  const handleChange = (e) => {
    console.log(`${[e.target.name]}`, typeof e.target.value)
    let nam = e.target.name
    let val = e.target.value
    if (nam === 'type') {
      switch (Number(val)) {
        case 1:
          setData({
            ...data,
            name: `SC/Track/${data.month}/####`,
            type: 'Penjualan Tracking Kredit',
            type_number: 1,
            entry: [
              {
                idx: '1',
                acc: '101-3',
                party_type: '',
                party: '',
                debit: 0,
                credit: '',
                disable: true,
              },
              {
                idx: '2',
                acc: '401',
                party_type: '',
                party: '',
                debit: '',
                credit: 0,
                disable: true,
              },
            ],
          })
          break
        case 2:
          setData({
            ...data,
            name: `SC/Conta/${data.month}/####`,
            type: 'Penjualan Container Kredit',
            type_number: 2,
            entry: [
              {
                idx: '1',
                acc: '101-3',
                party_type: '',
                party: '',
                debit: 0,
                credit: '',
                disable: true,
              },
              {
                idx: '2',
                acc: '402',
                party_type: '',
                party: '',
                debit: '',
                credit: 0,
                disable: true,
              },
            ],
          })
          break
        case 3:
          setData({
            ...data,
            name: `PC/${data.month}/####`,
            type: 'Pembelian Kredit',
            type_number: 3,
            entry: [
              {
                idx: '1',
                acc: '',
                party_type: '',
                party: '',
                debit: 0,
                credit: '',
                disable: false,
              },
              {
                idx: '2',
                acc: '201-1',
                party_type: '',
                party: '',
                debit: '',
                credit: 0,
                disable: true,
              },
            ],
          })
          break
        case 4:
          setData({
            ...data,
            name: `CR/${data.month}/####`,
            type: 'Penerimaan Kas',
            type_number: 4,
            entry: [
              {
                idx: '1',
                acc: '101-2',
                party_type: '',
                party: '',
                debit: 0,
                credit: '',
                disable: true,
              },
              {
                idx: '2',
                acc: '101-3',
                party_type: '',
                party: '',
                debit: '',
                credit: 0,
                disable: false,
              },
            ],
          })
          break
        case 5:
          setData({
            ...data,
            name: `CP/${data.month}/####`,
            type: 'Pembayaran Kas',
            type_number: 5,
            entry: [
              {
                idx: '1',
                acc: '',
                party_type: '',
                party: '',
                debit: 0,
                credit: '',
                disable: false,
              },
              {
                idx: '2',
                acc: '101-2',
                party_type: '',
                party: '',
                debit: '',
                credit: 0,
                disable: true,
              },
            ],
          })
          break
        case 6:
          setData({
            ...data,
            name: `JV/${data.month}/####`,
            type: 'Journal Umum',
            type_number: 6,
            entry: [],
          })
          break

        default:
          setData({
            ...data,
            [e.target.name]: e.target.value,
          })
          break
      }
    } else {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      })
    }
  }
  const handleClose = (e) => {
    console.log(data)
    setData({
      ...data,
      type: '',
      type_number: 6,
      required: !data.required,
      name: '',
      title: '',
      last: '0000',
      now: `${YY}-${MM}-${DD}`,
      entry: [],
      month: MM,
      minute: ss,
      posting_date: `${YY}-${MM}-${DD}`,
    })
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
        let res = await fetch(`${urlLink.url}addjournal.php`, {
          signal: abortCtr.signal,
          method: 'POST',
          body: JSON.stringify(data),
          headers: headers,
        })
        res = await res.json()
        console.log(res)

        data.entry.map((e, i) => {
          setTimeout(async () => {
            try {
              let res1 = await fetch(`${urlLink.url}addjournalentry.php`, {
                signal: abortCtr.signal,
                method: 'POST',
                body: JSON.stringify(data.entry[i]),
                headers: headers,
              })
              res1 = await res1.json()
              setData({
                ...data,
                message: res1.message,
              })
            } catch (error) {
              console.log(error)
              setData({
                ...data,
                msg: 'Error Connection',
              })
            }
          }, 10)
        })
      } catch (error) {
        // display an alert message for an error
        console.log(error)
        setData({
          ...data,
          msg: 'Error Connection',
        })
      }
    }, 10)
  }
  const TotalDebit = () => {
    let debit = data.entry.map((e) => Number(e.debit))

    // console.log(debit);
    let sum = debit.reduce(function (a, b) {
      return a + b
    }, 0)
    // console.log(sum);
    // setData({ ...data, total_debit: sum });
    return sum
  }
  const TotalCredit = () => {
    let credit = data.entry.map((e) => Number(e.credit))

    // console.log(credit);
    let sum = credit.reduce(function (a, b) {
      return a + b
    }, 0)
    // console.log(sum);
    // setData({ ...data, total_credit: sum });
    return sum
  }

  // Hitung Debit & Credit
  useEffect(() => {
    setTimeout(() => {
      let td = TotalDebit()
      let tc = TotalCredit()
      setData({
        ...data,
        total_debit: td,
        total_credit: tc,
      })
    }, 10)
  }, [data.entry])
  // Handling Row
  function handleRow({ e, list }) {
    let i = Number(e.target.id)
    let listDat = [...data.entry]
    listDat[i] = list
    console.log('handleRow', list)
    console.log('list', listDat)
    setData({
      ...data,
      entry: listDat,
    })
  }
  const handleAddRow = (e) => {
    e.preventDefault()
    let idx = data.entry.length + 1
    let entry = {
      idx: idx.toString(),
      parent: '',
      acc: '',
      party_type: '',
      party: '',
      debit: '',
      credit: '',
    }

    setData({
      ...data,
      entry: [...data.entry, entry],
    })
    console.log('handleAddRow', data)
  }
  const handleDelete = (e, vis) => {
    let i = e
    let listDat = [...data.entry]
    let list = listDat[i]
    console.log(vis, list)
    listDat.splice(i, 1)
    console.log('list', listDat)
    setData({
      ...data,
      entry: listDat,
    })
  }
  const handleOpening = (e) => {
    console.log(e)
    let ent = coa.filter((e) => e.is_group === '0').map((e) => e.number)
    console.log(ent)
    let obj = []
    for (let i = 0; i < ent.length; ++i) {
      obj.push({
        idx: i + 1,
        acc: ent[i],
        credit: '',
        debit: '',
        parent: `${data.name.replace('####', '')}${data.last}`,
        party: '',
        party_type: '',
      })
    }

    console.log(obj)
    setData({
      ...data,
      name: `OP/${data.month}/####`,
      type: 'Opening',
      type_number: 7,
      entry: [...obj],
      opening: true,
    })
  }
  return (
    <>
      <div className="modal_title">
        <b>Add Jounal</b>
        <div style={{ margin: '0px', padding: '5px 0' }}>
          {data.opening ? (
            <button
              style={{ padding: '0 5px', minWidth: 'unset' }}
              className="btn btn-primary btn-sm"
              onClick={() =>
                setData({
                  ...data,
                  opening: false,
                  type: 'Journal Entry',
                  type_number: 6,
                  name: `JV/${data.month}/####`,
                  entry: [],
                })
              }
            >
              Cancel
            </button>
          ) : (
            <button
              style={{ padding: '0 5px', minWidth: 'unset' }}
              className="btn btn-primary btn-sm"
              onClick={handleOpening}
            >
              Add Opening Entries
            </button>
          )}
        </div>
      </div>
      {/* {JSON.stringify(data)} <br /> */}
      {/* {JSON.stringify(coa)} */}
      <div className="modal_content">
        <form onSubmit={handleSubmit} method="post">
          <div
            className="row col-md-12"
            style={{ margin: '0px', padding: '0px' }}
          >
            {/* Journal Type */}
            <div
              className="row col-md-12"
              style={{ margin: '0px', padding: '0px' }}
            >
              <label className="label_title">Journal Type :</label>
              <select
                required={data.required}
                disabled={data.opening}
                className="form-select"
                name="type"
                value={data.type_number}
                onChange={handleChange}
                onClick={() => setData({ ...data, entry: [] })}
              >
                <option value="1">Penjualan Tracking Kredit</option>
                <option value="2">Penjualan Container Kredit</option>
                <option value="3">Pembelian Kredit</option>
                <option value="4">Penerimaan Kas</option>
                <option value="5">Pembayaran Kas</option>
                <option value="6">Journal Umum</option>
                <option value="7" hidden={!data.opening}>
                  Opening
                </option>
              </select>
            </div>
            {/* Numbering */}
            <div
              className="row col-md-6"
              style={{ margin: '0px', padding: '0px' }}
            >
              <label className="label_title">
                Number <span className="text-danger">*</span>
              </label>
              <input
                required={data.required}
                disabled={true}
                onChange={handleChange}
                type="text"
                className="form-control mb-2"
                value={data.name}
                name="name"
                id="name"
              />
            </div>
            {/* Posting Date */}
            <div
              className="row col-md-6"
              style={{ margin: '0px', padding: '0px' }}
            >
              <label className="label_title">
                Posting Date <span className="text-danger">*</span>
              </label>
              <input
                required={data.required}
                onChange={handleChange}
                type="date"
                className="form-control mb-2"
                value={data.posting_date}
                name="posting_date"
                id="posting_date"
              />
            </div>
          </div>
          {/* Customer Mobile */}
          <div
            className="row col-md-12"
            style={{ margin: '0px', padding: '0px' }}
          >
            <label className="label_title">
              Title <span className="text-danger">*</span>
            </label>
            <input
              required={data.required}
              onChange={handleChange}
              type="text"
              className="form-control mb-2"
              value={data.title}
              name="title"
              id="title"
            />
          </div>
          {/* Input data Accounting */}
          <div
            className="row col-md-12"
            style={{ margin: '0px', padding: '0px' }}
          >
            <label className="label_title">Accounting Entries</label>
            {/* <small>{JSON.stringify(data)}</small> */}
            {/* <hr /> */}
            {/* <small>{JSON.stringify(lists)}</small> */}
            <div
              className="row col-md-12 "
              style={{
                margin: '0px',
                padding: '5px 0 0 0',
              }}
            >
              <div
                className="col-md-1"
                style={{ padding: '5px 10px', border: '1px solid #b3b3b3' }}
              >
                No.
              </div>
              <div
                className="col-md-3"
                style={{ padding: '5px 10px', border: '1px solid #b3b3b3' }}
              >
                Account
              </div>
              <div
                className="col-md-2"
                style={{ padding: '5px 10px', border: '1px solid #b3b3b3' }}
              >
                Party Type
              </div>
              <div
                className="col-md-2"
                style={{ padding: '5px 10px', border: '1px solid #b3b3b3' }}
              >
                Party
              </div>
              <div
                className="col-md-2"
                style={{ padding: '5px 10px', border: '1px solid #b3b3b3' }}
              >
                Debit
              </div>
              <div
                className="col-md-2"
                style={{ padding: '5px 10px', border: '1px solid #b3b3b3' }}
              >
                Credit
              </div>
            </div>
            {data.entry &&
              data.entry.map((e, i) => (
                <Entry
                  key={i}
                  i={i}
                  data={e}
                  parent={data.name}
                  last={data.last}
                  handleRow={handleRow}
                  handleDelete={handleDelete}
                />
              ))}

            <div
              className="row col-md-12 "
              style={{
                margin: '0px',
                padding: '0px',
              }}
            >
              <div
                className="col-md-4"
                style={{ margin: '0px', padding: '5px 0' }}
              >
                <button
                  style={{ padding: '0 5px', minWidth: 'unset' }}
                  className="btn btn-primary btn-sm"
                  onClick={handleAddRow}
                >
                  Add Row
                </button>
              </div>
              {data.entry.length > 0 && (
                <>
                  <div
                    className="col-md-4"
                    style={{
                      padding: '5px 10px',
                      textAlign: 'right',
                    }}
                  >
                    Total
                  </div>
                  <div
                    className="col-md-2"
                    style={{
                      padding: '5px 10px',
                      border: '1px solid #b3b3b3',
                      background: 'white',
                    }}
                  >
                    {TotalDebit()}
                  </div>
                  <div
                    className="col-md-2"
                    style={{
                      padding: '5px 10px',
                      border: '1px solid #b3b3b3',
                      background: 'white',
                    }}
                  >
                    {TotalCredit()}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Pay to / Received By */}
          <div
            className="row col-md-12"
            style={{ margin: '0px', padding: '0px' }}
          >
            <label className="label_title">Pay To / Received By :</label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control mb-2"
              value={data.pay_to_recd_from}
              name="pay_to_recd_from"
              id="pay_to_recd_from"
            />
          </div>
          {/* User Remark */}
          <div
            className="row col-md-12 mb-5"
            style={{ margin: '0px', padding: '0px' }}
          >
            <label className="label_title">User Remark</label>
            <textarea
              name="user_remark"
              onChange={handleChange}
              className="form-control mb-2"
              value={data.user_remark}
            ></textarea>
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

export default AddJournal
