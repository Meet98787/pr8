import React from 'react'

function Gallery() {
  return (
    <section class="gallery ptb-60 bg-secondary" id="gallery">
        <div class="container">
            <div class="title">
                <h6 class="subtitle text-uppercase position-relative d-inline-block">GALLERY</h6>
                <h2 class="mb-5 text-warning">Some photos from Our Restaurant</h2>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row px-2">
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 p-1">
                    <a type="button" class="open" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-1.jpg" width="100%" />
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 p-1">
                    <a type="button" class="open" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-2.jpg" width="100%" />
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 p-1">
                    <a type="button" class="open" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-3.jpg" width="100%" />
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 p-1">
                    <a type="button" class="open" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-4.jpg" width="100%" />
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 p-1">
                    <a type="button" class="open" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-5.jpg" width="100%" />
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 p-1">
                    <a type="button" class="open" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-6.jpg" width="100%" />
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 p-1">
                    <a type="button" class="open" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-7.jpg" width="100%" />
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 col-12 p-1">
                    <a type="button" class="open" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <img src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-8.jpg" width="100%" />
                    </a>
                </div>
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