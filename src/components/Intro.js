import React from 'react';
import Book1 from './assets/images/book-1.png';

function Intro() {
    return (
        <section id="intro">
            <div className="container-md">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-5 text-center text-md-start">
                        <h1>
                            <div className="display-2">Harry Potter </div>
                            <div className="display-5 text-muted">-J.K ROWLING <i className="bi bi-book-half"></i></div>
                        </h1>
                        <p className="lead my-4 text-muted">A Complete Series</p>
                        <a href="#pricing" className="btn btn-secondary btn-lg">Buy Now</a>
                        <a href="#sidebar" className="d-block mt-3" data-bs-toggle="offcanvas" role="button">
                            Explore other Books</a>
                    </div>
                    <div className="col-md-6 justify-content-center text-center d-none d-md-block">
                        <div className="ebookimage ">
                            <img className="img-fluid" src={Book1} alt="ebook"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro;