import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const products = [
    {
        "id": 1,
        "name": "EcoClean Detergent",
        "category": "Household",
        "price": 12.99,
        "description": "An eco-friendly laundry detergent that leaves clothes fresh and clean without harmful chemicals."
    },
    {
        "id": 2,
        "name": "QuickCharge Pro",
        "category": "Electronics",
        "price": 29.99,
        "description": "A high-speed, multi-device charger that can power up your gadgets in no time."
    },
    {
        "id": 3,
        "name": "ComfyCloud Pillow",
        "category": "Home & Living",
        "price": 39.99,
        "description": "A memory foam pillow that provides ultimate comfort and support for a good night’s sleep."
    },
    {
        "id": 4,
        "name": "Gourmet Spice Rack",
        "category": "Kitchen",
        "price": 24.99,
        "description": "A set of exotic spices from around the world, perfect for enhancing your culinary creations."
    },
    {
        "id": 5,
        "name": "AquaPure Water Bottle",
        "category": "Outdoors",
        "price": 19.99,
        "description": "A BPA-free, reusable water bottle with built-in filtration system for pure, fresh-tasting water on the go."
    },
    {
        "id": 6,
        "name": "ZenGarden Yoga Mat",
        "category": "Fitness",
        "price": 49.99,
        "description": "A premium, non-slip yoga mat with extra cushioning for maximum comfort during your practice."
    },
    {
        "id": 7,
        "name": "SmartHome Hub",
        "category": "Technology",
        "price": 99.99,
        "description": "An all-in-one smart home controller that seamlessly integrates with all your smart devices."
    },
    {
        "id": 8,
        "name": "Glitz & Glam Makeup Set",
        "category": "Beauty",
        "price": 59.99,
        "description": "A luxurious makeup set that includes all the essentials for a glamorous look, perfect for any occasion."
    },
    {
        "id": 9,
        "name": "HealthyHarvest Snack Box",
        "category": "Food & Beverage",
        "price": 34.99,
        "description": "A curated box of nutritious and delicious snacks made from organic and all-natural ingredients."
    },
    {
        "id": 10,
        "name": "TechGuard Phone Case",
        "category": "Accessories",
        "price": 14.99,
        "description": "A rugged, shock-proof phone case that provides superior protection for your smartphone."
    }
]


const Products = () => {
    const [isLoading, setIsLoading] = useState(true)
    
  useEffect(() => {
    if(!isLoading) {
        fetch('https://ener-tahj.commercelayer.io/api/skus', {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/vnd.api+json",
              "Authorization": `Bearer ${localStorage.getItem('token')}`
            },
          }).then(response => response.json()).then(json => console.log(json))
    }
  }, [isLoading])



  useEffect(() => {
    fetch('https://auth.commercelayer.io/oauth/token', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/vnd.api+json",
        //   "Authorization": "Bearer 521lMeRAFMkgDI89SqLU6DtviZSgKp5vsuRNId3bKwI"
        },
        body: JSON.stringify({
          client_id: '521lMeRAFMkgDI89SqLU6DtviZSgKp5vsuRNId3bKwI',
          grant_type: 'client_credentials',
          client_secret: 'V3jZov6IRmSwLQ_V0e1H71sccvvPda2304ffIpPuyrs',
        })
      }).then(response => response.json()).then(json => {
        localStorage.setItem('token', json.access_token)
        setIsLoading(false)
    })
  }, [])

  return (
    <div className='product_cards'>
      {products.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
            <div className="product_card">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>{product.category}</p>
                <p>{product.price}</p>
            </div>
        </Link>
        ))}
      
    </div>
  );
};

export default Products;

// const [images, setImages] = useState([]); //set state on images on images page

// useEffect(()=>{
//   const fetch = fetch(''); //fetch from images endpoint to get all images on useeffect state 
// },[])