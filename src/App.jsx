import { useState, useRef } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'

import { TypeAnimation } from 'react-type-animation'

function App() {

  const home = useRef(null)
  const about = useRef(null)
  const projects = useRef(null)
  const stats = useRef(null)

  const scrollTo = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ul className="flex flex-row w-screen gap-10 p-10">
          <li onClick={() => scrollTo(home)}>Home</li>
          <li onClick={() => scrollTo(about)}>About Me</li>
          <li onClick={() => scrollTo(projects)}>Projects</li>
          <li onClick={() => scrollTo(stats)}>Cool Stats</li>
        </ul>
      </div>
      <div ref={home}>
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
      </div>
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

      <div className='p-10'>
        <div ref={about} className="h-screen">
          About
        </div>
        <div ref={projects} className="h-screen">
          Projects
        </div>
        <div ref={stats} className="h-screen">
          Some Fun Stats
        </div>

      </div>

    </>
  )
}

export default App
