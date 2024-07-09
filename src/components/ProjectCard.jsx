import { useState, useEffect } from "react"
import '../App.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

function ProjectCard(props) {
    const { title, description, image, tech, github, otherLink } = props.project;

    const [open, setOpen] = useState(false)

    return (
        <div className="w-full h-72 p-8 bg-[#3F3F3F] flex flex-col"
            onClick={() => setOpen(!open)}
        >
            <div className="w-full flex flex-row justify-between">
                <h3>{title}</h3>
                <div className="flex flex-row h-10 w-20 mt-4 gap-4 justify-center items-center">
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

            </div>
            {open && (
                <>
                    <p className="my-2">{description}</p>
                    <div className="flex flex-wrap flex-row gap-x-6 justify-center items-center">
                        {tech.map((item) => (
                            <p>{item}</p>
                        ))}

                    </div>
                </>
            )}

        </div>
    );
}

export default ProjectCard