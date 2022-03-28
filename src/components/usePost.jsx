import { useState, useEffect } from "react";
import urlLink from "./config/urlLink";

const usePost = (url, filter) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const urf = { url: url, filter: filter };
  useEffect(() => {
    const abortCtr = new AbortController();
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    console.log(urf);
    setTimeout(() => {
      fetch(`${urlLink.url}api/method/smi.api.${urf.url}`, {
        signal: abortCtr.signal,
        method: "POST",
        headers: headers,
        credentials: "include",
        body: JSON.stringify(urf.filter),
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
  }, []);

  return { data, isLoading, error };
};

export default usePost;
