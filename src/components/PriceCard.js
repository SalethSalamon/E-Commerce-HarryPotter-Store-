import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux/reducers/cartReducer';
import { useNavigate } from 'react-router-dom'



function PriceCard(props) {

    const[alert,setAlert] =useState(false);

    const navigate = useNavigate();

    const list = useSelector((state) => state.cart.list)
    const element = list.find((item) => item.id === props.id)

    const dispatch = useDispatch();
    
    const addtoCart = () => {
        setAlert(true);
        setTimeout(()=>setAlert(false),3000)
        dispatch(addItem(props));
    };


    return (
        <div className="col-8 col-sm-6 col-md-4 col-xl-3">
            { alert && <span className='alert alert-success mb-2'>Item Added to Cart</span>}
            <div className="card border-0">
                <div className="card-body text-center mt-2 py-2">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="display-5 my-2 text-primay fw-bold">${props.price}</p>
                    <div className="card-img">
                        <img src= {props.image} alt="ebook" />
                    </div>
                    {props.stocks > 0 ?( <> {element?.count > 0 ? (<button className="btn btn-warning btn-lg mt-3" onClick={() => navigate('/Cart')}>Go to Carts</button >
                    ) : (<button className="btn btn-outline-primary btn-lg mt-3 mb-2" onClick={addtoCart}>Add to Cart</button>)}
                    </>) :(<button className="btn btn-outline-danger btn-lg mt-3 mb-2">Out of Stocks</button>)}
                </div>
            </div>
        </div>
    )
}


export default PriceCard

// {element?.count > 0 ? (<button className="btn btn-danger btn-lg mt-3" onClick={() => navigate('/Cart')}>Go to Carts</button >
// ) : (<button className="btn btn-outline-primary btn-lg mt-3" onClick={addtoCart}>Add to Cart</button>)}