import React, { useState } from 'react'

function Testimonials() {
    const [testimonials, setTestimonials] = useState([{
        name: "Saul Goodman",
        bisness: "CEO & Founder",
        review:"For the target group, the result is worth taking care of until the airline takes over The accusers, however, need that, and need some discipline.Some faintness, but always a smile.",
        img: "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/testimonials/testimonials-1.jpg"
    }, 
    {
        name: "Sara Wilson",
        bisness: "Designer",
        review:"Export time, however, I was for the evils of the evils that I was going to be angry with the effort that I was going to be the one who was the one who was going to be the one who wanted to be.",
        img: "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/testimonials/testimonials-2.jpg"
    },
    {
        name: "Jena Karlis",
        bisness: "Store Owner",
        review:"For if I did not export the hair of my house, which are great, none of which I would bring to my house, the least time would be the labor that I was in our house.",
        img: "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/testimonials/testimonials-3.jpg"
    }

    ])
    const reviews = testimonials.map(detail);
    function detail(revieww) {
        return (
            <div className="col-4 testimonial-item">
                
                <p><i class="fa-solid fa-quote-left text-warning"></i>{revieww.review}<i class="fa-solid fa-quote-right text-warning"></i></p>
                <img src={revieww.img} alt="" srcset="" className='testimonial-img' />
                <h4>{revieww.name}</h4>
                <h5>{revieww.bisness}</h5>

            </div>

        )
    }
    return (
        <section class="list-gp ptb-40  bg-secondary menu" id="MENU">
            <div class="container">
                <div class="title">
                    <h6 class="subtitle text-uppercase position-relative d-inline-block">TESTIMONIALS</h6>
                    <h2 class="mb-5 text-warning">What they're saying about us</h2>
                </div>
                <div className="row col-12">
                    {reviews}
                    

                </div>

            </div>
        </section>
    )
}

export default Testimonials