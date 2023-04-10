import React from 'react'
import Ebook1 from './assets/images/rectangle-11.webp';
import Ebook2 from './assets/images/fantastic-beasts-crimes-of-grindelwald-screenplay.png';
import Ebook3 from './assets/images/fb-secrets-dumbledore.webp';

function Offcanvas() {
  return (
    <div> <div className="offcanvas offcanvas-start bg-light" tabIndex="-1" id="sidebar">
    <div className="offcanvas-header text-center">
        <h3 className="offcanvas-title">Fantastic Beasts Series</h3>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
    </div>


    <div className="offcanvas-body">
        <div className="row my-1 justify-content-center g-3">
            <div className="col-10">
                <div className="card border-1">
                    <div className="card-body text-center pt-3">
                        <h4 className="card-title">Fantastic Beasts and Where to Find Them</h4>
                        <p className="lead card-subtitle">eBook download only</p>
                        <div className="card-img mt-2">
                            <img src={Ebook1} alt="ebook"/>
                        </div>
                        <a href="#" className="btn btn-outline-primary mt-2">Explore Now</a>
                    </div>
                </div>
            </div>

            <div className="col-10">
                <div className="card">
                    <div className="card-body text-center pt-3">
                        <h4 className="card-title">Fantastic Beasts: The Crimes of Grindelwald</h4>
                        <p className="lead card-subtitle">eBook download only</p>
                        <div className="card-img mt-2">
                            <img src={Ebook2} alt="ebook"/>
                        </div>
                        <a href="#" className="btn btn-outline-primary mt-2">Explore Now</a>
                    </div>
                </div>
            </div>

            <div className="col-10">
                <div className="card">
                    <div className="card-body text-center pt-3">
                        <h4 className="card-title">Fantastic Beasts: The Secrets of Dumbledore</h4>
                        <p className="lead card-subtitle">eBook download only</p>
                        <div className="card-img mt-2">
                            <img src={Ebook3} alt="ebook"/>
                        </div>
                        <a href="#" className="btn btn-outline-primary mt-2">Explore Now</a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div></div>
  )
}

export default Offcanvas