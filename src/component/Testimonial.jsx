import React from 'react';
import TestimonialCard from './common/TestimonialCard';

function Testimonial() {
    return (
        <>
            <div className='container my-5'>
                <h6 className='text-primary text-center'>Testimonial</h6>
                <h1 className='font-bold text-center mb-5'>Our Successful Students</h1>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators mt-5">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className='row'>
                                <TestimonialCard />
                                <TestimonialCard />
                                <TestimonialCard />
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='row'>
                                <TestimonialCard />
                                <TestimonialCard />
                                <TestimonialCard />
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='row'>
                                <TestimonialCard />
                                <TestimonialCard />
                                <TestimonialCard />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Testimonial;
