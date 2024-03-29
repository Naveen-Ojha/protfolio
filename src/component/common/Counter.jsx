import React, { useEffect } from 'react';
import img from '../../images/service-bg-project.webp';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import AssignmentIcon from '@material-ui/icons/Assignment';

function Counter() {
    useEffect(() => {
        const counters = document.querySelectorAll('.counter');
        counters.forEach((count) => {
            count.innerHTML = 0;
            const updateCount = () => {
                const targetCount = +count.getAttribute("data-target");
                const startingCount = Number(count.innerHTML);

                const incr = targetCount / 6;

                if (startingCount < targetCount) {
                    count.innerHTML = `${Math.round(startingCount + incr)}`;
                    setTimeout(updateCount, 300)
                } else {
                    count.innerHTML = targetCount;
                }
            }
            updateCount();
        });
    })
    return (
        <>
            <div className='mb-5 mobile-height-auto' style={{ backgroundImage: `url(${img})`, width: "100%", height: "230px", background: "linear-gradient(0deg, rgb(38 67 211 / 100%), rgb(32 53 201 / 34%)) 0% 0% / cover", backgroundSize: "cover" }}>
                <div className="container pt-5 mobile-padding-counter">
                    <div className='row mt-3'>
                        <div className='col-md-4 text-white'>
                            <div className='row align-items-center'>
                                <div className='col-md-3'>
                                    <CheckCircleOutlineIcon style={{ fontSize: "60px" }} />
                                </div>
                                <div className='col-md-9'>
                                    <div className="counter h1" style={{ fontWeight: "900" }} data-target="18"></div>
                                    <h5 className='font-bold'>Project completed</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 text-white'>
                            <div className='row align-items-center'>
                                <div className='col-md-3'>
                                    <PeopleOutlineIcon style={{ fontSize: "70px" }} />
                                </div>
                                <div className='col-md-9'>
                                    <div className="counter h1" style={{ fontWeight: "900" }} data-target="6"></div>
                                    <h5 className='font-bold'>Client</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 text-white'>
                            <div className='row align-items-center'>
                                <div className='col-md-3'>
                                    <AssignmentIcon style={{ fontSize: "60px" }} />
                                </div>
                                <div className='col-md-9'>
                                    <div className="counter h1" style={{ fontWeight: "900" }} data-target="3"></div>
                                    <h5 className='font-bold'>ongoing Project</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Counter;
