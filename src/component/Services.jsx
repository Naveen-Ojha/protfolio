import React from 'react';
import ServiceCard from './common/ServiceCard';
import { Link } from 'react-router-dom';
import Counter from './common/Counter';



function Services() {
    return (
        <>
            <div className='container my-5'>
                <div className='row'>
                    <h6 className='text-primary text-center'>Services</h6>
                    <h1 className='font-bold text-center'>This is My Expertise, The <br /> Services I'll Provide My Clients</h1>
                    <ServiceCard />
                    <div className='mt-5 pt-4 ps-5 ms-5'>
                        <p className='text-justify text-color font-bold'>Have any works you want to done by me? <Link to="/contact" className='text-primary'>Contact Me</Link> </p>
                        <p className='text-justify text-color'>If you have a question, reach out to us. Our dedicated support and service teams will ensure <br /> all of  questions and concerns are answered.</p>
                    </div>
                </div>
            </div>
            <Counter />
        </>
    )
}

export default Services
