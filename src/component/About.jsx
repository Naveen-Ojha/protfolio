import React from 'react';
import img from '../images/profile-img.webp';

function About() {
    return (
        <>
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-5'>
                        <img src={img} alt="about img" className='w-100' style={{ height: "500px" }} />
                    </div>
                    <div className='col-md-7 px-5'>
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                            <li className="tabs me-5" role="presentation">
                                <button className="custom-btn p-2 active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">ABOUT ME</button>
                            </li>
                            <li className="tabs me-5" role="presentation">
                                <button className="custom-btn p-2" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">SKILLS</button>
                            </li>
                            <li className="tabs me-5" role="presentation">
                                <button className="custom-btn p-2" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">EXPERIENCE</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show font-bold active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <h2 className='py-3'>My Story</h2>
                                <p className='text-justify text-color'>
                                    I am a Full Stack Developer, and I am from Delhi, and I studied at Maharshi Dayanand University and passed out the 2021 batch. And I started working when I was 20 years old. and currently, I have approx three years of experience in web development.
                                </p>
                                <h4 className='py-3'>I Do Web Developement since I was 18 Years Old</h4>
                                <p className='text-justify text-color'>I Love coding. I loved to code when I started coding, so I learned new things and learned many programming languages. I never stop learning. and I learned fresh technology daily</p>
                            </div>
                            <div className="tab-pane fade font-bold " id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <h2 className='py-3'>Skills</h2>
                                <p className='text-justify text-color'>I am working on many technologies like Python, Javascript, Typescript, MongoDB, React, Angular, Html, CSS, Tailwind CSS etc., and I never stop learning. I also want to learn AWS and mobile app development. And I am a daily learner because I want to update with new technology.</p>

                                <ul className='d-flex'>
                                    <div className='me-auto'>
                                        <li className='my-3'>
                                            Angular
                                        </li>
                                        <li className='my-3'>
                                            React
                                        </li>
                                        <li className='my-3'>
                                            Python
                                        </li>
                                        <li className='my-3'>
                                            MongoDB
                                        </li>
                                        <li className='my-3'>
                                            Javascript
                                        </li>
                                        <li className='my-3'>
                                            Typescript
                                        </li>
                                    </div>
                                    <div>
                                        <li className='my-3'>
                                            Html
                                        </li>
                                        <li className='my-3'>
                                            CSS
                                        </li>
                                        <li className='my-3'>
                                            Tailwind CSS
                                        </li>
                                        <li className='my-3'>
                                            Postman
                                        </li>
                                        <li className='my-3'>
                                            Git
                                        </li>
                                        <li className='my-3'>
                                            Gitlab
                                        </li>
                                    </div>
                                </ul>
                            </div>
                            <div className="tab-pane fade font-bold " id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <h2 className='py-2'>
                                    <h5 className='fw-bold'>Angular</h5>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                                    </div>
                                </h2>
                                <h2 className='py-2'>
                                    <h5 className='fw-bold'>React</h5>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                                    </div>
                                </h2>
                                <h2 className='py-2'>
                                    <h5 className='fw-bold'>Javascript</h5>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                                    </div>
                                </h2>
                                <h2 className='py-2'>
                                    <h5 className='fw-bold'>Typescript</h5>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                                    </div>
                                </h2>
                                <h2 className='py-2'>
                                    <h5 className='fw-bold'>MongoDB</h5>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
                                    </div>
                                </h2>
                                <h2 className='py-2'>
                                    <h5 className='fw-bold'>Python</h5>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
                                    </div>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
