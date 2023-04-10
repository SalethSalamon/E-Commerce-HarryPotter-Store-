import Intro from './Intro';
import Topics from './Topics';
import Reviews from './Reviews';
import Footer from './Footer';
import Register from './Register';
import Offcanvas from './Offcanvas';
import Book from './Book';
import React from 'react'


function Home() {
  return (
    <div>
        <Intro/>
        <Book/>
        <Topics/>
        <Reviews/>
        <Footer/>
        <Register/>
        <Offcanvas/>
    </div>
  )
}

export default Home
