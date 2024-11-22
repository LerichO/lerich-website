import { useState, useRef, lazy, Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { TypeAnimation } from 'react-type-animation'
import './App.css'

import listOfProjects from './projects.json'
import listOfExperiences from './experience.json'

// Lazy load section components
const HomeSection = lazy(() => import('./components/HomeSection'))
const AboutSection = lazy(() => import('./components/AboutSection'))
const ProjectsSection = lazy(() => import('./components/ProjectsSection'))
const ContactSection = lazy(() => import('./components/ContactSection'))

// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-48">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
  </div>
)

function App() {
  const home = useRef(null)
  const about = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)

  // State to track which sections have been viewed
  const [sectionsViewed, setSectionsViewed] = useState({
    home: false,
    about: false,
    projects: false,
    contact: false
  })

  const scrollTo = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.1 // 10% of the section is visible
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          switch(entry.target.id) {
            case 'home-section':
              setSectionsViewed(prev => ({ ...prev, home: true }))
              break
            case 'about-section':
              setSectionsViewed(prev => ({ ...prev, about: true }))
              break
            case 'projects-section':
              setSectionsViewed(prev => ({ ...prev, projects: true }))
              break
            case 'contact-section':
              setSectionsViewed(prev => ({ ...prev, contact: true }))
              break
          }
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe section refs
    const sections = [home, about, projects, contact]
    sections.forEach(section => {
      if (section.current) {
        observer.observe(section.current)
      }
    })

    return () => {
      sections.forEach(section => {
        if (section.current) {
          observer.unobserve(section.current)
        }
      })
    }
  }, [])

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
          <Suspense fallback={<LoadingSpinner />}>
            <section 
              ref={home} 
              id="home-section" 
              className="min-h-screen flex flex-col justify-center"
            >
              {sectionsViewed.home && <HomeSection />}
            </section>
            
            <section 
              ref={about} 
              id="about-section" 
              className="min-h-screen py-12 mt-24"
            >
              {sectionsViewed.about && <AboutSection experiences={listOfExperiences} />}
            </section>

            <section 
              ref={projects} 
              id="projects-section" 
              className="min-h-screen py-12 mt-24"
            >
              {sectionsViewed.projects && <ProjectsSection projects={listOfProjects} />}
            </section>

            <section 
              ref={contact} 
              id="contact-section" 
              className="min-h-screen py-12 mt-24"
            >
              {sectionsViewed.contact && <ContactSection />}
            </section>
          </Suspense>
        </div>
      </main>
    </>
  )
}

export default App