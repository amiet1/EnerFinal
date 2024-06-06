
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import LoginForm from "./components/Login";
import Navbar from "./components/Navbar";
import SignupForm from "./components/SignupForm";
import Products from "./components/Products";
import CartCheckout from "./components/CartCheckout";
import './App.css';
import SingleProduct from "./components/SingleProduct";

//*manage by state by using useState

function App() {
///needs nav bar on all pages

  return (
    //this route holds the component and that component will link to whatever is on the page
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm/>} />
      <Route path="/products" element={<Products/>}/>
      <Route path="/cartcheckout" element={<CartCheckout/>}/>
      <Route path="/product/:id" element={<SingleProduct/>}/>
    </Routes>
  
   </BrowserRouter>
  );
}

export default App;
