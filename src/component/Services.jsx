import React from 'react';
import ServiceCard from './common/ServiceCard';
import { Link } from 'react-router-dom';
import img from '../images/service-bg-project.webp';



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
                        <p className='text-justify text-color'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <br /> there live the blind texts.</p>
                    </div>
                </div>
            </div>
            <div className='mb-5' style={{ backgroundImage: `url(${img})`, width: "100%", height: "250px", background:"linear-gradient(0deg, rgb(38 67 211 / 100%), rgb(32 53 201 / 34%)) 0% 0% / cover",backgroundSize:"cover" }}></div>
        </>
    )
}

export default Services
