import { useEffect, useState } from 'react'
import axios from 'axios';

const useFetchData = (url: string) => {
    const [data, setData] = useState<{}>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<{}>({});

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(url, {
                  headers: {
                    Authorization: `token ${import.meta.env.VITE_PERSONAL_ACCESS_TOKEN}`,
                    Accept: 'application/vnd.github.v3+json'
                  }
                })
        
                const content = atob(response.data.content)
                setData(JSON.parse(content))
                setLoading(false)
              } catch (error: any) {
                setError(error)
                setLoading(false)
              }
        }

        getData()
    }, [url]);
  
    return { data, loading, error };
}

export default useFetchData
