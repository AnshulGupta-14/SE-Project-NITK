import axios from "axios";
import React, { useState } from "react";

const AddProduct = () => {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [image, setimage] = useState('');

  const handelSubmit = ()=>{
    if(name==="" || price==="" || description==="" || category==="" || image===""){
      alert("Each and every feild must not be empty");
      return;
    }
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("price", price);
    formdata.append("description", description);
    formdata.append("category", category);
    formdata.append("image", image);
    const url = 'http://localhost:3000/add-product';

    axios.post(url, formdata).then((res)=>{
        if(res.data.message) alert(res.data.message);
        setname("");
        setprice("");
        setdescription("");
        setcategory("");
        setimage('');
    }).catch((err)=>{
        console.log(err);
      alert("Failed to add product")
    })
  }

  return (
    <div>
        <label>Product Name</label>
        <input
          type="text"
          value={name}
          className="border"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
        <br />
        <label>Product Price</label>
        <input
          type="number"
          value={price}
          className="border"
          onChange={(e) => {
            setprice(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">Product Description</label>
        <textarea
          className="border"
          value={description}
          rows="4"
          cols="50"
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />
        <br />
        <label htmlFor="">Category</label>
        <select
          name=""
          id=""
          value={category}
          onChange={(e) => {
            setcategory(e.target.value);
          }}
        >
          <option>Fictional</option>
          <option>Non-Fictional</option>
          <option>History</option>
        </select>
        <br />
        <label htmlFor="">Product Image</label>
        <input
          type="file"
          className="border"
          onChange={(e) => {
            setimage(e.target.files[0]);
          }}
        />
        <br />
        <input type="submit" value="Add Product" onClick={handelSubmit}/>
    </div>
  );
};

export default AddProduct;
