import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Lerich Osay</h1>
      <div className="card flex flex-col gap-4">
        <div className='flex flex-row gap-4 justify-center'>
          <button onClick={() => window.open('https://www.linkedin.com/in/lerichrosay', '_blank')}>
            LinkedIn
          </button>
          <button onClick={() => window.open('https://github.com/lericho', '_blank')}>
            GitHub
          </button>
        </div>
        <p>
          🛠 Work in progress! 🛠
        </p>
      </div>
      <p className="read-the-docs">
        Website Coming soon!
      </p>
    </>
  )
}

export default App
