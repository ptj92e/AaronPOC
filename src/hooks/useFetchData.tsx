import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchData = (filePath: string) => {
  const [data, setData] = useState<{}>({})
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<{}>({})

  const url = `${import.meta.env.VITE_GITHUB_BASE_PATH}${
    import.meta.env.VITE_GITHUB_REPO_OWNER
  }${import.meta.env.VITE_GITHUB_REPO}contents/${
    import.meta.env.VITE_GITHUB_FILE_BASE_PATH
  }${filePath}`

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `token ${
              import.meta.env.VITE_PERSONAL_ACCESS_TOKEN
            }`,
            Accept: 'application/vnd.github.v3+json',
          },
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
  }, [url])

  return { data, loading, error }
}

export default useFetchData
