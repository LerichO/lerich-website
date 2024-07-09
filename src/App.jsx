import { useState, useRef } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'
import './App.css'

import listOfProjects from './projects.json'
import ProjectCard from './components/ProjectCard'

function App() {

  const home = useRef(null)
  const about = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)

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
        <ul className="flex flex-row">
          <li><button onClick={() => scrollTo(home)}>Home</button></li>
          <li><button onClick={() => scrollTo(about)}>About Me</button></li>
          <li><button onClick={() => scrollTo(projects)}>Projects</button></li>
          <li><button onClick={() => scrollTo(contact)}>Contact Me</button></li>
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
            repeat={Infinity}
          />
        </h1>
      </div>
      <div className='flex flex-row gap-4 m-8 justify-center items-center h-24'>
        <img src="https://cdn.simpleicons.org/github/white" width={40} height={40} alt="GitHub"
          onClick={() => window.open('https://github.com/lericho', '_blank')}
          className='socials'
        />
        <img src="https://cdn.simpleicons.org/linkedin/white" width={40} height={40} alt="Linkedin"
          onClick={() => window.open('https://www.linkedin.com/in/lerichrosay', '_blank')}
          className='socials'
        />
        <img src="https://cdn.simpleicons.org/devpost/white" width={40} height={40} alt="devpost"
          onClick={() => window.open('https://devpost.com/lericho', '_blank')}
          className='socials'
        />

      </div>

      <div className='p-10'>
        <div ref={about} className="min-h-screen my-4">
          <h2>
            <TypeAnimation
              sequence={[
                'About Me',
                5000
              ]}
              wrapper="span"
              speed={50}
              repeat={1}
            />
          </h2>
          <div className="flex flex-row">
            <img />
            <p></p>
          </div>
        </div>
        <div ref={projects} className="min-h-screen my-4">
          <h2>
            <TypeAnimation
              sequence={[
                'Projects',
                5000
              ]}
              wrapper="span"
              speed={50}
              repeat={1}
            />
          </h2>
          <div className='flex flex-wrap gap-5 justify-center items-center'>
            {listOfProjects.map((project) => (
              <ProjectCard project={project} key={project}/>
            ))}

          </div>
        </div>
        <div ref={contact} className="min-h-screen my-4">
          <h2>
            <TypeAnimation
              sequence={[
                'Contact Me',
                5000
              ]}
              wrapper="span"
              speed={50}
              repeat={1}
            />
          </h2>
          🛠️ WIP 🛠️
        </div>

      </div>

    </>
  )
}

export default App
