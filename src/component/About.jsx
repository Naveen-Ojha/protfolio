import React from 'react';
import img from '../images/profile-img.webp';

function About() {
    return (
        <>
            <div className='container my-5 subtitle'>
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
                                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                </p>
                                <h4 className='py-3'>I Do Web Design & Developement since I was 18 Years Old</h4>
                                <p className='text-justify text-color'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            </div>
                            <div className="tab-pane fade font-bold " id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <h2 className='py-3'>Skills</h2>
                                <p className='text-justify text-color'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>
                            <div className="tab-pane fade font-bold " id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <h2 className='py-3'>Art & Creative Director</h2>
                                <p className='text-justify text-color'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <h2 className='py-3'>Art & Creative Director</h2>
                                <p className='text-justify text-color'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                <h2 className='py-3'>Art & Creative Director</h2>
                                <p className='text-justify text-color'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
