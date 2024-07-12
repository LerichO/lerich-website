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
          <li><button onClick={() => scrollTo(about)}>About</button></li>
          <li><button onClick={() => scrollTo(projects)}>Projects</button></li>
          <li><button onClick={() => scrollTo(contact)}>Contact</button></li>
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

      <div>
        <div ref={about} className="min-h-screen mb-4 mt-8">
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
            <img src='/linkedin.jpg' width={350}/>
            <p className='px-8 text-lg'>Greetings! My name is Lerich Osay and I am an undergraduate Computer Science at the University of Texas at Dallas; welcome to my website!</p>
          </div>
        </div>
        <div ref={projects} className="min-h-screen mb-4 mt-8">
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
          <p className='mb-4 flex flex-wrap justify-center'>
            Here is a list of some of the projects and work I am proud to have contirbuted to.
            Feel free to explore and interact to learn more!
          </p>
          <div className='flex flex-wrap gap-5 p-8 justify-center items-center'>
            {listOfProjects.map((project) => (
              <ProjectCard project={project} key={project}/>
            ))}

          </div>
        </div>
        <div ref={contact} className="min-h-screen mb-4 mt-8">
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
