import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
    const [slider, setslider] = useState([{
        img:"https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/event-birthday.jpg",
        name: "Birthday Parties",
        price: "$189",
        p1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptates at, consequuntur deleniti beatae illo odio.",
        p2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, assumenda?",
        p3:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
        p4:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, soluta?",
        p5:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempore laudantium ab nobis natus fugiat excepturi illum est eligendi! Quibusdam?",
    }, 
    {
        img:"https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/event-private.jpg",
        name: "Private Parties",
        price: "$290",
        p1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptates at, consequuntur deleniti beatae illo odio.",
        p2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, assumenda?",
        p3:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
        p4:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, soluta?",
        p5:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempore laudantium ab nobis natus fugiat excepturi illum est eligendi! Quibusdam?",
    },
    , 
    {
        img:"https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/event-custom.jpg",
        name: "Custom Parties",
        price: "$99",
        p1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptates at, consequuntur deleniti beatae illo odio.",
        p2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, assumenda?",
        p3:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
        p4:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, soluta?",
        p5:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus tempore laudantium ab nobis natus fugiat excepturi illum est eligendi! Quibusdam?",
    }
    ])
    const slid = slider.map(sli);
    function sli(item) {
        return (
            <Carousel.Item>
            <div class="row">
                <div class="col-lg-6 col-12 mb-2 mb-lg-0">
                    <img src={item.img} alt="" class="d-block w-100" />
                </div>
                <div class="col-lg-6 col-12">
                    <h4 class="text-warning">{item.name}</h4>
                    <h3>{item.price}</h3>
                    <p class="fst-italic">{item.p1}</p>
                    <p>{item.p2}</p>
                    <p>{item.p3}</p>
                    <p>{item.p4}</p>
                    <p>{item.p5}</p>
                </div>
            </div>
        </Carousel.Item>
        )
    }
    return (
        <section class="slider ptb-100" id="events">
            <div class="container">
                <div class="title">
                    <h6 class="subtitle text-uppercase position-relative d-inline-block">Events</h6>
                    <h2 class="mb-5 text-warning">Organize Your Events in our Restaurant</h2>
                </div>
                <Carousel data-bs-theme="dark">
                    {slid}
                </Carousel>

            </div>
        </section>
    )
}

export default Slider