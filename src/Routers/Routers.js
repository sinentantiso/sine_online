import React from "react";
import {Routes, Route } from "react-router-dom"
import Cart from "../Pages/Cart";
import Checkout from "../Pages/Checkout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ProductDetails from "../Pages/ProductDetails";
import Shop from "../Pages/Shop";
import Signup from "../Pages/Signup";


const Routers = () => {
  return <Routes>
    <Route path="home" element={<Home/>}/>
  </Routes>
}

export default Routers;
