import React from 'react'

function CartProduct(props) {

  return (
    <div className='container-fluid'>
      <div className='d-flex m-2 align-items-center justify-content-center w-100'>
        <div className='col-2 col-md-5 d-flex align-items-center justify-content-center '>
          <img className='' src={props.image} height={150} width={140} alt={props.title} />
        </div>
        <div className='col-10 col-md-7'>
          <div className='col-12'>
            <div className='row'>

              <div className='col-12 col-md-5 text-center'><h5 className='card-title ms-2  '>{props.title}</h5></div>

              <div className='col-12 col-md-5 text-center'><h6 className='me-2 me-4 mb-0 mt-2'>Price: ${props.price}</h6></div>
            </div>
          </div>

          <div className='col-12 text-center mt-2'>
            <div className='row'>

              <div className='col-12 col-md-5'>
                <button className='btn btn-danger ms-2 ' onClick={props.IncrementItem}>+</button>
                <span className='ms-2'>Qty: {props.count}</span>
                <button className='btn btn-danger ms-2' onClick={props.DecrementItem}>-</button>
              </div>

              <div className='col-12 col-md-5 mt-2'>
                <span className=''> SUB TOTAL : ${(props.st.toFixed(2))}</span>
                <button className='btn btn-danger ms-2' onClick={props.RemoveItem}>Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartProduct