import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => { 
    
      (async () => {
        setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    })();
  
  }, [url]);
  
   return { data, loading };
  };
