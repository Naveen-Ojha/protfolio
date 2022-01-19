import React from 'react';
import CodeIcon from '@material-ui/icons/Code';
import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const ServiceData = [
    {
        id: 1,
        icon: <CodeIcon className='service-icon' />,
        title: "UI & UX Design",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        link: <Link to="" className="text-primary">Read more <ArrowForwardIcon /></Link>
    },
    {
        id: 2,
        icon: <CodeIcon className='service-icon' />,
        title: "Web Development",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        link: <Link to="" className="text-primary">Read more <ArrowForwardIcon /></Link>
    },
    {
        id: 3,
        icon: <CodeIcon className='service-icon' />,
        title: "Mobile Development",
        description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
        link: <Link to="" className="text-primary">Read more <ArrowForwardIcon /></Link>
    }
]

export default ServiceData;