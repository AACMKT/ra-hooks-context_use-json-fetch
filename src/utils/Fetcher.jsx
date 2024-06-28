import { useEffect, useState } from "react";

const useJsonFetch = (url, opts) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        
       (async () => {
            setLoading(true);
            try {
                const response = await fetch(url + opts);
                if (!response.ok) {
                    if (response.statusText){
                        throw new Error(response.statusText);
                    }
                    throw new Error(`Server response with code ${response.status}`);
                  
                }
                const json = await response.json();
                setLoading(false)
                setData(json)
              } catch (err) {
                if (err.message) {
                    setError(err.message);
                }
                else {
                    setError('Something went wrong');
                }
                
                setLoading(false)}

        })();
        return (setData(null), setError(''))
        }
        , [url, opts]

    )
    return [data, error, loading]
}

export default useJsonFetch