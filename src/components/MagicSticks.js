import React from 'react'
import PriceCard from './PriceCard';
import stick1 from './assets/images/sticks/stick1.jpg'
import stick2 from './assets/images/sticks/stick2.jpg'
import stick3 from './assets/images/sticks/stick3.png'



function MagicSticks() {
   
    const Sticks = [{
        title: "Harry Potter Stick",
        price: 8.99,
        image: stick1,
        id:'STICK1',
        stocks:24
    },
    {
        title: "Dumbledoor Stick",
        price: 6.99,
        image: stick2,
        id:'STICK2',
        stocks:11
    },
    {
        title: "Voldamot ",
        price: 4.99,
        image: stick3,
        id:'STICK3',
        stocks:5
    },
  
    ];

    return (
        <div>
            <section id="magicstickspricing" className="bg-light mt-5">
                <div className="container-lg">
                    <div className="text-center">
                        <h2>Pricing Plans</h2>
                        <p className="lead fw-bold">Choose a pricing plan to suit you.</p>
                    </div>
                    <div className="row my-5 align-items-center justify-content-center g-3">
                        {Sticks.map((product) => { return (<PriceCard title={product.title} price={product.price} image={product.image} key={product.title} id={product.id} stocks={product.stocks}/>) })}
                    </div>
                </div>
            </section>
        </div>
    )
}


export default MagicSticks