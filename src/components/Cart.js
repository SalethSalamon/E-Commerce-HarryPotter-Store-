import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ModifyItem, RemoveItem } from '../redux/reducers/cartReducer';
import CartProduct from './CartProduct'



function Cart() {
  const list = useSelector((state) => state.cart.list)



  const dispatch = useDispatch();

  const IncrementItem = (item) => {

    dispatch(ModifyItem({ ...item, count: item.count + 1, st: item.price,totalprice: item.price + item.st }))


  }
  const DecrementItem = (item) => {
    if (item.count === 1) {
      dispatch(RemoveItem(item))
    }
    else {
      dispatch(ModifyItem({ ...item, count: item.count - 1, st: item.price }))

    }
  }

  const RemoveItemFromCart = (item) => {
    dispatch(RemoveItem(item))
  }



  return (
    <div>
      {list.length > 0 ?
        (<>
          {list.map((item) =>
          (<CartProduct {...item} key={item.id}
            IncrementItem={() => IncrementItem(item)}
            DecrementItem={() => DecrementItem(item)}
            RemoveItem={() => RemoveItemFromCart(item)}
    
          />
          ))}

       
          

          <div className='w-100 d-flex justify-content-center'>
            <button className='btn btn-success'>Go to Checkout </button>
          </div>
          <div className='text-center'>
            
          </div>
        </>
        ) : (
          <h5 className='text-center mt-3 '>No Items In The Cart</h5>
        )}
    </div>
  );
}

export default Cart