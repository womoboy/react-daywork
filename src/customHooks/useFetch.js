import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [ response, setResponse ] = useState(null);
  const [ error, setError ] = useState(null);
  const [ isPending, setIsPending ] = useState(true);

  useEffect(() => {
    const abortController = new AbortController;
    
    fetch(url, { signal: abortController.signal })
      .then((res) => {
        if(!res.ok) {
          throw new Error('Sorry we can\'t find data !');
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setIsPending(false);
        setResponse(data);
      })
      .catch((err) => {
        if(err.name === 'AbortError') {
          console.log('Fetching aborted !');
        } else {
          setIsPending(false);
          setError(err.message);
        }
      })
      return () => abortController.abort();
  }, [url]);

  return { response, error, isPending };
}

export default useFetch;