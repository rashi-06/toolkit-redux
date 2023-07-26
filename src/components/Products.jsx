import React, {useState , useEffect} from 'react'
import "../App.css"

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((json)=>{
            setProducts(json);
            console.log(json);
        })
    },[])

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


                <button>Add to Cart</button>
            </div>
        ))}
      
        </div>
    </div>
  )
}

export default Products