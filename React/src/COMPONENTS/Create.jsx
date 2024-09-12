import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { ProductContext } from './UTILS/Context';
import { Link, useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

const Create = () => {
    const [products,setProducts] = useContext(ProductContext);
    const {register,handleSubmit} = useForm();
    const navigate = useNavigate();
  return (
    <form className='flex flex-col w-[71.25vw]' onSubmit={handleSubmit((data)=>{
        data.id = nanoid();
        if(data.title==="" || data.image==="" || data.description==="" || data.price==="" || data.category===""){
            alert("Each and every feild must not be empty");
            return;
        }
        setProducts([...products,data]);
        localStorage.setItem('products', JSON.stringify([...products,data]));
        navigate("/")
    })} action="">
        <h1 className='text-3xl font-semibold my-10'>Add New Product</h1>
        <input 
        className='w-2/3 rounded-md px-5 py-3 bg-zinc-100 my-2' 
        {...register('image')} 
        type="url" 
        placeholder='Image link' />

        <input 
        className='text-xl w-2/3 rounded-md px-5 py-3 bg-zinc-100 my-2' 
        {...register('title')} 
        type="text" 
        placeholder='Title' />

        <div className='w-2/3'>
            <input 
            className='text-xl w-[45%] rounded-md px-5 py-3 bg-zinc-100 my-2 mr-[10%]' 
            {...register('category')} 
            type="text" 
            placeholder='Category' />

            <input 
            className='text-xl w-[45%] rounded-md px-5 py-3 bg-zinc-100 my-2' 
            {...register('price')} 
            type="text" 
            placeholder='Price' />
        </div>

        <input 
        className='text-xl w-2/3 rounded-md px-5 py-3 bg-zinc-100 my-2' 
        {...register('description')} 
        type="text" 
        placeholder='Description' />

        <div>
            <button className='rounded-lg bg-red-200 w-1/4 px-3 py-2 mt-10'>Add New Product</button>
        </div>
    </form>
  )
}

export default Create
