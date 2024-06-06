import React, {useState} from 'react';
import { useParams } from 'react-router-dom';


const SingleProduct = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({
        name: "Gourmet Spice Rack",
        category: "Kitchen",
        price: 24.99,
        description: "A set of exotic spices from around the world, perfect for enhancing your culinary creations."
    })

    // useState(async () => {
    //     const response = await fetch(`tahj-api/get-product-by-id/${id}`)
    //     setProduct(response.json())
    // }, [])

    console.log(product)

  return (
    <div>
        <div className="product_card">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.category}</p>
                <p>{product.price}</p>
            </div>
        
      
    </div>
  )
}

export default SingleProduct
