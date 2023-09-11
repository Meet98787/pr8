import React from 'react'

function Hero() {
  return (
    <section class="hero vh-100 d-flex align-content-center flex-wrap position-relative" id="top">
        <div class="container">
            <div class="row">
                <div class="col-md-8 col-12 text-center text-md-start">
                    <h1 class="text-light display-4 fw-bold">Welcome to <span class="text-warning">Restaurantly</span>
                    </h1>
                    <h4 class="text-light mb-4">Delivering great food for more than 18 years!</h4>
                    <button class="btn btn-outline-warning text-uppercase rounded-pill px-md-4 text-light ms-2 me-3">our
                        menu</button>
                    <button class="btn btn-outline-warning text-uppercase rounded-pill px-md-4 text-light">book a
                        table</button>
                </div>
                <div class="col-md-4 col-12 text-center pt-4 mt-2 mt-md-0">
                    <button class="btn rounded-circle bg-warning play text-center"><i
                            class="fa-solid fa-play text-light fs-5"></i></button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero