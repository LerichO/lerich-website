import { useState, useRef } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { TypeAnimation } from 'react-type-animation'
import './App.css'

import listOfProjects from './projects.json'
import listOfExperiences from './experience.json'

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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Lerich Osay's Personal Website</title>
        <meta name="description" content="Personal website portfolio of Lerich Osay - current Computer Science student, future Software Engineer." />
      </Helmet>
      <main className='flex md:flex-row flex-col gap-8 w-full'>
        <div className="md:h-full md:w-1/6 flex md:flex-col flex-row items-start justify-center fixed md:left-0 md:top-0 p-4">
          <button onClick={() => scrollTo(home)} className='w-full md:text-right text-xl'>Home</button>
          <button onClick={() => scrollTo(about)} className='w-full md:text-right text-xl'>About</button>
          <button onClick={() => scrollTo(projects)} className='w-full md:text-right text-xl'>Projects</button>
          <button onClick={() => scrollTo(contact)} className='w-full md:text-right text-xl'>Contact</button>
        </div>
        <div className='w-full md:w-5/6 md:ml-[16.67%] overflow-y-auto flex flex-col'>
          <section ref={home} className="min-h-screen flex flex-col justify-center">
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
          </section>
          <section ref={about} className="min-h-screen py-12 mt-24">
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
            <div className="flex flex-col md:flex-row text-justify items-center">
              <img src='/linkedin.jpg' className='w-[350px] object-scale-down' />
              <div className='flex flex-col gap-4 items-center'>
                <p className='px-12 text-lg'>
                  Greetings! I am an undergraduate Computer Science student at the University of Texas at Dallas and aspiring software engineer. Through the various professional experiences and student-led initiatives that I have had the privilege of partaking in, I have been able to hone my skills as a developer and showcase my passionate drive to craft innovative, creative, and impactful solutions through programming. This website is a display of my journey so far.
                </p>
                <p className='px-12 text-lg'>
                  My strengths currently lay in full-stack software development, and I am eager to continue broadening my expertise to encompass more compelling realms of Computer Science such as machine learning and cloud computing.
                </p>
                <button
                  onClick={() => window.open('/LerichOsay_Website_Resume.pdf', '_blank')}
                  className='text-xl w-1/3'>
                  View My Resume
                </button>
              </div>
            </div>
            <div className='py-12 flex flex-wrap gap-24 w-full justify-center'>
              {listOfExperiences.map((experience) => (
                <button className='flex flex-col items-center justify-center'
                  onClick={() => window.open(experience.link, '_blank')}>
                    <h3 className='max-w-80'>{experience.position}</h3>
                    <p>{experience.affiliation}</p>
                    <p className='italic'>{experience.duration}</p>
                </button>
              ))}
            </div>
          </section>
          <section ref={projects} className="min-h-screen py-12 mt-24">
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
            <p className='mb-4 text-xl flex flex-wrap justify-center'>
              Here is a list of some of the projects and work I am proud to have contirbuted to.
              Feel free to explore and interact to learn more!
            </p>
            <div className='flex flex-wrap gap-5 p-8 justify-center items-center'>
              {listOfProjects.map((project) => (
                <ProjectCard project={project} key={project} />
              ))}

            </div>
          </section>
          <section ref={contact} className="min-h-screen py-12 mt-24">
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
            <p className=''>
              Feel free to reach out at 
              <span> <a href="mailto:lerich.osay@utdallas.edu" className='underline'>Lerich.Osay@UTDallas.edu</a></span>
            </p>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
