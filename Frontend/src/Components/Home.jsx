import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cards from "./Cards";

const Home = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useState([]);

  const handelsubmit = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    axios.get('http://localhost:3000/get-products').then((response) => {
      if(response.data) setproducts(response.data);
    }).catch((error) => {
      console.log(error);
      alert("Failed to fetch products");
    })
  }, [])

  return (
    <div>
      <Cards data={products}></Cards>
    </div>
  );
};

export default Home;
