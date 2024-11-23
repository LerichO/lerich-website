import { TypeAnimation } from 'react-type-animation'
import { memo } from 'react'

const HomeSection = memo(() => {
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
    </>
  )
})

export default HomeSection