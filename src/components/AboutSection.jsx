import { TypeAnimation } from 'react-type-animation'
import { memo } from 'react'

const AboutSection = memo(({ experiences }) => {
  return (
    <>
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
            Greetings! I am an undergraduate Computer Science student at the University of Texas at Dallas and aspiring software engineer. Through the various professional experiences and student-led initiatives that I have had the privilege of partaking in, I have been able to hone my skills as an engineer and showcase my passionate drive to craft innovative, creative, and impactful solutions through programming. This website is a display of my journey so far.
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
        {experiences.map((experience) => (
          <button key={experience.position} className='flex flex-col items-center justify-center'
            onClick={() => window.open(experience.link, '_blank')}>
            <h3 className='max-w-80'>{experience.position}</h3>
            <p>{experience.affiliation}</p>
            <p className='italic'>{experience.duration}</p>
          </button>
        ))}
      </div>
    </>
  )
})

export default AboutSection
