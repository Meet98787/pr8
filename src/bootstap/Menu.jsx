import React, { useState } from 'react'

function Menu() {
    const [product, setProduct] = useState([{
        name: "Lobster Bisque",
        price: "$5.95",
        dic:"Lorem, deren, trataro, filede, nerada",
        img: "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/menu/lobster-bisque.jpg"
    }, {
        name: "Bread Barrel",
        price: "$6.95",
        dic:"Lorem, deren, trataro, filede, nerada",
        img: "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/menu/bread-barrel.jpg"
    }, {
        name: "Bread Barrel",
        price: "$7.95",
        dic:"A delicate crab cake served on a toasted roll with lettuce and tartar sauce",
        img: "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/menu/cake.jpg"
    },
    {
        name: "Caesar Selections",
        price: "$8.95",
        dic:"Lorem, deren, trataro, filede, nerada",
        img: "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/menu/caesar.jpg"
    },
    {
        name: "Tuscan Grilled",
        price: "$9.95",
        dic:"Grilled chicken with provolone, artichoke hearts, and roasted red pesto",
        img: "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/menu/tuscan-grilled.jpg"
    },
    {
        name: "Mozzarella Stick",
        price: "$4.95",
        dic:"Lorem, deren, trataro, filede, nerada",
        img: "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/menu/mozzarella.jpg"
    },{
        name: "Greek Salad",
        price: "$9.95",
        dic:"Fresh spinach, crisp romaine, tomatoes, and Greek olives",
        img: "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/menu/greek-salad.jpg"
    },
    {
        name: "Spinach Salad",
        price: "$9.95",
        dic:"Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette",
        img: "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/menu/spinach-salad.jpg"
    },{
        name: "Lobster Roll",
        price: "$12.95",
        dic:"Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll",
        img: "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/menu/lobster-roll.jpg"
    }
    ])
    const newArr = product.map(getFull);
    function getFull(item) {
        return (
            <div className="col-6 row my-3">
                    <div className="col-2">
                    <img src={item.img} alt="" className='menu-img' />
                    </div>
                    <div className="col-10 ">
                        <div className="d-flex justify-content-between align-items-center"><h4 className='menu-h'>{item.name} </h4>
                        <p className="dot"> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</p>
                        <h5 className='text-warning'>{item.price}</h5>
                        </div>
                        <p className='menu-dic'>{item.dic}</p>
                        
                    </div>
                </div>
        )
    }
    return (
        <section class="list-gp ptb-40 bg-secondary menu" id="MENU">
            <div class="container">
                <div class="title">
                    <h6 class="subtitle text-uppercase position-relative d-inline-block">MENU</h6>
                    <h2 class="mb-5 text-warning">Check Our Tasty Menu</h2>
                </div>

                <div class="col-lg-12 d-flex justify-content-center">
                    <ul className='d-flex list-none'>
                        <li className='active'><a href="">All</a></li>
                        <li><a href="">Starters</a></li>
                        <li><a href="">Salads</a></li>
                        <li><a href="">Specialty</a></li>
                    </ul>
                </div>
                <div className="row col-12">
                    {newArr}
                {/* <div className="col-6 row my-4">
                    <div className="col-2">
                    <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/menu/lobster-bisque.jpg" alt="" className='menu-img' />
                    </div>
                    <div className="col-10 ">
                        <div className="d-flex justify-content-between align-items-center"><h4 className='menu-h'>Lobster Bisque </h4>
                        <p className="dot"> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .</p>
                        <h5 className='text-warning'>$5.95</h5>
                        </div>
                        <p className='menu-dic'>Lorem, deren, trataro, filede, nerada</p>
                        
                    </div>
                </div> */}

                </div>
                
            </div>
        </section>
    )
}

export default Menu