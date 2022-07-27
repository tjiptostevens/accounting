import { useState, useEffect } from 'react'
import urlLink from './config/urlLink'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCtr = new AbortController()
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': window.location.origin,
    }
    // console.log(headers);
    setTimeout(() => {
      fetch(`${urlLink.url}${url}`, {
        signal: abortCtr.signal,
        method: 'GET',
        headers: headers,
        // credentials: "include",
      })
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not fetch the data for that resource')
          }
          return res.json()
        })
        .then((data) => {
          setData(data)
          setIsLoading(false)
          setError(null)
          // console.log(data);
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('fetch data aborted')
          } else {
            setIsLoading(false)
            setError(err.message)
            // console.log(err.message);
          }
        })
    }, 500)
    return () => abortCtr.abort()
  }, [url])

  return { data, isLoading, error }
}

export default useFetch
