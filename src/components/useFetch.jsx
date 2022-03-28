import { useState, useEffect } from "react";
import urlLink from "./config/urlLink";

const useFetch = (url, filter) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCtr = new AbortController();
    const headers = filter
      ? {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        }
      : {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          Authorization: "token f6b262554df61cb:ca71946b2def9fa",
        };
    // console.log(headers);
    setTimeout(() => {
      fetch(`${urlLink.url}api/method/smi.api.${url}`, {
        signal: abortCtr.signal,
        method: "GET",
        headers: headers,
        credentials: "include",
      })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
          // console.log(data);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch data aborted");
          } else {
            setIsLoading(false);
            setError(err.message);
            // console.log(err.message);
          }
        });
    }, 0);
    return () => abortCtr.abort();
  }, [url, filter]);

  return { data, isLoading, error };
};

export default useFetch;
