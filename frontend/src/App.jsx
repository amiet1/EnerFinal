
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import LoginForm from "./components/Login";
import Navbar from "./components/Navbar";
import SignupForm from "./components/SignupForm";


import './App.css';

//*manage by state by using useState

function App() {
///needs nav bar on all pages

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm/>} />
    </Routes>
  
   </BrowserRouter>
  );
}

export default App;
