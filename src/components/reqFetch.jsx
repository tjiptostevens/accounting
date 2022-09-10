import axios from 'axios'
import urlLink from './config/urlLink'

const reqCompany = async () => {
  const { data } = await axios.get(`${urlLink.url}getcompany.php`)
  return data
}
const reqJournal = async () => {
  const { data } = await axios.get(`${urlLink.url}getjournal.php`)
  return data
}
const reqJournalList = async () => {
  const { data } = await axios.get(`${urlLink.url}getjournallist.php`)
  return data
}
const reqCoa = async () => {
  const { data } = await axios.get(`${urlLink.url}getcoav2.php`)
  return data
}
const reqPeriod = async () => {
  const { data } = await axios.get(`${urlLink.url}getperiod.php`)
  return data
}
const reqAssets = async () => {
  const { data } = await axios.get(`${urlLink.url}getassets.php`)
  return data
}
const reqCustomer = async () => {
  const { data } = await axios.get(`${urlLink.url}getcustomer.php`)
  return data
}
const reqUser = async () => {
  const { data } = await axios.get(`${urlLink.url}getuser.php`)
  return data
}

export {
  reqCompany,
  reqJournal,
  reqJournalList,
  reqCoa,
  reqPeriod,
  reqAssets,
  reqCustomer,
  reqUser,
}
