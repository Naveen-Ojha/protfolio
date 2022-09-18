import React from 'react';
import img from '../../images/profile-img.webp';


function TestimonialCard() {
    return (
        <>
            <div className="col-12 col-md-4">
                <div className="card mb-2">
                    <img className="card-img-top" src={img}
                        alt="Card image cap" />
                    <div className="card-body">
                        <h4 className="card-title font-weight-bold">card Title</h4>
                        <p className="card-text">lorem lorem</p>
                        <a className="btn btn-primary btn-md btn-rounded">Add to cart</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TestimonialCard;
