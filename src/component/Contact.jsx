import React from 'react';
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';

function Contact() {
    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_cox1m7t', 'template_grp08sa', e.target, 'user_4N7iNzhIHVW4JRSaTRWRT')
            .then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div style={{ width: "100%" }}><iframe width="100%" height="610" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dwarka%20More%20Delhi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/golf-gps/">buy golf golf</a></iframe></div>
                    </div>
                    <div className='col-md-6 px-4'>
                        <div className='mb-5'>
                            <h3 className='font-bold mb-3'>Contact Us</h3>
                            <p className='text-color'>We're open for any suggestion or just to have a chat</p>
                        </div>
                        <div className='row'>
                            <div className='col-md-4'>
                                <h6 className='font-bold'>MY ADDRESS:</h6>
                                <p className='text-color'>Dwarka more New Delhi(India)</p>
                            </div>
                            <div className='col-md-4'>
                                <h6 className='font-bold'>MY EMAIL:</h6>
                                <p>naveen.ojha.rewa@gmail.com</p>
                            </div>
                            <div className='col-md-4'>
                                <h6 className='font-bold'>MY PHONE:</h6>
                                <p>+91 8770434284</p>
                            </div>
                        </div>
                        <div>
                            <form onSubmit={sendEmail}>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div class="mb-3">
                                            <label for="exampleInputName" class="form-label">Name</label>
                                            <input type="text" name='name' class="form-control" id="exampleInputName" aria-describedby="nameHelp" required />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                                            <input type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div class="mb-3">
                                            <label for="exampleInputSubject" class="form-label">Subject</label>
                                            <input type="text" name='subject' class="form-control" id="exampleInputSubject" aria-describedby="subjectHelp" required />
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div class="mb-3">
                                            <label for="exampleInputMessage" class="form-label">Message</label>
                                            <textarea type="text" name='message' rows="4" class="form-control" id="exampleInputMessage" aria-describedby="messageHelp" required />
                                        </div>
                                    </div>
                                </div>
                                <Button type='submit' variant="contained" color="primary" className='font-bold'> SEND MESSAGE </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
