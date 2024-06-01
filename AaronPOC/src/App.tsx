import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetchData from './hooks/useFetchData'


function App() {
  const [count, setCount] = useState(0)

  const url = `https://api.github.com/repos/${import.meta.env.VITE_GITHUB_REPO_OWNER}/${import.meta.env.VITE_GITHUB_REPO}/contents/${import.meta.env.VITE_GITHUB_FILE_BASE_PATH}/home.json`
  
  const { data, loading, error} = useFetchData(url)

  useEffect(() => {
    console.log(data)
  }, [data])

  useEffect(() => {
    console.log(loading)
  }, [loading])

  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
