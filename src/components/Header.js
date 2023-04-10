import React from 'react';
import HeadLogo from './assets/images/download.png';
import { Link} from 'react-router-dom'
import { useSelector } from 'react-redux';



function Header() {
    // show navbar on scroll after

    // let myScrollFunc = () => {
    //     let head = document.getElementById("Head");
    //     let y = window.scrollY;
    //     if (y >= 600) {
    //         head.className = "Head show"
    //     } else {
    //         head.className = "Head hide"
    //     }
    // };
    // window.addEventListener("scroll", myScrollFunc);
    const list = useSelector((state) => state.cart.list)

    return (
        <div id='Head' className='Head'> <nav className="navbar navbar-expand-md ">
            <div className="container-xxl">

                <Link to="/" className="navbar-brand"><span><img src={HeadLogo} alt="" /></span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Books</Link>
                        </li>
                        <li className="nav-item">

                            <Link to="Tshirt" className="nav-link">Buy T-Shirt</Link>
                        </li>
                        <li className="nav-item">

                            <Link to="MagicSticks" className="nav-link">Magic Sticks</Link>
                        </li>
                        <li className="nav-item">

                            <Link to="Contact" className="nav-link">Get in Touch</Link>
                        </li>
                        <li className="nav-item ">
                             <Link to="Cart" className="cart btn btn-secondary position-relative"><i className="bi bi-cart-fill"></i><p className='cart-display-count'>{list.length} </p></Link>                  
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}

export default Header