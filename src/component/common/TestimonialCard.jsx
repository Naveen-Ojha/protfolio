import React from 'react';
import img from '../../images/profile-img.webp';


function TestimonialCard() {
    return (
        <>
            <div class="col-12 col-md-4">
                <div class="card mb-2">
                    <img class="card-img-top" src={img}
                        alt="Card image cap" />
                    <div class="card-body">
                        <h4 class="card-title font-weight-bold">card Title</h4>
                        <p class="card-text">lorem lorem</p>
                        <a class="btn btn-primary btn-md btn-rounded">Add to cart</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TestimonialCard;
