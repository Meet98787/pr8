import React from 'react'

function Footer() {
  return (
    <footer>
    <div class="top-footer ptb-60 border-bottom bg-primary">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-12">
                    <h3 class="mb-4">RESTAURANTLY</h3>
                    <p class="mb-2 ">A108 Adam Street NY 535022, USA</p>
                    <p class="mb-1 "><b>Phone:</b> +1 5589 55488 55</p>
                    <p class="mb-3 "><b>Email:</b> info@example.com</p>
                    <ul class="social-link p-0 d-flex gap-2">
                        <li class="list-unstyled text-center"><a href="#" class="rounded-circle d-block"><i
                                    class="fa-brands fa-twitter"></i></a></li>
                        <li class="list-unstyled text-center"><a href="#" class="rounded-circle d-block"><i
                                    class="fa-brands fa-facebook-f"></i></a></li>
                        <li class="list-unstyled text-center"><a href="#" class="rounded-circle d-block"><i
                                    class="fa-brands fa-instagram"></i></a></li>
                        <li class="list-unstyled text-center"><a href="#" class="rounded-circle d-block"><i
                                    class="fa-brands fa-skype"></i></a></li>
                        <li class="list-unstyled text-center"><a href="#" class="rounded-circle d-block"><i
                                    class="fa-brands fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
                <div class="col-md-3 col-12">
                    <h4 class="mb-4">Useful Links</h4>
                    <ul class="foot-item ps-4">
                        <li class="position-relative list-unstyled mb-2"><a href="#"
                                class="text-light text-decoration-none">Home</a>
                        </li>
                        <li class="position-relative list-unstyled mb-2"><a href="#"
                                class="text-light text-decoration-none">About
                                Us</a></li>
                        <li class="position-relative list-unstyled mb-2"><a href="#"
                                class="text-light text-decoration-none">Services</a></li>
                        <li class="position-relative list-unstyled mb-2"><a href="#"
                                class="text-light text-decoration-none">Terms of
                                Service</a></li>
                        <li class="position-relative list-unstyled mb-2"><a href="#"
                                class="text-light text-decoration-none">Privacy
                                Policy</a></li>
                    </ul>
                </div>
                <div class="col-md-3 col-12">
                    <h4 class="mb-4">Our Services</h4>
                    <ul class="foot-item ps-4">
                        <li class="position-relative list-unstyled mb-2"><a href="#"
                                class="text-light text-decoration-none">We
                                Design</a></li>
                        <li class="position-relative list-unstyled mb-2"><a href="#"
                                class="text-light text-decoration-none">Web
                                Development</a></li>
                        <li class="position-relative list-unstyled mb-2"><a href="#"
                                class="text-light text-decoration-none">Product
                                Management</a></li>
                        <li class="position-relative list-unstyled mb-2"><a href="#"
                                class="text-light text-decoration-none">Marketing</a></li>
                        <li class="position-relative list-unstyled mb-2"><a href="#"
                                class="text-light text-decoration-none">Graphic
                                Design</a></li>
                    </ul>
                </div>
                <div class="col-md-3 col-12">
                    <h4 class="mb-4">Our Newsletter</h4>
                    <p class="mb-4">Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                    <div class="position-relative">
                        <form action="" class="position-relative">
                            <input type="email" name="" id="" class="form-control rounded-pill text-light"/>
                            <button
                                class="position-absolute end-0 top-0 btn btn-warning rounded-pill text-light border-warning px-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="bottom-footer ptb-20">
        <div class="container text-center">
            <h6><span class="fw-normal">© Copyright</span> Restaurantly. <span class="fw-normal">All Rights
                    Reserved</span></h6>
            <h6 class="fw-light">Developed by <span class="text-warning fw-normal">Meet</span></h6>
        </div>
    </div>
</footer>
  )
}

export default Footer