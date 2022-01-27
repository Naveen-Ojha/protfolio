import React from 'react';
import ServiceData from '../Data/ServicesData';

function ServiceCard() {
    return (
        <>
            {
                ServiceData.map((curData) => {

                    return (
                        <div className='col-md-4' key={curData.id}>
                            <div className="card mt-5" style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <div className='icon mb-4'>{curData.icon}</div>
                                    <h4 className="card-title font-bold text-primary">{curData.title}</h4>
                                    <p className="card-text text-justify text-color">{curData.description}</p>
                                    {curData.link}
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    );
}

export default ServiceCard;
