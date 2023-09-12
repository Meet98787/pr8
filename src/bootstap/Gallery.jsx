import React, { useState } from 'react'

function Gallery() {
    const [gallery, setgallery] = useState([{
        img:"https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-1.jpg"
    }, 
    {
        img:"https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-2.jpg"
    }, 
    {
        img:"https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-3.jpg"
    }, 
    {
        img:"https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-4.jpg"
    }, 
    {
        img:"https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-5.jpg"
    }, 
    {
        img:"https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-6.jpg"
    }, 
    {
        img:"https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-7.jpg"
    }, 
    {
        img:"https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-8.jpg"
    }

    ])
    const gallerys = gallery.map(imgs);
    function imgs(galler) {
        return (
            
            <div class="col-lg-3 col-md-4 col-sm-6 col-12 p-1">
                    <a type="button" class="open" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <img src={galler.img} alt="" srcset="" width="100%"/>
                        
                    </a>
                </div>
        )
    }
  return (
    <section class="gallery ptb-60 bg-primary" id="gallery">
        <div class="container">
            <div class="title">
                <h6 class="subtitle text-uppercase position-relative d-inline-block">GALLERY</h6>
                <h2 class="mb-5 text-warning">Some Photos from Our Restaurant</h2>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row px-2">
            {gallerys}
            </div>
            <div class="modal fade" id="staticBackdrop">
                <div class="text-end">
                    <button type="button" class="text-light pt-3 pe-5 fs-4 btn-close btn-close-white"
                        data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gallery