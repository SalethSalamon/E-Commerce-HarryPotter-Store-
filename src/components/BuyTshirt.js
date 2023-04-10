import React from 'react'
import PriceCard from './PriceCard';
import { useState } from 'react';
import { useEffect } from 'react';
import harry from './assets/images/tshirt/harry.jpg'
import emmawatson from './assets/images/tshirt/emma-watson.jpg'
import hogwarts from './assets/images/tshirt/hogwarts.jpg'
import ravenclaw from './assets/images/tshirt/ravenclaw.jpg'


function BuyTshirt() {
   
    const Tshirt = [{
        title: "Harry Potter Tshirt",
        price: 12.99,
        image: harry,
        id:'TSHIRT1',
        stocks:24
    },
    {
        title: "Hermione Granger",
        price: 12.99,
        image: emmawatson,
        id:'TSHIRT2',
        stocks:0
    },
    {
        title: "Hogwarts",
        price: 9.99,
        image: hogwarts,
        id:'TSHIRT3',
        stocks:12
    },
    {
        title: "Ravenclaw",
        price: 8.99,
        image: ravenclaw,
        id:'TSHIRT4',
        stocks:44
    },
    ];
    // const [Tshirt, setTshirt] = useState([])

    // const fetchUserData =()=>{
    //     fetch('https://fakestoreapi.com/products')
    //     .then(res=>{return res.json()})
        
    //     .then(data => {
    //         setTshirt(data)
    //       })
    // }

    // useEffect(() => {
    //     fetchUserData()
    //   }, [])

    return (
        <div>
            <section id="tshirtpricing" className="bg-light mt-5">
                <div className="container-lg">
                    <div className="text-center">
                        <h2>Pricing Plans</h2>
                        <p className="lead fw-bold">Choose a pricing plan to suit you.</p>
                    </div>
                    <div className="row my-5 align-items-center justify-content-center g-3">
                        {Tshirt.map((product) => { return (<PriceCard title={product.title} price={product.price} image={product.image} key={product.id} id={product.id} stocks={product.stocks}/>) })}
                    </div>
                </div>
            </section>
        </div>
    )
}


export default BuyTshirt