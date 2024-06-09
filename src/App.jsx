import { useState } from 'react'
import './App.css'

import { TypeAnimation } from 'react-type-animation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        <TypeAnimation
          sequence={[
            'Lerich Osay',
            5000,
            '',
            100
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />
      </h1>

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
          🛠 Work in progress 🛠
        </p>
      </div>
    </>
  )
}

export default App
