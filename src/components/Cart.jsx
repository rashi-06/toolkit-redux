import React from 'react'
import { useDispatch } from 'react-redux';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import { remove } from '../store/cartSlice';

const Cart = () => {

    const cartProducts = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const removeFromCart = (id) =>{
        // dispatch a remove action
        dispatch(remove(id));
    }

  return (
    <div className='product'>
    <h1>Products</h1> 
   <div className="card">
     {cartProducts.map((product)=>(
         
         <div className='each'>
             <img
             className="card-image"
             src={product.image} // Replace with your image URL
             alt="Card"
             />
       
             <div className="card-content">
                 <h3 className="card-title">{product.title}</h3>
                 <p className="card-description">{product.description}</p>
                 <h3>${product.price}</h3>
             </div>


             <button onClick={()=> removeFromCart(product.id)}>Remove</button> 
         </div>
     ))}
   
     </div>
 </div>
  )
}

export default Cart