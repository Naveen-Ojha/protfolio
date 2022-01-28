import React from 'react';
import BlogData from '../component/Data/BlogData';
import DateRangeIcon from '@material-ui/icons/DateRange';


function Blog() {
    return (

        <>
            <div className='container my-5'>
                <div className='row'>
                    <h6 className='text-primary text-center'>Blog</h6>
                    <h1 className='font-bold text-center mb-5'>Recent From Blog</h1>
                    {
                        BlogData.map((curEle) => {
                            const { id, title, desc, srcImg, date } = curEle
                            return (
                                <div key={id} class="col-md-6">
                                    <div className='card'>
                                        <img src={srcImg} alt="Blog img" style={{ width: "100%", height: "350px" }} />
                                        <div className='card-body'>
                                            <div className=""><DateRangeIcon className='text-primary' /> <span className='text-color'>{date}</span> </div>
                                            <h5 className="font-bold py-3">{title}</h5>
                                            <p className="text-justify text-color">{desc}</p>
                                        </div>
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

export default Blog;
