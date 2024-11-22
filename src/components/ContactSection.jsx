import { TypeAnimation } from 'react-type-animation'
import { memo } from 'react'

const ContactSection = memo(() => {
  return (
    <>
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
    </>
  )
})

export default ContactSection
