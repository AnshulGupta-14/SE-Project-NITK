import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Nav = () => {
  const [search, setsearch] = useState("");
  var [products, setproducts] = useState([]);
  const getSearch = () => {
    axios
      .get(`http://localhost:3000/get-products`)
      .then((response) => {
        setproducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getSearch();
  }, [search]);

  // products = products.filter((product) => {
  //   return (
  //     product.title.toLowerCase().includes(search.toLowerCase()) ||
  //     product.author.toLowerCase().includes(search.toLowerCase())
  //   );
  // });

  console.log(products);

  return (
    <div className="fixed left-0 top-0 w-full">
      <div className="w-full h-[10vh] p-2 bg-zinc-300 px-10 flex items-center">
        <div className="w-[20%]"></div>
        <div className="relative p-1 h-full w-[50%] mx-auto flex justify-between">
          <input
            type="text"
            placeholder="Find Books"
            className="p-2 border-[2px] border-black w-[91%] h-full rounded-lg"
            value={search}
            onChange={(e) => setsearch(e.target.value)}
          />
          <button className="p-3 flex items-center bg-[#003034] text-white text-2xl rounded-lg">
            <i className="ri-search-2-line"></i>
          </button>
          <div className="absolute w-[80%] z-50 max-h-[50vh] bg-zinc-200 text-black text-xl top-[100%] left-[5%] overflow-auto">
            {products &&
              search &&
              products.map((s, i) => {
                return (
                  <Link
                    to={`/${s.media_type}/details/${s.id}`}
                    key={i}
                    className="p-5 w-full bg-zinc-300 p-8 hover:bg-zinc-400 hover:font-semibold border-b-2 border-white duration-300 flex items-center justify-start"
                  >
                    <img
                      className="w-[5vw] h-[10vh] object-cover object-center rounded-full mr-10 shadow-xl bg-black"
                      src=""
                      alt=""
                    />
                    <div>
                      <h1>{s.title}</h1>
                      <h3 className="text-sm">By {s.author}</h3>
                      <h3 className="text-sm">Price</h3>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
        <div className="flex items-center justify-between bg-red-100 w-[20%]">
          <h1>Language</h1>
          <NavLink to={"/login"}>Login</NavLink>
          <NavLink to={'/addproduct'}>Sell</NavLink>
        </div>
      </div>
      <div className="w-full bg-white p-1"></div>
    </div>
  );
};

export default Nav;
