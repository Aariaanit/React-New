import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  //Loading message
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          //console.log(err.message);
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
