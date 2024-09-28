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
      <NavLink to="/signup">SignUp</NavLink>
      {!localStorage.getItem("token") ? (
        <NavLink to="/login">Login</NavLink>
      ) : (
        <button onClick={handelsubmit}>LogOut</button>
      )}

      {/* <div className="w-full">
        {products.length > 0
          ? products.map((product, i) => {
              return (
                <div key={i}>
                  <h1>{product.name}</h1>
                  <p>{product.description}</p>
                  <img src={product.cover_image} alt="" />
                </div>
              );
            })
          : "products"}
      </div> */}

      <Cards data={products}></Cards>
    </div>
  );
};

export default Home;
