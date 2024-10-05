import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import ProductDetails from "../Components/ProductDetails";
import UserProfile from "../Components/UserProfile";
import AddProduct from "../Components/AddProduct";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/productdetails" element={<ProductDetails />}></Route>
      <Route path="/userprofile" element={<UserProfile />}></Route>
      <Route path="/addproduct" element={<AddProduct />}></Route>
    </Routes>
  );
};

export default Routing;
