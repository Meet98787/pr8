import React from 'react'

function Slider() {
  return (
    <section class="slider ptb-100" id="events">
        <div class="container">
            <div class="title">
                <h6 class="subtitle text-uppercase position-relative d-inline-block">Events</h6>
                <h2 class="mb-5 text-warning">Organize Your Events in our Restaurant</h2>
            </div>
            <div class="carousel slide" id="myCarousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="row">
                            <div class="col-lg-6 col-12 mb-2 mb-lg-0">
                                <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/event-birthday.jpg" alt="" class="d-block w-100"/>
                            </div>
                            <div class="col-lg-6 col-12">
                                <h4 class="text-warning">Birthday Parties</h4>
                                <h3>$189</h3>
                                <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                                    voluptates at, consequuntur deleniti beatae illo odio.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, assumenda?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, soluta?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempore laudantium
                                    ab nobis natus fugiat excepturi illum est eligendi! Quibusdam?</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-lg-6 col-12 mb-2 mb-lg-0">
                                <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/event-private.jpg" alt="" class="d-block w-100"/>
                            </div>
                            <div class="col-lg-6 col-12">
                                <h4 class="text-warning">Private Parties</h4>
                                <h3>$290</h3>
                                <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                                    voluptates at, consequuntur deleniti beatae illo odio.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, assumenda?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, soluta?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempore laudantium
                                    ab nobis natus fugiat excepturi illum est eligendi! Quibusdam?</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="row">
                            <div class="col-lg-6 col-12 mb-2 mb-lg-0">
                                <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/event-custom.jpg" alt="" class="d-block w-100"/>
                            </div>
                            <div class="col-lg-6 col-12">
                                <h4 class="text-warning">Custom Parties</h4>
                                <h3>$99</h3>
                                <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                                    voluptates at, consequuntur deleniti beatae illo odio.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, assumenda?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.</p>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, soluta?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempore laudantium
                                    ab nobis natus fugiat excepturi illum est eligendi! Quibusdam?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-indicators">
                    <button type="button" class="active" data-bs-target="#myCarousel" data-bs-slide-to="0"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"></button>
                </div>
            </div>
            </div>
    </section>
  )
}

export default Slider