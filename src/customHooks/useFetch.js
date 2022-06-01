import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [ response, setResponse ] = useState(null);
  const [ error, setError ] = useState(null);
  const [ isPending, setIsPending ] = useState(false);

  useEffect(() => {
    const doFetch = async () => {
      try {
        const res = await fetch(url);
        setIsPending(true);

        if(!res.ok) {
          setIsPending(false);
          throw Error('Sorry, we can\t find the data !');
        } else {
          const data = await res.json();
          setIsPending(false);
          setResponse(data);
        }
        
      }
      catch (err) {
        setError(err.message);
      }
    }
    doFetch();
  }, [url]);

  return { response, error, isPending };
}

export default useFetch;