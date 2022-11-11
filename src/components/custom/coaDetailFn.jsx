import { useMemo } from 'react'
import { useQuery } from 'react-query'
import { reqCoa, reqCoaList, reqJournalEntry, reqPeriod } from '../reqFetch'

const CoaDetailFn = ({ input = 'period' }) => {
  const { data: period } = useQuery('period', reqPeriod)
  const { data: coa } = useQuery('coa', reqCoa)
  const { data: journalEntry } = useQuery('journalEntry', reqJournalEntry)
  const { data: coaList, error, isError, isLoading } = useQuery(
    'coaList',
    reqCoaList,
  )

  // create a new COA
  let newCoa = []
  coaList?.forEach((e) => {
    try {
      let x = {
        number: e.number,
        name: e.name,
        type: e.type,
        parent: e.parent,
        is_group: e.is_group,
        debit: '0.00',
        credit: '0.00',
        total: '0.00',
      }
      newCoa.push(x)
    } catch (error) {}
  })
  // Filter journal Entry by period
  let jE = useMemo(() => {
    return input === ''
      ? journalEntry?.sort((a, b) => (a.created_date > b.created_date ? 1 : -1))
      : journalEntry
          ?.sort((a, b) => (a.created_date > b.created_date ? 1 : -1))
          .filter(
            (d) =>
              new Date(d.created_date) >= new Date(input.start) &&
              new Date(d.created_date) <= new Date(input.end),
          )
  }, [journalEntry, period, input])
  // new COA by filtered Journal Entry
  jE?.forEach((e) => {
    if (e.acc !== 'Total') {
      try {
        let i = newCoa.findIndex((d) => d.number === e.acc)
        let d, c
        // console.log(e.acc, e.debit, parseInt(e.debit))
        d = parseFloat(e.debit) + parseFloat(newCoa[i].debit)
        c = parseFloat(e.credit) + parseFloat(newCoa[i].credit)
        let t = 0
        if (newCoa[i].type === 'Assets' || newCoa[i].type === 'Expense') {
          t = d - c
        } else {
          t = c - d
        }
        let y = newCoa
        let x = {
          number: newCoa[i].number,
          name: newCoa[i].name,
          type: newCoa[i].type,
          parent: newCoa[i].parent,
          is_group: newCoa[i].is_group,
          debit: d.toString() + '.00',
          credit: c.toString() + '.00',
          total: t.toString() + '.00',
        }
        y[i] = x
        newCoa = y
      } catch (error) {
        console.log(error)
      }
    }
  })
  let assets = 0
  let liability = 0
  let equity = 0
  let income = 0
  let expense = 0

  newCoa?.forEach((element) => {
    if (element.type === 'Liability') {
      liability += parseFloat(element.total)
    } else if (element.type === 'Equity') {
      equity += parseFloat(element.total)
    } else if (element.type === 'Income') {
      income += parseFloat(element.total)
    }
  })
  newCoa?.forEach((element) => {
    if (element.type === 'Assets') {
      assets += parseFloat(element.total)
    } else if (element.type === 'Expense') {
      expense += parseFloat(element.total)
    }
  })
  let pl =
    income -
    expense -
    (newCoa &&
      newCoa.filter((f) => f.number === '320').map((g) => parseFloat(g.total)))
  let assetsFill = useMemo(() => {
    return (
      newCoa &&
      newCoa
        // .sort((a, b) => (a.name > b.name ? 1 : -1))
        .filter((d) => d.type === 'Assets')
    )
  }, [newCoa])
  let liabilityFill = useMemo(() => {
    return (
      newCoa &&
      newCoa
        // .sort((a, b) => (a.name > b.name ? 1 : -1))
        .filter((d) => d.type === 'Liability')
    )
  }, [newCoa])
  let equityFill = useMemo(() => {
    let a =
      newCoa &&
      newCoa
        // .sort((a, b) => (a.name > b.name ? 1 : -1))
        .filter(
          (d) =>
            d.type === 'Equity' && d.number !== '320' && d.number !== '330',
        )
    let i = a.findIndex((obj) => obj.number === '300')
    // console.log(a, i, pl)
    a[i] = {
      ...a[i],
      credit: pl.toString() + '.00',
    }
    return a
  }, [newCoa, pl])
  let incomeFill = useMemo(() => {
    return (
      newCoa &&
      newCoa
        // .sort((a, b) => (a.name > b.name ? 1 : -1))
        .filter((d) => d.type === 'Income')
    )
  }, [newCoa])
  let expenseFill = useMemo(() => {
    return (
      newCoa &&
      newCoa
        // .sort((a, b) => (a.name > b.name ? 1 : -1))
        .filter((d) => d.type === 'Expense')
    )
  }, [newCoa])
  return {
    error,
    isError,
    isLoading,
    newCoa,
    assets,
    liability,
    equity,
    income,
    expense,
    pl,
    assetsFill,
    liabilityFill,
    equityFill,
    incomeFill,
    expenseFill,
  }
}

export default CoaDetailFn
