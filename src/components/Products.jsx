import React, {useState , useEffect} from 'react'
import "../App.css"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

const Products = () => {

    const dispatch = useDispatch();

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((json)=>{
            setProducts(json);
            console.log(json);
        })
    },[])

    const addToCart = (product) =>{
        //dispatch add action;
        dispatch(add(product))
    }

  return (
    <div className='product'>
       <h1>Products</h1> 
      <div className="card">
        {products.map((product)=>(
            
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


                <button onClick={()=> addToCart(product)}>Add to Cart</button>
            </div>
        ))}
      
        </div>
    </div>
  )
}

export default Products