import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Nav from "./Nav";

const Home = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/get-products")
      .then((response) => {
        if (response.data) setproducts(response.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to fetch products");
      });
  }, []);

  return (
    <div className="w-full h-full px-[1.7%]">
      <Nav></Nav>
      <Cards data={products}></Cards>
    </div>
  );
};

export default Home;
