import { useState, useEffect } from "react"
import { TypeAnimation } from 'react-type-animation'
import '../App.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

function ProjectCard(props) {
    const { title, description, image, tech, github, otherLink } = props.project;

    const [open, setOpen] = useState(false)

    return (
        <div
            className={`w-full transition-all duration-300 ease-in-out ${open ? 'h-[500px] md:h-96' : 'h-24'} p-8 bg-[#3F3F3F] flex flex-col overflow-hidden`}
            onClick={() => setOpen(!open)}
        >
            <div className="w-full flex flex-row justify-between">
                <h3>{title}</h3>
                {!open && (
                    <div className="flex flex-row h-10 w-20 gap-4 justify-center items-center">
                        {github && (
                            <a href={github} target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://cdn.simpleicons.org/github/white"
                                    width={30}
                                    height={30}
                                    alt="GitHub"
                                    onClick={() => window.open(github, '_blank')}
                                    className='link'
                                />
                            </a>
                        )}
                        {otherLink && (
                            <a href={otherLink} target="_blank" rel="noopener noreferrer">
                                <LinkIcon
                                    className='link'
                                />
                            </a>
                        )}
                    </div>
                )}
            </div>
            {open && (
                <div className="w-full flex justify-between">
                    <div className="flex flex-col justify-start w-3/5">
                        <div className="flex flex-row h-10 w-20 my-4 gap-4 justify-start items-center">
                            {github && (
                                <a href={github} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://cdn.simpleicons.org/github/white"
                                        width={30}
                                        height={30}
                                        alt="GitHub"
                                        onClick={() => window.open(github, '_blank')}
                                        className='link'
                                    />
                                </a>
                            )}
                            {otherLink && (
                                <a href={otherLink} target="_blank" rel="noopener noreferrer">
                                    <LinkIcon
                                        className='link'
                                    />
                                </a>
                            )}
                        </div>
                        <div className="flex flex-wrap flex-row gap-x-6 justify-left items-center">
                            {tech.map((item) => (
                                <p>{item}</p>
                            ))}

                        </div>
                        <p className="my-2 text-left">
                            <TypeAnimation
                                sequence={[
                                    description,
                                    5000
                                ]}
                                wrapper="span"
                                speed={100}
                                repeat={1}
                            />
                        </p>
                    </div>
                    <div id="project-thumbnail" className="w-2/5">
                        Image here
                    </div>
                </div>
            )}

        </div>
    );
}

export default ProjectCard