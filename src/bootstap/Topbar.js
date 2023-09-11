import React from "react";

function Topbar() {
  return (
    // topbar
    <div className="top-header fixed-top w-100 py-2">
        <div className="container-xl d-flex justify-content-between align-item-center">
            <div>
                <ul className="d-sm-flex p-0 gap-2">
                    <li className="list-unstyled text-light"><i className="text-warning fa-solid fa-mobile-screen-button"></i>
                        +911234567891</li>
                    <li className="list-unstyled text-light"><i className="text-warning fa-regular fa-clock"></i> Mon-Sat: 11AM
                        - 23PM</li>
                </ul>
            </div>
            <div>
                <ul className="d-flex gap-2">
                    <li className="list-unstyled text-warning">En</li>
                    <li className="list-unstyled text-light">/</li>
                    <li className="list-unstyled text-light">Gu</li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Topbar;