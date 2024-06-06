import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
        <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="CartCheckout"> My Cart</Link>
              </li>
              <li>
                <Link to="Products">Products</Link>
              </li>
            </ul>=
        </div>
      
    </div>
  );
};
//connect routes for each page 
//add hover features 
//add componet to top of page 

export default Navbar;
