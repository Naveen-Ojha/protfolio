import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import emailjs from 'emailjs-com';

function Contact() {

    const [state, setstate] = useState(null)

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_cox1m7t', 'template_grp08sa', e.target, 'user_4N7iNzhIHVW4JRSaTRWRT')
            .then(res => {
                if(res.status === 200){
                    setstate("Email Sent Successfully! We will connact you soon.")
                }
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div style={{ width: "100%" }}><iframe width="100%" title='Google Map' height="610" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dwarka%20Delhi+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/golf-gps/">buy golf golf</a></iframe></div>
                    </div>
                    <div className='col-md-6 px-4'>
                        <div className='mb-5'>
                            <h3 className='font-bold mb-3'>Contact Us</h3>
                            <p className='text-color'>We're open htmlFor any suggestion or just to have a chat</p>
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
                                <p>Connect With What's App</p>
                            </div>
                        </div>
                        <div>
                            <form onSubmit={sendEmail}>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputName" className="form-label">Name</label>
                                            <input type="text" name='name' className="form-control" id="exampleInputName" aria-describedby="nameHelp" required />
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                            <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputSubject" className="form-label">Subject</label>
                                            <input type="text" name='subject' className="form-control" id="exampleInputSubject" aria-describedby="subjectHelp" required />
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputMessage" className="form-label">Message</label>
                                            <textarea type="text" name='message' rows="4" className="form-control" id="exampleInputMessage" aria-describedby="messageHelp" required />
                                        </div>
                                    </div>
                                </div>
                                <div className='text-success text-sm h5'>{state}</div>
                                <Button type='submit' variant="contained" color="primary" className='font-bold mobile-marg-btn-mesg'> SEND MESSAGE </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
