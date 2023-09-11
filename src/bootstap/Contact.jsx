import React from 'react'

function Contact() {
  return (
    <section class="form ptb-60 bg-primary" id="contact">
        <div class="container">
            <div class="title">
                <h6 class="subtitle text-uppercase position-relative d-inline-block">contact</h6>
                <h2 class="mb-5 text-warning">Contact Us</h2>
            </div>
        </div>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d21043.119611747054!2d72.80830095835425!3d21.194814673572406!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1676009248596!5m2!1sen!2sin"
            width="100%" height="350" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div class="container mt-5">
            <form action="#">
                <div class="row">
                    <div class="col-md-4 col-12">
                        <div class="contact-item d-flex mb-3">
                            <span class="bg-warning rounded-circle text-center">
                                <i class="fa-solid fa-location-dot fs-5"></i>
                            </span>
                            <div class="ps-3">
                                <h5 class="mb-1">Location</h5>
                                <p>A108 Adam Street, New York, <br/> NY 535022</p>
                            </div>
                        </div>
                        <div class="contact-item d-flex mb-3">
                            <span class="bg-warning rounded-circle text-center">
                                <i class="fa-regular fa-clock fs-5"></i>
                            </span>
                            <div class="ps-3">
                                <h5 class="mb-1">Open Hours:</h5>
                                <p>Monday-Saturday: <br/>
                                    11:00 AM - 2300 PM</p>
                            </div>
                        </div>
                        <div class="contact-item d-flex mb-3">
                            <span class="bg-warning rounded-circle text-center">
                                <i class="fa-regular fa-envelope fs-5"></i>
                            </span>
                            <div class="ps-3">
                                <h5 class="mb-1">Email:</h5>
                                <p>info@example.com</p>
                            </div>
                        </div>
                        <div class="contact-item d-flex mb-3">
                            <span class="bg-warning rounded-circle text-center">
                                <i class="fa-solid fa-mobile-screen-button fs-5"></i>
                            </span>
                            <div class="ps-3">
                                <h5 class="mb-1">Call:</h5>
                                <p>+911234567891</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 col-12">
                        <div class="row">
                            <form action="#" method="post">
                                <div class="col-md-6 mb-3">
                                    <div class="form-floating">
                                        <input type="text" id="name" class="form-control text-light"
                                            placeholder="Your Name" data-bs-toggle="tooltip" data-bs-placement="left"
                                            title="Please enter your name" required/>
                                        <label>Your Name</label>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-3">
                                    <div class="form-floating">
                                        <input type="email" id="email" class="form-control text-light"
                                            placeholder="Your Email" data-bs-toggle="tooltip" data-bs-placement="right"
                                            title="Please enter your email" required/>
                                        <label>Your Email</label>
                                    </div>
                                </div>
                                <div class="col-12 mb-3">
                                    <div class="form-floating">
                                        <input type="text" id="subject" class="form-control text-light"
                                            placeholder="subject" data-bs-toggle="tooltip" data-bs-placement="right"
                                            title="Please enter your subject"/>
                                        <label>Subject</label>
                                    </div>
                                </div>
                                <div class="col-12 mb-3">
                                    <div class="form-floating">
                                        <textarea name="m" id="message" class="form-control text-light"
                                            placeholder="Message" data-bs-toggle="tooltip" data-bs-placement="right"
                                            title="Please enter your message"></textarea>
                                        <label>Message</label>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <button id="form-btn"
                                        class="btn border-0 btn-warning text-light rounded-pill px-4 py-2">Send
                                        Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact