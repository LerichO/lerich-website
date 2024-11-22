import { lazy, Suspense, memo } from 'react'
import { TypeAnimation } from 'react-type-animation'

const ProjectCard = lazy(() => import('./ProjectCard'))

const ProjectsSection = memo(({ projects }) => {
  return (
    <>
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
        Here is a list of some of the projects and work I am proud to have contributed to.
        Feel free to explore and interact to learn more!
      </p>
      <div className='flex flex-wrap gap-5 p-8 justify-center items-center'>
        <Suspense fallback={<div>Loading projects...</div>}>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </Suspense>
      </div>
    </>
  )
})

export default ProjectsSection
