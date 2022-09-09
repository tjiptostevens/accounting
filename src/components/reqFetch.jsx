import axios from 'axios'
import urlLink from './config/urlLink'

const reqCompany = async (url) => {
  const { data } = await axios.get(`${urlLink.url}getcompany.php`)
  return data
}
const reqCoa = async (url) => {
  const { data } = await axios.get(`${urlLink.url}getcoav2.php`)
  return data
}
const reqJournal = async (url) => {
  const { data } = await axios.get(`${urlLink.url}getjournal.php`)
  return data
}
const reqJournalList = async (url) => {
  const { data } = await axios.get(`${urlLink.url}getjournallist.php`)
  return data
}

export { reqCompany, reqJournal, reqJournalList, reqCoa }
