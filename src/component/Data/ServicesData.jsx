import React from 'react';
import CodeIcon from '@material-ui/icons/Code';
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const ServiceData = [
    {
        id: 1,
        icon: <CodeIcon className='service-icon' />,
        title: "UI & UX Design",
        description: "create user-friendly interfaces that enable users to understand how to use complex technical products.",
        // link: <Link to="" className="text-primary">Read more <ArrowForwardIcon /></Link>
    },
    {
        id: 2,
        icon: <CodeIcon className='service-icon' />,
        title: "Web Development",
        description: "Pretty fast loading with responsive design, suits all devices and use cases.",
        // link: <Link to="" className="text-primary">Read more <ArrowForwardIcon /></Link>
    },
    {
        id: 3,
        icon: <CodeIcon className='service-icon' />,
        title: "Mobile Development",
        description: "Intuative and visually appealing apps with UX like user will get everything inside the app.",
        // link: <Link to="" className="text-primary">Read more <ArrowForwardIcon /></Link>
    }
]

export default ServiceData;