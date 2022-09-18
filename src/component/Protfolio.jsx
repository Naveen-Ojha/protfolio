import React from 'react';
import ProtfolioData from './Data/ProtfolioData';

function Protfolio() {
    return (
        <>
            <div className='container my-5'>
                <div className='row'>
                    <h6 className='text-primary text-center'>Protfolio</h6>
                    <h1 className='font-bold text-center mb-5'>My Latest Work</h1>
                    {
                        ProtfolioData.map((curvalue) => {
                            const { id, img, text } = curvalue;
                            return (
                                <div key={id} className="protfolio-card mb-4 col-md-6 col-12">
                                    <img src={img} alt="Avatar" className="image" style={{ width: "100%",height:"300px" }} />
                                    <div className="middle text-center">
                                        <div className="text">{text}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Protfolio;
