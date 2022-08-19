import { useEffect } from 'react'
import urlLink from '../config/urlLink'
import useDate from '../useDate'

const abortCtr = new AbortController()
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': window.location.origin,
}
const loginUser = localStorage.getItem('loginUser')
const company = localStorage.getItem('company')
let vis, data

const GetJournalLastFn = (journalType) => {
  try {
    let res = await fetch(
      `${urlLink.url}getjournallast.php?type=${journalType}`,
      {
        signal: abortCtr.signal,
        method: 'GET',
        headers: headers,
      },
    )
    res = await res.json()
    if (res.error) {
      throw res
    } else {
      return res.last
    }
  } catch (error) {
    console.log(error)
    return error
  }
}
const AddJournalFn = async (
  input = {
    name: `JV/{MM}/####`,
    title: '',
    user_remark: '',
    type: 'Journal Umum',
    ref: '',
    ref_id: '',
    company: company,
    pay_to_recd_from: '',
    total_debit: 0,
    total_credit: 0,
    posting_date: `{YY}-{MM}-{DD}`,
    created_by: loginUser,
  },
) => {
  console.log(input)
  try {
    let res = await fetch(`${urlLink.url}addjournal.php`, {
      signal: abortCtr.signal,
      method: 'POST',
      body: JSON.stringify(input),
      headers: headers,
    })
    res = await res.json()
    console.log(res)
    if (res.error) {
      throw res
    } else {
      return res
    }
  } catch (error) {
    // display an alert message for an error
    console.log(error)
    return error
  }
}
const AddJournalEntryFn = async (
  input = {
    idx: '1',
    acc: '',
    party_type: '',
    party: '',
    debit: '',
    credit: '',
  },
) => {
  try {
    let res = await fetch(`${urlLink.url}addjournalentry.php`, {
      signal: abortCtr.signal,
      method: 'POST',
      body: JSON.stringify(input),
      headers: headers,
    })
    res = await res.json()
    console.log(res)
    if (res.error) {
      throw res
    } else {
      return res
    }
  } catch (error) {
    console.log(error)
    return error
  }
}

const AddAssetsFn = async (input) => {
  try {
    let res = await fetch(`${urlLink.url}addassets.php`, {
      signal: abortCtr.signal,
      method: 'POST',
      body: JSON.stringify(input),
      headers: headers,
    })

    res = await res.json()
    console.log(res)
    if (res.error) {
      throw res
    } else {
      return res
    }
  } catch (error) {
    console.log(error)
    return error
  }
}

export { AddAssetsFn, AddJournalFn, AddJournalEntryFn, GetJournalLastFn }
