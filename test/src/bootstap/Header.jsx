import React from 'react'

function Header() {
  return (
    <>
    <nav class="navbar navbar-dark navbar-expand-lg fixed-top py-2 mt-3 mt-sm-0">
        <div class="container-xl">
            <a href="#" class="navbar-brand fs-2 text-uppercase">Restaurantly</a>
            <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item"><a href="#" class="nav-link text-light active">Home</a></li>
                    <li class="nav-item"><a href="#about" class="nav-link text-light">About</a></li>
                    <li class="nav-item"><a href="#services" class="nav-link text-light">Services</a></li>
                    <li class="nav-item"><a href="#special" class="nav-link text-light">Special</a></li>
                    <li class="nav-item"><a href="#events" class="nav-link text-light">Events</a></li>
                    <li class="nav-item"><a href="#gallery" class="nav-link text-light">Gallery</a></li>
                    <li class="nav-item dropdown"><a href="#" class="nav-link text-light dropdown-toggle"
                            id="navbarDropdown" data-bs-toggle="dropdown">Drop Down</a>
                        <ul class="dropdown-menu">
                            <li><a href="#" class="dropdown-item">Drop 1</a></li>
                            <li><a href="#" class="dropdown-item">Drop 2</a></li>
                            <li><a href="#" class="dropdown-item">Drop 3</a></li>
                            <li><a href="#" class="dropdown-item">Drop 4</a></li>
                            <li><a href="#" class="dropdown-item">Drop 5</a></li>
                        </ul>
                    </li>
                    <li class="nav-item"><a href="#contact" class="nav-link text-light">Contact</a></li>
                    <li class="nav-item"><a href="#faq" class="nav-link text-light">FAQ</a></li>
                </ul>
            </div>
            <button class="d-none d-lg-block btn btn-outline-warning rounded-pill px-4 text-light">BOOK A TABLE</button>
        </div>
    </nav>
  </>
  )
}

export default Header