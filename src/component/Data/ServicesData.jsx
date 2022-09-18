import React from 'react';
import CodeIcon from '@material-ui/icons/Code';
// import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const ServiceData = [
    {
        id: 1,
        icon: <CodeIcon className='service-icon' />,
        title: "UI & UX Design",
        description: "A UI, UX, and front-end web developer is responsible for applying interactive and visual design principles on websites and web applications for a positive and cohesive user experience.",
        link: <a rel="noreferrer" target='_blank' href="https://en.wikipedia.org/wiki/User_experience_design" className="text-primary">Read more <ArrowForwardIcon /></a>
    },
    {
        id: 2,
        icon: <CodeIcon className='service-icon' />,
        title: "Web Development",
        description: "Web development refers to the building, creating, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. ",
        link: <a rel="noreferrer" target='_blank' href="https://www.w3schools.com/whatis/" className="text-primary">Read more <ArrowForwardIcon /></a>
    },
    {
        id: 3,
        icon: <CodeIcon className='service-icon' />,
        title: "Mobile Development",
        description: "Mobile application development is the set of processes and procedures involved in writing software for small, wireless computing devices, such as smartphones and other hand-held devices.",
        link: <a rel="noreferrer" target='_blank' href="https://en.wikipedia.org/wiki/Mobile_app_development" className="text-primary">Read more <ArrowForwardIcon /></a>
    }
]

export default ServiceData;