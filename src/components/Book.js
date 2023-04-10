import React from 'react'
import Chapter1Image from './assets/images/chapter-1.png';
import Chapter2Image from './assets/images/chapter-2.jpg';
import Chapter3Image from './assets/images/chapter-3.jpg';
import Chapter4Image from './assets/images/chapter-4.jpg';
import Chapter5Image from './assets/images/chapter-5.jpg';
import Chapter6Image from './assets/images/chapter-6.png';
import Chapter7Image from './assets/images/chapter-7.png';
import PriceCard from './PriceCard';


function Book() {


    const Books = [{
        title: "Harry Potter and the Chamber of Secrets",
        price: 12.99,
        image: Chapter1Image,
        id:"BOOK1",
        stocks:76
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        price: 18.99,
        image: Chapter2Image,
        id:"BOOK2",
        stocks:7
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        price: 24.99,
        image: Chapter3Image,
        id:"BOOK3",
        stocks:23
    },
    {
        title: "Harry Potter and the Goblet of Fire",
        price: 20.99,
        image: Chapter4Image,
        id:"BOOK4",
        stocks:12
    },
    {
        title: "Harry Potter and the Order of the Phoenix",
        price: 16.99,
        image: Chapter5Image,
        id:"BOOK5",
        stocks:0
    },
    {
        title: "Harry Potter and the Half-Blood Prince",
        price: 19.99,
        image: Chapter6Image,
        id:"BOOK6",
        stocks:0
    },
    {
        title: "Harry Potter and the Deathly Hallows",
        price: 20.99,
        image: Chapter7Image,
        id:"BOOK7",
        stocks:12
    },
    ];

    return (
        <div>
            <section id="pricing" className="bg-light mt-5">
                <div className="container-lg">
                    <div className="text-center">
                        <h2>Pricing Plans</h2>
                        <p className="lead fw-bold">Choose a pricing plan to suit you.</p>
                    </div>
                    <div className="row my-5 align-items-center justify-content-center g-3">
                        {Books.map((product) => { return (<PriceCard title={product.title} price={product.price} image={product.image} key={product.id} stocks={product.stocks} id={product.id} />) })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Book;