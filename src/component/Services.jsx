import React from 'react';
import ServiceCard from './common/ServiceCard';
import { Link } from 'react-router-dom';
import Counter from './common/Counter';



function Services() {
    return (
        <>
            <div className='container my-5'>
                <div className='row'>
                    <h1 className='text-primary text-center'>Services & Features</h1>
                    <h5 className='font-bold text-center'>This is My Expertise, The Services I'll Provide My Clients</h5>
                    {/* <h6>Whatever I design or develop is of highest quality and has awesome user experience as I am a strong critic of digital contents and I feel very deep about digital solutions being being extremely user friendly and light weight.</h6> */}
                    <ServiceCard />
                    <div className='mt-5 pt-4 ps-5 ms-5'>
                        <p className='text-justify text-color font-bold'>Have any works you want to done by me? <Link to="/contact" className='text-primary'>Contact Me</Link> </p>
                        {/* <p className='text-justify text-color'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <br /> there live the blind texts.</p> */}
                    </div>
                </div>
            </div>
            <Counter />
        </>
    )
}

export default Services
